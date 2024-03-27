import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder, FormGroup, Validators
} from '@angular/forms';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAdd, faTrash, fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  constructor(private courseStore: CoursesStoreService, public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
    this.buildForm()
  }
  submitted = false;
  courseForm!: FormGroup;
  // Use the names `title`, `description`, `author`, 'authors' (for authors list), `duration` for the form controls.

  buildForm(): void {
    this.courseForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.minLength(2)]],
      author: [
        "",
        [Validators.pattern(/^[a-zA-Z0-9 ]*$/), Validators.minLength(2)],
      ],
      authors: this.fb.array([]),
      courseAuthors: this.fb.array([]),
      duration: [0, [Validators.required, Validators.min(0)]],
    });
  }

  get title() { return this.courseForm?.get('title'); }
  get description() { return this.courseForm?.get('description'); }
  get duration() { return this.courseForm?.get('duration'); }
  get authors() { return this.courseForm?.get('authors'); }

  getAuthors() {
    return this.courseForm.get("authors") as FormArray;
  }

  getCourseAuthors(): FormArray {
    return this.courseForm.get("courseAuthors") as FormArray;
  }

  addAuthor() {
    const author = this.courseForm.get("author")?.value;
    if (author) {
      (this.courseForm.get("authors") as FormArray).push(
        this.fb.control(author)
      );
    }
    this.courseForm.get("author")?.reset();
  }

  addCourseAuthor(index: number) {
    const authorsArray = this.getAuthors();
    const courseAuthorsArray = this.getCourseAuthors();

    const author = authorsArray.at(index).value;
    courseAuthorsArray.push(this.fb.control(author));
  }

  removeAuthor(index: number) {
    (this.courseForm.get("courseAuthors") as FormArray).removeAt(index);
  }

  onSubmit(): void {
    this.submitted = true
    console.log(this.courseForm.value);
    this.courseStore.createCourse(this.courseForm.value)
  }

  cancel(): void {
    window.location.reload();
  }

  deleteIcon = faTrash;
  addIcon = faAdd;
}
