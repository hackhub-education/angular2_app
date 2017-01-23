import {Component} from "@angular/core";

//decorator
@Component({
    selector: 'my-app',
    templateUrl: 'public/src/app.html',
    styleUrls: ['public/src/app.css']
})
export class AppComponent {
    constructor() {}
    public hello: string = "Hello World";
}