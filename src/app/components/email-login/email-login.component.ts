import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.sass'],
  providers: [AngularFireAuth]
})

export class EmailLoginComponent  {

  form: FormGroup;
  message;
  messageClass;
  processing;
  emailValid;
  emailMessage;
  error: any;
  user: Observable<firebase.User>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public afAuth: AngularFireAuth
  ) {
    this.createForm();
   }

   //Create login form
   createForm() {
     this.form = this.formBuilder.group({
       email: ['', Validators.required],
       password: ['', Validators.required]
     });
   }

   // Function to disable form
  disableForm() {
    this.form.controls['email'].disable(); // Disable username field
    this.form.controls['password'].disable(); // Disable password field
  }

  // Function to enable form
  enableForm() {
    this.form.controls['email'].enable(); // Enable username field
    this.form.controls['password'].enable(); // Enable password field
  }

  // Functiont to submit form and login user
  onLoginSubmit() {
    const email = this.form.get('email').value
    const password = this.form.get('password').value

    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        setTimeout(() => {
          this.router.navigate(['/']); // Redirect to login view
        }, 2000);
        this.messageClass = 'alert alert-success';
        this.message = 'Thank you for registering! Redirecting...'
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  ngOnInit() {

    }

  }
