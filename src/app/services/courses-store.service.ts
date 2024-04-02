import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { CoursesService } from './courses.service';
import { Router } from '@angular/router';
import { CoursesStateFacade } from '@app/store/courses/courses.facade';

@Injectable({
    providedIn: 'root'
})
export class CoursesStoreService {
    // private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // private courses$$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  
    constructor(private router: Router, private coursesService: CoursesService, private coursesStateFacade: CoursesStateFacade) {
    }

    get isLoading$() {
        return this.coursesStateFacade.isAllCoursesLoading$;
    }

    get courses$() {
      return this.coursesStateFacade.allCourses$
    }

    get course$() {
      return this.coursesStateFacade.course$
    }


    getAll(){
      this.coursesStateFacade.getAllCourses()
        // this.isLoading$$.next(true); // Set loading state to true
        // return this.coursesService.getAll().pipe(
        //     tap(courses => {
        //         this.courses$$.next(courses); // Update courses
        //     }),
        //     catchError(error => {
        //         console.error('Error loading courses:', error);
        //         return throwError(() => error); // Rethrow the error
        //     }),
        //     tap(() => {
        //         this.isLoading$$.next(false); // Set loading state to false
        //     })
        // );
        // Add your code here
    }

    createCourse(course: any) { // replace 'any' with the required interface
        // Add your code here
        this.coursesStateFacade.createCourse(course)
        // return this.coursesService.createCourse({
        //     ...course,
        //     authors: []
        // }).pipe(
        //     tap(newCourse => {
        //       const currentCourses = this.courses$$.value;
        //       this.courses$$.next([...currentCourses, newCourse]); // Update courses with the new course
        //     }),
        //     catchError(error => {
        //       console.error('Error creating course:', error);
        //       return throwError(() => error); // Rethrow the error
        //     })
        // ).subscribe(() => {
        //     this.router.navigateByUrl('/courses');
        //   });
    }

    getCourse(id: string) {
        // Add your code here
        return this.coursesStateFacade.getSingleCourse(id)
    }

    editCourse(id: string, course: any) { // replace 'any' with the required interface
        return this.coursesStateFacade.editCourse(id, course)
        // Add your code here
        // return this.coursesService.editCourse(id, course).pipe(
        //     tap(updatedCourse => {
        //       const currentCourses = this.courses$$.value;
        //       const index = currentCourses.findIndex(c => c.id === id);
        //       if (index !== -1) {
        //         currentCourses[index] = updatedCourse;
        //         this.courses$$.next([...currentCourses]); // Update courses with the edited course
        //       }
        //     }),
        //     catchError(error => {
        //       console.error('Error editing course:', error);
        //       return throwError(() => error); // Rethrow the error
        //     })
        //   );
    }

    deleteCourse(id: string) {
        // Add your code here
        return this.coursesStateFacade.deleteCourse(id)
        // return this.coursesService.deleteCourse(id).pipe(
        //     tap(() => {
        //       const currentCourses = this.courses$$.value;
        //       const filteredCourses = currentCourses.filter(c => c.id !== id);
        //       this.courses$$.next([...filteredCourses]); // Update courses by removing the deleted course
        //     }),
        //     catchError(error => {
        //       console.error('Error deleting course:', error);
        //       return throwError(() => error); // Rethrow the error
        //     })
        //   );
    }

    filterCourses(value: string) {
        // Add your code here
        return this.coursesStateFacade.getFilteredCourses(value)
        // return this.coursesService.filterCourses(value);
    }

    getAllAuthors() {
        // Add your code here
        return this.coursesService.getAllAuthors();
    }

    createAuthor(name: string) {
        // Add your code here
        return this.coursesService.createAuthor(name);
    }

    getAuthorById(id: string) {
        // Add your code here
        return this.coursesService.getAuthorById(id);
    }

    searchCourses(searchTerm: string) {
      return this.coursesStateFacade.getFilteredCourses(searchTerm)
    }
        // this.isLoading$$.next(true); // Set loading state to true
        // return this.coursesService.filterCourses(searchTerm).pipe(
        //   tap(filteredCourses => {
        //     this.courses$$.next(filteredCourses); // Update courses with filtered courses
        //   }),
        //   catchError(error => {
        //     console.error('Error searching courses:', error);
        //     return throwError(() => error); // Rethrow the error
        //   }),
        //   tap(() => {
        //     this.isLoading$$.next(false); // Set loading state to false
        //   })
        // ).subscribe();
      // }
}
