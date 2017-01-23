import {Component, Input} from "@angular/core";
import {Student} from "./student";

@Component({
    selector: 'student-item',
    templateUrl: 'public/src/student/student.item.html'
})
export class StudentItemComponent {
    @Input('student')public student: Student;
}