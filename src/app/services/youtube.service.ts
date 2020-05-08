import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YoutubeAPIRequest } from '../../interfaces/youtube.interfaces';

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/';
const YOUTUBE_API_KEY = 'AIzaSyAA_C_KegurRvhbhySnxgUI2bOci4g8w_U';
const MAX_RESULTS     = '10';
const ORDER           = 'date';
const TYPE            = 'video';
const CHANNEL_ID      = 'UCQFrskKCZyZ6SEg6EbBda2A';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http : HttpClient) { }

  public getYoutubeVideos(): Promise<YoutubeAPIRequest> {
      //return this.http.get('${YOUTUBE_API_URL}search?part=snippet&maxResults=${MAX_RESULTS}&order=${ORDER}&type=${TYPE}&channelId=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}')
      return this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=date&type=video&channelId=UCQFrskKCZyZ6SEg6EbBda2A&key=AIzaSyAA_C_KegurRvhbhySnxgUI2bOci4g8w_U')
      .toPromise()
      .then((response: YoutubeAPIRequest) => {
        return response;
      });
  }

//  getYoutubeVideos() {
//    return this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=date&type=video&channelId=&key=');
//  }
}
