import { Component } from "@angular/core";

@Component({
    selector: "app",
    template: `<h1>{{title}}</h1>
                <h2>- {{subtitle}}</h2>`
})
export class AppComponent {
    title: string = "Hello world!";
    subtitle: string = "From Angular2";
}
