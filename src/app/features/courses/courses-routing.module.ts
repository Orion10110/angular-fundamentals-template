import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";
import { CourseFormComponent } from "@app/shared/components";
import { NgModule } from "@angular/core";
import { CourseInfoComponent } from "../course-info/course-info.component";
import { AuthorizedGuard } from "@app/auth/guards/authorized.guard";
import { AdminGuard } from "@app/user/guards/admin.guard";

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
  {
    canActivate: [AdminGuard],
    path: "add",
    component: CourseFormComponent,
  },
  {
    canActivate: [AdminGuard],
    path: "edit/:id",
    component: CourseFormComponent,
  },
  {
    path: ":id",
    component: CourseInfoComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}