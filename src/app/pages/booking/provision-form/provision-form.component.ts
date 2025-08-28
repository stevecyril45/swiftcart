import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-provision-form',
  templateUrl: './provision-form.component.html',
  styleUrls: ['./provision-form.component.css']
})
export class PROVISIONFormComponent {
  provisionForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.provisionForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]], // ✅ digits only
      business: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      products: ['', Validators.required],
      location: ['', Validators.required],
      info: ['', Validators.required]
    });
  }

  // shorthand for controls
  get f() {
    return this.provisionForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.provisionForm.invalid) {
      // ✅ mark all fields touched so errors show
      Object.values(this.provisionForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    console.log('Form Data:', this.provisionForm.value);

    const modalEl = document.getElementById('successModal');
    if (modalEl) {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }

    this.provisionForm.reset();
    this.submitted = false;
  }
}
