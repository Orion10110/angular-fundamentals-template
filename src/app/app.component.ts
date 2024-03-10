import { Component } from '@angular/core';
import { Course } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courses-app';
  course = {
    title: 'Hi',
    description: "Small description",
    id: '123523',
    creationDate: '11/03/2024',
    duration: 5,
    authors: ['Cera', 'Artur']
  } as Course;
}
