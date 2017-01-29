import {Component, Input} from "@angular/core";
import {Student} from "./student";
import {StudentService} from "../service/student.service";

@Component({
    selector: 'student-item',
    templateUrl: 'public/src/student/student.item.html',
    styleUrls: ['public/src/student/student.item.css'],
    //dependency injection
    providers: [StudentService]
})
export class StudentItemComponent {
    constructor(private service: StudentService){}
    @Input('student')public student: Student;
    public studentInput: Student = new Student(
        "first name",
        "last name",
        0,
        false
    );
    public submit(): void {
        this.service.createStudent(this.studentInput);
    }
}

// class Engine {}
//
// class SuperEngine extends Engine {}
//
// class Car {
//     constructor(public engine: Engine){}
//     public drive(){
//         this.engine.start();
//     }
// }