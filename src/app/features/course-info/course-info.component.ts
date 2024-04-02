import { Component, Input, OnInit } from '@angular/core';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { Course } from '@app/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {
  // Use the names for the input `course`.
  course$: Observable<any>;

  constructor(private coursesStoreService: CoursesStoreService) {
    // Assign observables directly from the store service
    // this.course$ = this.coursesStoreService.getCourse('66cc289e-6de9-49b2-9ca7-8b4f409d6467');
    this.course$ = this.coursesStoreService.course$
    // .getCourse('66cc289e-6de9-49b2-9ca7-8b4f409d6467');
  }

  ngOnInit(): void {
    this.coursesStoreService.getCourse('66cc289e-6de9-49b2-9ca7-8b4f409d6467')
  }


}
