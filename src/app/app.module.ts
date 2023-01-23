import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { HeaderComponent } from './components/header/header.component'
import { LogInComponent } from './components/log-in/log-in.component'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { FooterComponent } from './components/footer/footer.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { MatDialogModule } from '@angular/material/dialog'
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  // SPINNER,
  PB_DIRECTION,
} from 'ngx-ui-loader'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'

import { CommonModule } from '@angular/common'
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'
import { TokenInterceptorInterceptor } from './services/token-interceptor.interceptor'

import { AngularEditorModule } from '@kolkov/angular-editor';
import { ShowNewsComponent } from './components/show-news/show-news.component'
import { ChangeUseremailComponent } from './components/change-useremail/change-useremail.component';



const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text: 'Loading...',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  pbColor: '#ff910d',
  bgsColor: '#ff910d',
  fgsColor: '#ff910d',
  fgsType: 'square-jelly-box',
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
    NotFoundComponent,
    ForgotPasswordComponent,
    ShowNewsComponent,
    ChangeUseremailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AngularEditorModule,
    // FlexLayoutModule,
  ],
  providers: [
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
