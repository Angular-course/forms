import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {viewClassName} from '@angular/compiler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('f') signupForm: NgForm;

    suggestUserName() {
        const suggestedName = 'Superuser';
    }

    // the following will use the local reference by passing it in the template to the function on ngSubmit
    // onSubmit(form: NgForm) {
    //     console.log(form);
    // }

    // the following will use the viewchild with the local reference
    onSubmit() {
        console.log(this.signupForm);
    }
}
