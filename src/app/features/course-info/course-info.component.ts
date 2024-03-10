import { Component, Input } from '@angular/core';
import { Course } from '@app/types';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent {
  // Use the names for the input `course`.
  @Input() course: Course = {} as Course;
}
