import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { SectionService } from 'app/cours/section.service';
import { Cours } from 'app/cours/cours.modal';
import { Section } from 'app/cours/section.modal';
import { Subscription } from 'rxjs/Rx';
import { CoursService } from "app/cours/cours.service";

@Component({
  selector: 'app-cours-detail',
  templateUrl: './cours-detail.component.html',
  styleUrls: ['./cours-detail.component.css']
})
export class CoursDetailComponent implements OnInit {
errorMessage = '';
  successMessage: string;
  varGlobal: any;
  subscription: Subscription;
  cours: Cours;
  section = new Section();
  sections: Section[];
  constructor(private sectionService: SectionService, private router: Router, private route: ActivatedRoute, private coursService: CoursService) { }

  ngOnInit() {

 this.subscription = this.route.params.subscribe((params: any) => {
      this.varGlobal = params['id'];
      this.coursService.findCoursById(this.varGlobal).subscribe(cours => {
        this.cours = cours;
      });
    });
    this.getCoursSections(this.varGlobal);



  }

    getCoursSections($id)
     {
      this.sectionService.getCoursSections(this.varGlobal)
        .subscribe(
        sections => this.sections = sections,
        error => this.errorMessage = <any>error);
    }


}
