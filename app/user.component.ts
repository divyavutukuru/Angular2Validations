import { Component } from '@angular/core';
import {User} from './user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatePassword } from './customValidators';
import {AppPortfolio} from './portfolio.component';
import { Router } from '@angular/router';

@Component({
    selector: 'userapp',
    templateUrl: './app/form.html'
})


export class UserComponent { 
complexForm : FormGroup;
constructor(fb: FormBuilder,private router:Router){
    this.complexForm = fb.group({
    'userName' :['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    'password':['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10), ValidatePassword])]
    
    })
}

submitted = false;

onSubmit(value: any) { this.router.navigate(['portfolio']);}

}