import { Component } from '@angular/core';
import { mockedAuthorsList, mockedCoursesList } from "@app/shared/mocks/mock";
import { Course } from '@app/types';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Course[] = [];
  constructor() {
    this.courses = mockedCoursesList.map((course) => {
      return {
        ...course,
        authors: mockedAuthorsList.filter((author) =>
          course.authors.includes(author.id)
        ).map(({ name }) => name),
      };
    });
  }
}
