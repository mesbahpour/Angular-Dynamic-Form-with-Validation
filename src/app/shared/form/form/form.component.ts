import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { FormField } from '../form-filed';

export interface form {
  formGroup: FormGroup;
  metaData: FormField[];
}

@Component({
  selector: 'dynamic-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  forms: form[] = [];
  @Input() formJson: any;
  @Input() debug: boolean = false;
  @Output() output: EventEmitter<FormGroup> = new EventEmitter();
  fg!: FormGroup;
  @Input() styleConfig: any;
  isLoginPage: boolean = false;
  submitted = false;
  companyList: any;

  constructor(public router: Router, private apiService: ApiService) {
    if (router.url == '/') {
      this.isLoginPage = true;
    }
  }

  ngOnInit() {
    this.createForm();

    if (Object.keys(this.formJson).includes('companyId')) {
      this.loadCompanyList();
    }
  }

  createForm() {
    if (this.formJson == null) return;
    let dataObject = this.formJson;
    let objectProps = Object.keys(dataObject).map((prop) => {
      return Object.assign({}, { key: prop }, dataObject[prop]);
    });

    const formGroup: any = {};
    for (let prop of Object.keys(dataObject)) {
      formGroup[prop] = new FormControl(
        dataObject[prop].value || '',
        this.mapValidators(dataObject[prop].validation)
      );
    }

    this.fg = new FormGroup(formGroup);
    const form: form = {
      formGroup: this.fg,
      metaData: objectProps,
    };
    // this.fg.valueChanges.subscribe(values => {
    //   this.output.emit(this.fg);
    // });
    this.forms.push(form);
    return form;
  }

  private mapValidators(validators: { [x: string]: number }) {
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'required') {
          formValidators.push(Validators.required);
        } else if (validation === 'minLength') {
          formValidators.push(Validators.minLength(validators[validation]));
        } else if (validation === 'maxLength') {
          formValidators.push(Validators.maxLength(validators[validation]));
        } else if (validation === 'email') {
          formValidators.push(Validators.email);
        }
      }
    }

    return formValidators;
  }

  onSubmit() {
    this.submitted = true;
    this.output.emit(this.fg);
  }

  private loadCompanyList() {
    this.apiService.get('company').subscribe({
      next: (data) => {
        this.companyList = data;
      },
      error: (error) => {},
      complete: () => {},
    });
  }
}
