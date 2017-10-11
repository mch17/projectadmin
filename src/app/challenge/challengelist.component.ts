import { Component, OnInit } from '@angular/core';
import { ChallengeService } from "app/challenge/challenge.service";
import { Challenge } from "app/challenge/challenge.modal";

@Component({
  selector: 'app-challengelist',
  templateUrl: './challengelist.component.html',
  styleUrls: ['./challengelist.component.css']
})
export class ChallengelistComponent implements OnInit {
  errorMessage: any;
  challenges: Challenge[];
    challenge2: Challenge[];

challenge:Challenge;
  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
    this.getAllChallenges()


  }



callType(filter?){

  
   
    this.challengeService.findChallengeById(filter)
      .subscribe(

      challenges2=> this.challenge = challenges2,
      error => this.errorMessage = <any>error);
  
      console.log("sssssssssssssss"+filter)
            console.log("sssssssssssssss"+this.challenge.id)


}

  getAllChallenges() {
    this.challengeService.getAllChallenges()
      .subscribe(

      challenges => this.challenges = challenges,
      error => this.errorMessage = <any>error);
  }
}
