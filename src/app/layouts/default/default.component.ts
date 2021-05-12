import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

sideBarOpen = true;

rForm: FormGroup;
post: any;
name = '';
description = '';
nameAlert = ' this field is required';

constructor(private fb: FormBuilder) {
  this.rForm = fb.group ({
    name : [null, Validators.required],
    description : [null , Validators.compose([Validators.required , Validators.minLength(8) , Validators.maxLength(30)])],
    validate : ''
  });
 }
 addPost(post) {
   this.name = post.name;
   this.description = post.description;
 }
 ngOnInit() {
  this.rForm.get('validate').valueChanges.subscribe(
    (validate) => {
      // tslint:disable-next-line:triple-equals
      if (validate == '1') {
        this.nameAlert = 'the minimum length is 3 ';
        this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
      } else {
        this.nameAlert = 'this field is required';
        this.rForm.get('name').setValidators(Validators.required);
      }
      this.rForm.get('name').updateValueAndValidity();
    }
  );
}
sideBarToggler() {
  this.sideBarOpen = !this.sideBarOpen ;
}
}
