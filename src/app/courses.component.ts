import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
        {{ course.title | uppercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating }} <br/>
        {{ course.price }} <br/>
        {{ course.releaseDate }} <br/>
        `
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2021, 29, 6)
    }
}