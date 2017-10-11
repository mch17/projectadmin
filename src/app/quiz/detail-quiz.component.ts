import { Component, OnInit } from '@angular/core';
import { Quiz } from "./quiz.modal";
import { QuizQuestion } from "./question.modal";
import { QuizService } from "./quiz.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { QuestionService } from "./question.service";


@Component({
  selector: 'app-detail-cours',
  templateUrl: './detail-quiz.component.html'

})
export class DetailQuizComponent implements OnInit {
  successMessage: string = '';
  errorMessage: string = '';
  quiz: Quiz;
  quizQuestion = new QuizQuestion();
  subscription: Subscription;
  varGlobal: any;
  quizQuestions: QuizQuestion[];
  constructor(private quizService: QuizService,
    private questionService: QuestionService,
    private route: ActivatedRoute, ) { }
  ngOnInit() {

    this.subscription = this.route.params.subscribe((params: any) => {
      this.varGlobal = params['id'];
      this.quizService.findQuizById(this.varGlobal).subscribe(quiz => {
        this.quiz = quiz;
      });
    });
  }



  save() {
    this.questionService.addQuizQuestion(this.quizQuestion, this.varGlobal)
      .subscribe(quizQuestion => {
        this.successMessage = 'quizQuestion was created!';
        console.log('quizQuestion was created');
        console.log(quizQuestion);


         this.quizService.findQuizById(this.varGlobal).subscribe(quiz => {
        this.quiz = quiz;
      });
      
      })
  }
  clear() { }










}
