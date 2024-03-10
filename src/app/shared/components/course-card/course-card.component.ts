import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@app/types';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() course: Course = {} as Course;
  @Input() editable: boolean = false;
  @Output() clickOnShow: EventEmitter<void> = new EventEmitter();
  @Output() clickOnEdit: EventEmitter<void> = new EventEmitter();
  @Output() clickOnDelete: EventEmitter<void> = new EventEmitter();

  editIcon = faEdit;
  deleteIcon = faTrash;

  onShow(): void {
    this.clickOnShow.emit();
  }

  onEdit(): void {
    this.clickOnEdit.emit();
  }

  onDelete(): void {
    this.clickOnDelete.emit();
  }
}
