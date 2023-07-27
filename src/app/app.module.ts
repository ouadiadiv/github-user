import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesCoponent } from './courses.component';
import { CoursesComponent } from './courses/courses.component';
import { EmailService } from './email.service';
import { ResumePipe } from './resume.pipe';
import { StarComponent } from './star/star.component';
import { PannelComponent } from './pannel/pannel.component';
import { InputDirective } from './input.directive';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNOtFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const route :Routes= [
{ path :"user" , component: UserComponent},
{ path :"user/:userame/:id" , component: ProfilUserComponent},
{ path :"posts" , component: PostsComponent},
{ path :"" , component: HomeComponent},
{ path :"**" , component: PageNOtFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesCoponent,
    CoursesComponent,
    ResumePipe,
    StarComponent,
    PannelComponent,
    InputDirective,
    FormulaireComponent,
    SignupFormComponent,
    PostsComponent,
    UserComponent,
    HomeComponent,
    PageNOtFoundComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
