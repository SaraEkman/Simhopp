import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddMemberComponent } from './components/admin/add-member/add-member.component';
import { EditMemberComponent } from './components/admin/edit-member/edit-member.component';
import { ShowMembersComponent } from './components/admin/show-members/show-members.component';
import { AddNewsComponent } from './components/news/add-news/add-news.component';
import { EditNewsComponent } from './components/news/edit-news/edit-news.component';
import { DeleteNewsComponent } from './components/news/delete-news/delete-news.component';
import { DeleteMemberComponent } from './components/admin/delete-member/delete-member.component';
import { ShowNewsComponent } from './components/news/show-news/show-news.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LogInComponent,
    SignInComponent,
    FooterComponent,
    ShowMembersComponent,
    AddMemberComponent,
    EditMemberComponent,
    DeleteMemberComponent,
    AddNewsComponent,
    EditNewsComponent,
    DeleteNewsComponent,
    ShowNewsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
