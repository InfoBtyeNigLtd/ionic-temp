import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnouncementPageRoutingModule } from './announcement-routing.module';

import { AnnouncementPage } from './announcement.page';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatCardModule,
    HttpClientModule,
    AnnouncementPageRoutingModule
  ],
  declarations: [AnnouncementPage]
})
export class AnnouncementPageModule {}
