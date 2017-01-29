import {Http} from "@angular/http";
import {Student} from "../student/student"
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class StudentService {
    constructor(private http: Http) {}
    public createStudent(studentInput: Student): void {
        //http post request
        console.log(studentInput);
        let observable: Observable<Response> =
            this.http.post("/students/add", studentInput);
        let resultObservable: Observable<Student> =
            observable.map((res: Response) => {
                //return res.json()
            });
        //return resultObservable;
    }
    public getStudents(): Observable<Student[]> {
        let observable: Observable<Response> =
            this.http.get("/students");
        let resultObservable: Observable<Student[]> =
            observable.map((res: Response) => {
                return res.json() as Student[];
            });
        return resultObservable;
    }
}