import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('f') signupForm: NgForm;
    defaultQuestion = 'teacher';
    answer = '';
    genders = ['male', 'female'];
    user = {
        username: '',
        email: '',
        secretQuestion: '',
        answer: '',
        gender: ''
    };

    suggestUserName() {
        const suggestedName = 'Superuser';
        this.signupForm.form.patchValue({
            userData: {
                username: suggestedName
            }
        });
    }

    // the following will use the local reference by passing it in the template to the function on ngSubmit
    // onSubmit(form: NgForm) {
    //     console.log(form);
    // }

    // the following will use the viewchild with the local reference
    onSubmit() {
        // console.log(this.signupForm);
        this.user.username = this.signupForm.value.userData.username;
        this.user.email = this.signupForm.value.userData.email;
        this.user.secretQuestion = this.signupForm.value.secret;
        this.user.answer = this.signupForm.value.questionAnswer;
        this.user.gender = this.signupForm.value.gender;

        this.signupForm.reset();
    }
}
