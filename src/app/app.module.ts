import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from '@app/app.component';
import { CourseInfoComponent } from '@features/course-info/course-info.component';
import { NotAuthorizedGuard } from '@app/auth/guards/not-authorized.guard';
import { AuthorizedGuard } from '@app/auth/guards/authorized.guard';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { CoursesService } from '@app/services/courses.service';
import { CoursesModule } from './features/courses/courses.module';
import { AppRoutingModule } from "@app/app-routing.module";
import { AuthModule } from './auth/auth.module';
import { CoursesLayoutComponent } from './courses-layout.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';

const Interceptor = { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }

@NgModule({
  declarations: [AppComponent, CourseInfoComponent, CoursesLayoutComponent],
  imports: [
    BrowserModule,
    SharedModule,
    FontAwesomeModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [AuthorizedGuard, NotAuthorizedGuard, CoursesService, CoursesStoreService, Window, Interceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
