import { Component, OnInit } from '@angular/core';
import { CoursService } from "app/cours/cours.service";
import { Cours } from "app/cours/cours.modal";

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  successMessage: string;
  errorMessage: string;
  cours = new Cours();
  courses: Cours[];
  p: number = 1;

  page = 4;
  collection = [];



  constructor(private coursService: CoursService) { }




  // ngOnInit() {
  //   this.getAllCourses();
  // }
  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }



    this.getAllCourses();

  }



  clear() { }
  save() {
    this.successMessage = '';
    this.errorMessage = '';


    this.coursService.createCours(this.cours)
      .subscribe(cours => {
        this.successMessage = 'cours was created!';
        console.log('cours was created');
        console.log(cours);
    this.getAllCourses();
        //  location.reload();
      });
  }
  getAllCourses() {
    this.coursService.getAllCours()
      .subscribe(

      courses => this.courses = courses,
      error => this.errorMessage = <any>error);
  }





}
