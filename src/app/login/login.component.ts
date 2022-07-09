import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ILoginForm } from './model/ILoginForm';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // form: FormGroup | undefined;
  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup<ILoginForm>({
      username: new FormControl('admin', {nonNullable: true}),
      password: new FormControl('admin', {nonNullable: true})
    });
  }

  onSubmit() {
    console.log(this.form.getRawValue());
  }
}
