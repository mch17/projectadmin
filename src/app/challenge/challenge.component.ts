import { Component, OnInit } from '@angular/core';
import { ChallengeService } from "app/challenge/challenge.service";
import { Challenge } from "app/challenge/challenge.modal";
import { Router } from "@angular/router";

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  successMessage: string;
  errorMessage: string;
  challenge = new Challenge();
  challenges: Challenge;
  constructor(private challengeService: ChallengeService, private router: Router) { }

  ngOnInit() {
    this.getAllCourses()
  }
  save() {
    this.successMessage = '';
    this.errorMessage = '';


    this.challengeService.createChallenge(this.challenge)
      .subscribe(challenge => {
        this.successMessage = 'challenge was created!';
        console.log('challenge was created');
        console.log(challenge);
        this.router.navigate(['/challengelist']);
        //  location.reload();
      });
  }


  getAllCourses() {
    this.challengeService.getAllChallenges()
      .subscribe(

      challenges2 => this.challenges = challenges2,
      error => this.errorMessage = <any>error);
  }
}
