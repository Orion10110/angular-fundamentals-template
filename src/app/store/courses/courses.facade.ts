import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CoursesState } from './courses.reducer';
import { Observable } from 'rxjs';
import *  as CoursesSelectors from './courses.selectors';
import * as CoursesActions from './courses.actions';

@Injectable({
    providedIn: 'root'
})
export class CoursesStateFacade {
    // Add your code here
    constructor(private store: Store<CoursesState>) {}

    isAllCoursesLoading$: Observable<boolean> = this.store.pipe(
        select(CoursesSelectors.isAllCoursesLoadingSelector)
    );

    isSingleCourseLoading$: Observable<boolean> = this.store.pipe(
        select(CoursesSelectors.isSingleCourseLoadingSelector)
    );

    isSearchingState$: Observable<boolean> = this.store.pipe(
        select(CoursesSelectors.isSearchingStateSelector)
    );

    courses$: Observable<any[]> = this.store.pipe(
        select(CoursesSelectors.getCourses)
    );

    allCourses$: Observable<any[]> = this.store.pipe(
        select(CoursesSelectors.getAllCourses)
    );

    course$: Observable<any> = this.store.pipe(
        select(CoursesSelectors.getCourse)
    );
    
    errorMessage$: Observable<string> = this.store.pipe(
        select(CoursesSelectors.getErrorMessage)
    );

    getAllCourses(): void {
        this.store.dispatch(CoursesActions.requestAllCourses());
    }

    getSingleCourse(id: string): void {
        this.store.dispatch(CoursesActions.requestSingleCourse({ id }));
    }

    getFilteredCourses(title: string): void {
        this.store.dispatch(CoursesActions.requestFilteredCourses({ title }));
    }

    editCourse(id: string, course: any): void {
        this.store.dispatch(CoursesActions.requestEditCourse({ course, id }));
    }

    createCourse(course: any): void {
        this.store.dispatch(CoursesActions.requestCreateCourse({ course }));
    }

    deleteCourse(id: string): void {
        this.store.dispatch(CoursesActions.requestDeleteCourse({ id }));
    }
}
