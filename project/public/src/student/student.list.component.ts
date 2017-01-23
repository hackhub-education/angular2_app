import {Component} from "@angular/core";
import {Student} from "./student";

@Component({
    selector: 'student-list',
    templateUrl: "public/src/student/student.list.html"
})
export class StudentListComponent {
    public studentList: Student[] = [
        new Student('marlon','ou', 123, true),
        new Student('yan','hong', 12, true),
        new Student('abc','ou', 23, true)
    ];
}