import {Component} from "@angular/core";

//decorator
@Component({
    selector: 'my-app',
    templateUrl: 'app.html',
    styleUrls: ['app.css']
})
export class AppComponent {
    public hello: string = "Hello World";
    public append(): void{
        this.hello = this.hello + 'hahasdfafs';
    }
}