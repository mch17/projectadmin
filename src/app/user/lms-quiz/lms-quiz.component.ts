import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizConfig, Quiz, Question, Option } from "app/user/lms-quiz/models";
import { LmsQuizService } from "app/user/lms-quiz/lms-quiz.service";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-lms-quiz',
  templateUrl: './lms-quiz.component.html',
  styleUrls: ['./lms-quiz.component.css']
})
export class LmsQuizComponent implements OnInit {
  func: any;
  public mohamed: number = 1;

  lineChartData: any;
  // lineChartLabels: any;
  index: number;
  index2: number;
  data: any;
  nums: number[];
  public score: number = 0;
  public score2: number = 0;
  public res2: number = 0;
  public numbers = new Array();
  public cliks = new Array();
  public length: any;
  number: number;
  quiz: Quiz;
  mode: string;
  res: number = 0;
  noumrou: any;
  public questionTypeId: number = 0;
  today: number = Date.now();
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 0,  // indicates the time in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };
  pager = {
    index: 0,
    size: 1,
    count: 1
  };

  constructor(private quizService: LmsQuizService, private router: Router) { }



  ngOnInit() {

    this.quizService.getQuizs().subscribe(quiz => {
      this.quiz = quiz;
      this.pager.count = this.quiz.questions.length;

      this.mode = 'quiz';


    });






    //var length = this.numbers.push(1);



    // console.log("new numbers is : " + this.numbers.join(' , '));



  }



  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {

    question.options.forEach(
      (x) => {
        if (x.id !== option.id)
          x.selected = false;
      });

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }

    if (question.options.every(x => x.selected === x.isAnswer) === true) {

      this.score2++
      this.res2 = this.score2
    } else {

      this.score2--
      if (this.score2 < 0)
      { this.score2 = 0 }
      this.res2 = this.score2
    }

    for (this.index = 0; this.index < 1; this.index++) {
      //  var length = this.numbers.push(0);
      var length = this.numbers.push(this.res2);
      var length2 = this.cliks.push(new Date().getSeconds());
      console.log("clicks" + this.numbers)

      console.log("eeeeeeeeeeeeeeeeeeeeee" + this.numbers)
    }
    // for (this.index2 = 1; this.index2 <= 1; this.index2++) {
    //   //  var length = this.numbers.push(0);
    //   var length = this.cliks.push(new Date().getSeconds());
    //   //  this.cliks.push(new UTC().toLocaleDateString());

    //   console.log("cliks" + this.cliks)
    // }


  }


  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    //this.score=this.pager.count

    if (question.options.every(x => x.selected === x.isAnswer) === true) {
      this.score++
      this.res = this.score / 2
    }

    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';


  };

  onSubmit() {
    let answers = [];
    this.quiz.questions.forEach(x => answers.push({ 'answered': x.answered }));

    // Post your data to the server here. answers contains the questionId and the users' answer.
    // console.log("zzzzzzzzzzzzzzzzzzz" + this.quiz.questions)
    this.mode = 'result';
  }

  onTrackAnswers() {
    this.lineChartData = [
      { data: this.numbers, label: 'Score par rapport aux tentatives' },

    ];

    //  this.cliks.push(new UTC().toLocaleDateString());



    this.mode = 'track';
  }



  public lineChartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';



  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }











}

