import {Component} from "@angular/core";
import {Student} from "./student";
import {StudentService} from "../service/student.service";
import {Observable} from "rxjs/Rx"

@Component({
    selector: 'student-list',
    templateUrl: "public/src/student/student.list.html",
    providers: [StudentService]
})
export class StudentListComponent {
    constructor(private service: StudentService){
        this.getStudents();
    }
    public studentList: Student[] = [
        new Student('marlon','ou', 123, true),
        new Student('yan','hong', 12, true),
        new Student('abc','ou', 23, true)
    ];
    public students: Student[] = [];
    public getStudents(): void {
        let observable: Observable<Student[]> = this.service.getStudents();
        observable.subscribe((students: Student[])=>{
            this.students = students;
        });

    }
}