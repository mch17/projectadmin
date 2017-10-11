import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from "./quiz.modal";
import { QuizService } from "./quiz.service";
import { CoursService } from "app/cours/cours.service";
import { Cours } from "app/cours/cours.modal";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',

})
export class QuizComponent implements OnInit {
  quiz = new Quiz();
  successMessage: string;
  errorMessage: string;
  quizs: Quiz[];
    courses: Cours[];

  constructor(private quizService: QuizService, private router: Router , private coursService: CoursService) { }

  ngOnInit() {
    this.getAllQuizs();
    this.getAllCourses();
  }

  getAllQuizs() {
    this.quizService.getQuizs()
      .subscribe(
      quizs => this.quizs = quizs,
      error => this.errorMessage = <any>error);
  }
  clear() { }

  save() {
    this.successMessage = '';
    this.errorMessage = '';

  this.getAllQuizs();
    this.getAllCourses();
    this.quizService.createQuiz(this.quiz)
      .subscribe(quiz => {
        this.successMessage = 'quiz was created!';
        console.log('quiz was created');
        console.log(quiz);

        location.reload();
      });
  }







  getAllCourses() {
    this.coursService.getAllCours()
      .subscribe(

      courses => this.courses = courses,
      error => this.errorMessage = <any>error);
  }



}
