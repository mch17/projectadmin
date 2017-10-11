import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-reader',
  templateUrl: './video-reader.component.html',
  styleUrls: ['./video-reader.component.css']
})
export class VideoReaderComponent {
 public videoStatus: number = 1;
  public playpauseimg = '/assets/video/play.svg';
  public volumeMuteImg = '/assets/video/volume.svg';
  public currentTimeRange: number = 0;
  public movieLoaded: boolean = false;
  public videoDuration = '00:00';
  public currTime: string = '';
  public volume: number = 5;
  public hidectrl: boolean = true;

  constructor() { }

 
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
