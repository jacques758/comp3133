import { Component } from '@angular/core';

@Component({
  selector: 'students',
  template: `<h1>${'{{ getTitle() }}'} - ${'{{ getCurrentDate() }}'}</h1>`
})
export class StudentsComponent {
  title: string = 'Welcome to Students Component';

  getTitle(): string {
    return this.title;
  }

  getCurrentDate(): string {
    return new Date().toDateString();
  }
}
