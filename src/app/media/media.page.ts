import { Component, OnInit, SecurityContext } from '@angular/core';
import { Items } from '../../interfaces/youtube.interfaces';
import { YoutubeService } from '../services/youtube.service';


@Component({
  selector: 'app-media',
  templateUrl: 'media.page.html',
  styleUrls: ['media.page.scss']
})
export class MediaPage implements OnInit {
  myResponse : Items[] = [];


  constructor (private youtube : YoutubeService) { }

  ngOnInit() {
    this.youtube.getYoutubeVideos()
    .then(data => {
      if (data) {
        this.myResponse = data.items;
      }
    });
  }

}
