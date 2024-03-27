import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '@app/types';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input() courses: Course[] = [];
  @Input() editable: boolean = false;
  
  @Output() clickOnShow: EventEmitter<void> = new EventEmitter();
  @Output() clickOnEdit: EventEmitter<void> = new EventEmitter();
  @Output() clickOnDelete: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router) { }

  onShowCurse (course: Course) {
    this.router.navigate(['courses', course.id])
  }

  onEditCourse (course: Course) {
    console.log(course)
    this.router.navigate(['courses/edit', course.id])
  }

  onDeleteCourse (course: Course) {
    console.log(course)
  }
}
