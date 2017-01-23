import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {StudentItemComponent} from "./student/student.item.component";
import {StudentListComponent} from "./student/student.list.component"

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [AppComponent, StudentItemComponent, StudentListComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}