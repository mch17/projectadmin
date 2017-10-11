import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { CoursService } from "app/cours/cours.service";
import { Cours } from "app/cours/cours.modal";
import { Section } from "app/cours/section.modal";
import { SectionService } from "app/cours/section.service";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',

})
export class SectionComponent implements OnInit {
  errorMessage = '';
  successMessage: string;
  varGlobal: any;
  subscription: Subscription;
  cours: Cours;
  section = new Section();
  sections: Section[];
  constructor(private sectionService: SectionService, private route: ActivatedRoute, private coursService: CoursService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.varGlobal = params['id'];
      this.coursService.findCoursById(this.varGlobal).subscribe(cours => {
        this.cours = cours;
      });
    });
    this.getCoursSections(this.varGlobal);

  }



  clear() { }

  save() {
    this.sectionService.addSectionCours(this.section, this.varGlobal)
      .subscribe(quizQuestion => {
        this.successMessage = 'section was created!';
        console.log('section was created');
        console.log(quizQuestion);
            this.getCoursSections(this.varGlobal);

        // navigate back to the users page
        // this.router.navigate(['/users']);
       })
  }






    getCoursSections($id)
     {
      this.sectionService.getCoursSections(this.varGlobal)
        .subscribe(
        sections => this.sections = sections,
        error => this.errorMessage = <any>error);
    }







  }

