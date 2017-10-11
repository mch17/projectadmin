import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { ChallengeService } from "app/challenge/challenge.service";
import { Challenge } from "app/challenge/challenge.modal";

@Component({
  selector: 'app-challengemodif',
  templateUrl: './challengemodif.component.html',
  styleUrls: ['./challengemodif.component.css']
})
export class ChallengemodifComponent implements OnInit {
  errorMessage: string;
  successMessage: string;
  varGlobal: any;
  subscription: Subscription;
  challenge: Challenge;

  constructor(private route: ActivatedRoute, private challengeService: ChallengeService, private router: Router) { }

  ngOnInit() {

    this.subscription = this.route.params.subscribe((params: any) => {
      this.varGlobal = params['id'];
      this.challengeService.findChallengeById(this.varGlobal).subscribe(challenge => {
        this.challenge = challenge;
      });
    });
  }

  updateUser() {
    this.successMessage = '';
    this.errorMessage = '';

    this.challengeService.updateChallenge(this.challenge)
      .subscribe(
      challenge => {
        this.successMessage = 'challenge was updated.';
        console.log('challenge was updated');
        this.router.navigate(['/challengelist']);


      },
      err => {
        this.errorMessage = err;
        console.error(err);
      }
      );
  }


}
