import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { HeaderComponent } from './components/header/header.component'
import { LogInComponent } from './components/log-in/log-in.component'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { FooterComponent } from './components/footer/footer.component'
import { AddMemberComponent } from './components/admin/add-member/add-member.component'
import { EditMemberComponent } from './components/admin/edit-member/edit-member.component'
import { ShowMembersComponent } from './components/admin/show-members/show-members.component'
import { AddNewsComponent } from './components/news/add-news/add-news.component'
import { EditNewsComponent } from './components/news/edit-news/edit-news.component'
import { DeleteNewsComponent } from './components/news/delete-news/delete-news.component'
import { DeleteMemberComponent } from './components/admin/delete-member/delete-member.component'
import { ShowNewsComponent } from './components/news/show-news/show-news.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { MatSnackBarModule} from '@angular/material/snack-bar'
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule } from '@angular/material/dialog'
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  PB_DIRECTION,
} from 'ngx-ui-loader'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';

import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text: 'Loading...',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  pbColor: '#ff910d',
  bgsColor: '#ff910d',
  fgsColor: '#ff910d',
  fgsType: "square-jelly-box",
  fgsSize: 100,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5,
}
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
