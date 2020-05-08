import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MediaPage } from './media.page';

import { YoutubePipe } from '../youtube.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MediaPage
      }
    ])
    ,
  ],
  declarations: [MediaPage,YoutubePipe]
})
export class MediaPageModule {}
