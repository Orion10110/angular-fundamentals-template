import { Component, EventEmitter, Input, Output } from '@angular/core';
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


  onShowCurse (course: Course) {
    console.log(course)
  }

  onEditCourse (course: Course) {
    console.log(course)
  }

  onDeleteCourse (course: Course) {
    console.log(course)
  }
}
