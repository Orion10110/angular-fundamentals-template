import { Component } from '@angular/core';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { mockedAuthorsList, mockedCoursesList } from "@app/shared/mocks/mock";
import { Course } from '@app/types';
import { UserStoreService } from '@app/user/services/user-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  isLoading$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  courses$: Observable<any[]>;

  constructor(private coursesStoreService: CoursesStoreService, private userStoreService: UserStoreService) {
    // Assign observables directly from the store service
    this.isLoading$ = this.coursesStoreService.isLoading$;
    this.courses$ = this.coursesStoreService.courses$;
    this.isAdmin$ = this.userStoreService.isAdmin$;
    // Trigger fetch of courses
    this.coursesStoreService.getAll();
  }

  onSearch(value: string) {
    if(value.length) {
      this.coursesStoreService.searchCourses(value)
    } else {
      this.coursesStoreService.getAll();
    }
  }
}
