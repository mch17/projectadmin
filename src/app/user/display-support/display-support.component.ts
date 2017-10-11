import { Component, OnInit } from '@angular/core';
import { SupportCoursService } from 'app/cours/support-cours.service';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-display-support',
  templateUrl: './display-support.component.html',
  styleUrls: ['./display-support.component.css']
})
export class DisplaySupportComponent implements OnInit {






  public videoStatus: number = 1;
  public playpauseimg = '/assets/video/play.svg';
  public volumeMuteImg = '/assets/video/volume.svg';
  public currentTimeRange: number = 0;
  public movieLoaded: boolean = false;
  public videoDuration = '00:00';
  public currTime: string = '';
  public volume: number = 5;
  public hidectrl: boolean = true;




  page: number = 1;

  noumrou: number;
  subscription: Subscription;
  varGlobal: any;
  mimtype: any;
  url: any;
  url2: any;
  pdfSrc = 'http://localhost:8080/api/allsupportcours'
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {

    //
    // this.subscription = this.route.params.subscribe((params: any) => {
    //   this.varGlobal = params['id'];
    //   this.url = `${this.pdfSrc}/${this.varGlobal}`

    // });
    this.mimtype = this.route.snapshot.params['contentType'];
    this.varGlobal = this.route.snapshot.params['id'];
    console.log("hhh" + this.varGlobal);
    this.url = `${this.pdfSrc}/${this.varGlobal}`
    this.noumrou = 1 + this.page;

    this.url2 = this.url;

  };
  decrease() {
    this.noumrou--;
    this.page = -1 + this.page;
    console.log(this.page);
  }
  increment() {
    this.page++;
    this.noumrou = 1 + this.page;
    console.log(this.page);
  }










  getBrowser() {
    if (navigator.userAgent.indexOf('Chrome') !== -1) {
      return 'Webkit';
    } else if (navigator.userAgent.indexOf('Opera') !== -1) {
      return 'Opera';
    } else if (navigator.userAgent.indexOf('MSIE') !== -1) {
      return 'IE';
    } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
      return 'Firefox';

    } else if (navigator.userAgent.indexOf('Safari') !== -1) {
      return 'Webkit';
    } else {
      return 'unknown';
    }
  }
  secondsToMinutesAndSeconds(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.round(time % 60);

    return '' + minutes + ':' + seconds;
  }
  makeFullScreen(mp) {
    if (this.getBrowser() === 'Webkit') {
      mp.webkitEnterFullScreen();
    }
    else if (this.getBrowser() === 'Firefox') {
      mp.mozRequestFullScreen();
    }
    else {
      return 'unknown';
    }
  }
  hideControl(show) {

    this.hidectrl = show;
  }
  updateDisplayTime(moviePlayer) {
    this.currTime = this.secondsToMinutesAndSeconds(moviePlayer.currentTime);
    this.currentTimeRange = moviePlayer.currentTime;
  }
  onMuteUnmute(moviePlayer) {
    if (moviePlayer.muted) {

      moviePlayer.muted = false;
      this.volumeMuteImg = '/assets/video/volume.svg'
    }
    else {
      moviePlayer.muted = true;
      this.volumeMuteImg = '/assets/video/mute.svg'
    }

  }
  seek(evt, moviePlayer) {

    moviePlayer.pause();
    moviePlayer.currentTime = evt.target.value;
    this.currTime = this.secondsToMinutesAndSeconds(moviePlayer.currentTime);
    this.currentTimeRange = moviePlayer.currentTime;
    moviePlayer.play();
    this.playpauseimg = '/assets/video/pause.svg';

  }
  seekVolume(event, moviePlayer) {
    var volumeToBeSet = event.target.value;
    moviePlayer.volume = volumeToBeSet / 10;

  }
  processMetaData(moviePlayer) {
    var self = this;
    this.movieLoaded = true;
    moviePlayer.volume = 0.5;
    this.videoDuration = this.secondsToMinutesAndSeconds(moviePlayer.duration);


  }
  onPlayPause(moviePlayer) {

    if (moviePlayer.paused) {
      moviePlayer.play();
      this.playpauseimg = '/assets/video/pause.svg';
    }
    else {
      moviePlayer.pause();
      this.playpauseimg = '/assets/video/play.svg';

    }
  }



}




