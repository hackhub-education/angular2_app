import {Component, Input} from "@angular/core";
import {Student} from "./student";

@Component({
    selector: "student",
    templateUrl: "public/src/student/student.html",
    styleUrls: ["public/src/student/student.css"]
})
export class StudentComponent {
    @Input() public student: Student;
}
