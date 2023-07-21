import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(private formBuilder: FormBuilder, private authService: AuthService){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      //email: ['', Validators.compose([Validators.required, Validators.email])],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  submitLogin(form: FormGroup<any>) {

    if (form.valid) {
      // Aquí puedes realizar cualquier lógica adicional antes de enviar el formulario
      //console.log('Datos del evento:',this.loginForm.value );
      this.loginAction.emit(this.loginForm.value);
      //form.submit(); // Envía el formulario
    }
    // console.log('Datos del evento:',this.loginForm.value );
    // if(this.loginForm.valid) {
    //   //console.log('entra a submit login');
    //   this.loginAction.emit(this.loginForm.value);
    // }

  }


}
