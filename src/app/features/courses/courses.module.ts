import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from '@app/shared/shared.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
// import { CoursesRootComponent } from './courses-root.component';

@NgModule({
  declarations: [CoursesComponent, CoursesListComponent,],
  imports: [CommonModule, SharedModule, CoursesRoutingModule],
  exports: [],
})
export class CoursesModule { }
