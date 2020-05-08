import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { YoutubeModalPage } from './youtube-modal.page';

const routes: Routes = [
  {
    path: '',
    component: YoutubeModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [YoutubeModalPage]
})
export class YoutubeModalPageModule {}
