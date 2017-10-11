import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Cours } from 'app/cours/cours.modal';
import { CoursService } from 'app/cours/cours.service';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent implements OnInit {
 

   successMessage: string;
  errorMessage: string;
  cours = new Cours();
  courses: Cours[];
  constructor(private coursService: CoursService) { }

  ngOnInit() {
    this.get();
  }


  get() {
    console.log("hello")
    this.coursService.getAllCours()
      .subscribe(
      courses => this.courses = courses,
      error => this.errorMessage = <any>error);
  }

}
