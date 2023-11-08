import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MembersDetailsComponent } from './members-details/members-details.component';
import { FormsModule } from '@angular/forms';
import { NewMemberComponent } from './new-member/new-member.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersDetailsComponent,
    NewMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
