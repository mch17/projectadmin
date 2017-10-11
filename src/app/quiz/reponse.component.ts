import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { QuizReponse } from './reponse.modal';
import { ReponseService } from './reponse.service';
import { QuestionService } from 'app/quiz/question.service';
@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
})
export class ReponseComponent implements OnInit {
  reponsesAnswers = ['true', 'false'];




  question: any;
  successMessage: string;
  errorMessage: string;
  subscription: Subscription;
  varGlobal: any;

  reponses: QuizReponse[];
  reponse = new QuizReponse();
  constructor(private questionService: QuestionService, private reponseService: ReponseService, private route: ActivatedRoute) { }
  ngOnInit() {


    this.subscription = this.route.params.subscribe((params: any) => {
      this.varGlobal = params['id'];
      this.questionService.findquestionsById(this.varGlobal).subscribe(question => {
        this.question = question;
      });

    });

    //  this.getAllReponses(this.varGlobal);
  }



  getAllReponses($id) {
    this.reponseService.getReponses(this.varGlobal)
      .subscribe(
      reponses => this.reponses = reponses,
      error => this.errorMessage = <any>error);
  }


  clear() { }
  save() {
    this.successMessage = '';
    this.errorMessage = '';


    this.reponseService.addQuizReponses(this.reponse, this.varGlobal)
      .subscribe(reponse => {
        this.successMessage = 'reponse was created!';
        console.log('reponse was created');
        console.log(reponse);


        this.questionService.findquestionsById(this.varGlobal).subscribe(question => {
          this.question = question;
        });
      });


  }
}
