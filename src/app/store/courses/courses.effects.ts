import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '@app/services/courses.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoursesConstants } from './courses.constants';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import * as CoursesActions from './courses.actions';

@Injectable()
export class CoursesEffects {
    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private router: Router
      ) {}

    // Add your code here
    getAll$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CoursesConstants.REQUEST_ALL_COURSES),
            switchMap(() =>
              this.coursesService.getAll().pipe(
                map((courses) =>
                  CoursesActions.requestAllCoursesSuccess({ courses })
                ),
                catchError((error) =>
                  of(CoursesActions.requestAllCoursesFail({ error }))
                )
              )
            )
          )
    );


    filteredCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesConstants.REQUEST_FILTERED_COURSES),
      switchMap(({ title }: { title: string}) =>
        this.coursesService.filterCourses(title).pipe(
            map((courses) => CoursesActions.requestFilteredCoursesSuccess({ courses})),
            catchError((error) =>
                of(CoursesActions.requestAllCoursesFail({ error }))
            )
        )
        //   .getAll()
        //   .pipe(
        //     map((courses: any[]) =>
        //       courses.filter((course) =>
        //         course.name.toLowerCase().includes(searchValue.toLowerCase())
        //       )
        //     ),
        //     map((filteredCourses) =>
        //       CoursesActions.requestFilteredCoursesSuccess({ courses: filteredCourses })
        //     )
        //   )
      )
    )
  );

  getSpecificCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesConstants.REQUEST_SINGLE_COURSE),
      switchMap(({ id }) =>
        this.coursesService.getCourse(id).pipe(
          map((course) =>
            CoursesActions.requestSingleCourseSuccess({ course })
          ),
          catchError((error) =>
            of(CoursesActions.requestSingleCourseFail({ error }))
          )
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesConstants.REQUEST_DELETE_COURSE),
      switchMap(({ id }) =>
        this.coursesService.deleteCourse(id).pipe(
          map(() => CoursesActions.requestAllCourses()),
          catchError((error) =>
            of(CoursesActions.requestDeleteCourseFail({ error }))
          )
        )
      )
    )
  );

  editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesConstants.REQUEST_EDIT_COURSE),
      switchMap(({ id, course }) =>
        this.coursesService.editCourse(id, course).pipe(
          map(() => CoursesActions.requestEditCourseSuccess({ course })),
          catchError((error) =>
            of(CoursesActions.requestEditCourseFail({ error }))
          )
        )
      )
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesConstants.REQUEST_CREATE_COURSE),
      switchMap(({ course }) =>
        this.coursesService.createCourse(course).pipe(
          map(() => CoursesActions.requestCreateCourseSuccess({ course })),
          catchError((error) =>
            of(CoursesActions.requestCreateCourseFail({ error }))
          )
        )
      )
    )
  );

  redirectToTheCoursesPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CoursesConstants.REQUEST_CREATE_COURSE_SUCCESS,
          CoursesConstants.REQUEST_EDIT_COURSE_SUCCESS,
          CoursesConstants.REQUEST_SINGLE_COURSE_FAIL
        ),
        tap(() => this.router.navigate(['/courses']))
      ),
    { dispatch: false }
  );
}
