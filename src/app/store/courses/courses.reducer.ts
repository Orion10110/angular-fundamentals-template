import { Action, createReducer, on } from '@ngrx/store';
import { CoursesConstants } from './courses.constants';
import { requestAllCourses, requestAllCoursesFail, requestAllCoursesSuccess, requestCreateCourse, requestCreateCourseFail, requestCreateCourseSuccess, requestDeleteCourse, requestDeleteCourseFail, requestDeleteCourseSuccess, requestEditCourse, requestEditCourseFail, requestEditCourseSuccess, requestFilteredCourses, requestFilteredCoursesFail, requestFilteredCoursesSuccess, requestSingleCourse, requestSingleCourseFail, requestSingleCourseSuccess } from './courses.actions';

// Add your code here
export const coursesFeatureKey = 'courses';

export interface CoursesState {
    // Add your code here
    allCourses: any[];
    course: any;
    isAllCoursesLoading: boolean;
    isSingleCourseLoading: boolean;
    isSearchState: boolean;
    errorMessage: string;
}

export const initialState: CoursesState = {
    // Add your code here
    allCourses: [],
    course: null,
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: ''
};

export const coursesReducer = createReducer(
  initialState,
  on(requestAllCourses, (state) => ({
    ...state,
    isAllCoursesLoading: true,
    errorMessage: '',
    isSearchState: false,
  })),
  on(requestAllCoursesSuccess, (state, { courses }) => ({
    ...state,
    allCourses: courses,
    isAllCoursesLoading: false,
    isSearchState: false,
  })),
  on(requestAllCoursesFail, (state, { error }) => ({
    ...state,
    isAllCoursesLoading: false,
    errorMessage: error,
    isSearchState: false,
  })),
  on(requestFilteredCourses, (state) => ({
    ...state,
    isAllCoursesLoading: true,
    isSearchState: true,
    errorMessage: ''
  })),
  on(requestFilteredCoursesSuccess, (state, { courses }) => ({
    ...state,
    allCourses: courses,
    isAllCoursesLoading: false,
    isSearchState: true,
  })),
  on(requestFilteredCoursesFail, (state, { error }) => ({
    ...state,
    isAllCoursesLoading: false,
    isSearchState: true,
    errorMessage: error
  })),
  on(requestSingleCourse, (state) => ({
    ...state,
    isSingleCourseLoading: true,
    errorMessage: ''
  })),
  on(requestSingleCourseSuccess, (state, { course }) => ({
    ...state,
    course,
    isSingleCourseLoading: false
  })),
  on(requestSingleCourseFail, (state, { error }) => ({
    ...state,
    isSingleCourseLoading: false,
    errorMessage: error
  })),
  on(requestDeleteCourse, (state, { id }) => ({
    ...state,
    isSingleCourseLoading: true, 
    errorMessage: ''
  })),
  on(requestDeleteCourseSuccess, (state) => ({
    ...state,
    isSingleCourseLoading: false 
  })),
  on(requestDeleteCourseFail, (state, { error }) => ({
    ...state,
    isSingleCourseLoading: false,
    errorMessage: error 
  })),
  on(requestEditCourse, (state, { id, course }) => ({
    ...state,
    isSingleCourseLoading: true, 
    errorMessage: '' 
  })),
  on(requestEditCourseSuccess, (state, { course }) => ({
    ...state,
    isSingleCourseLoading: false,
    course 
  })),
  on(requestEditCourseFail, (state, { error }) => ({
    ...state,
    isSingleCourseLoading: false,
    errorMessage: error 
  })),
  on(requestCreateCourse, (state, { course }) => ({
    ...state,
    isSingleCourseLoading: true,
    errorMessage: ''
  })),
  on(requestCreateCourseSuccess, (state, { course }) => ({
    ...state,
    isSingleCourseLoading: false,
  })),
  on(requestCreateCourseFail, (state, { error }) => ({
    ...state,
    isSingleCourseLoading: false,
    errorMessage: error
  })),
);

export const reducer = (state: CoursesState, action: Action): CoursesState => coursesReducer(state, action);
