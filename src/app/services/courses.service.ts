import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private readonly BASE_URL = 'http://localhost:4000';

    constructor(private http: HttpClient) {}

    getAll() {
        // Add your code here
        return this.http.get<any[]>(`${this.BASE_URL}/courses/all`).pipe(map((r: any) => r.result));
    }

    createCourse(course: any) { // replace 'any' with the required interface
        // Add your code here
        return this.http.post<any>(`${this.BASE_URL}/courses/add`, course);
    }

    editCourse(id: string, course: any) { // replace 'any' with the required interface
        // Add your code here
        return this.http.put<any>(`${this.BASE_URL}/courses/${id}`, course);
    }

    getCourse(id: string) {
        // Add your code here
        return this.http.get<any>(`${this.BASE_URL}/courses/${id}`).pipe(map((r: any) => r.result));
    }

    deleteCourse(id: string) {
        // Add your code here
        return this.http.delete<any>(`${this.BASE_URL}/courses/${id}`).pipe(map((r: any) => r.result));
    }

    filterCourses(value: string) {
        // Add your code here
        return this.http.get<any[]>(`${this.BASE_URL}/courses/filter?title=${value}`).pipe(map((r: any) => r.result));
    }

    getAllAuthors() {
        // Add your code here
        return this.http.get<any[]>(`${this.BASE_URL}/authors/all`);
    }

    createAuthor(name: string) {
        // Add your code here
        return this.http.post<any>(`${this.BASE_URL}/authors/create`, { name });
    }

    getAuthorById(id: string) {
        // Add your code here
        return this.http.get<any>(`${this.BASE_URL}/authors/${id}`);
    }
}
