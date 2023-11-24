import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {

  @Input()
  title:any;

  @ViewChild('trailer', { static: true })
  trailer!: ElementRef<HTMLVideoElement>;
  constructor() { }

  ngOnInit(): void {
  }

  playVideo(){
    this.trailer.nativeElement.play();
  }

  stopVideo(){
    this.trailer.nativeElement.currentTime = 0;
    this.trailer.nativeElement.pause();
  }

  getMuted():boolean {
    return this.trailer.nativeElement.muted;
  }

  toggleSound(){
    this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted
  }

}
