
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Modal } from 'bootstrap';
@Component({
  selector: 'app-furniture-form',
  templateUrl: './furniture-form.component.html',
  styleUrls: ['./furniture-form.component.css']
})

export class FURNITUREFormComponent {
  bookingForm: FormGroup;
  businessName = 'SwiftCart Logistics & Supply';

  @ViewChild('successModal') successModal!: ElementRef;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      fullName: ['', Validators.required],
       phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]], // ✅ digits only
      email: [''],
      pickupAddress: ['', Validators.required],
      dropoffAddress: ['', Validators.required],
      itemType: ['', Validators.required],
      preferredDate: ['', Validators.required],
      preferredTime: ['', Validators.required],
      instructions: ['']
    });
  }

isInvalid(controlName: string): boolean {
  const control = this.bookingForm.get(controlName);
  return !!(control && control.invalid && (control.dirty || control.touched));
}


 onSubmit() {
  if (this.bookingForm.valid) {
    console.log(this.bookingForm.value);

    const modal = new Modal(this.successModal.nativeElement);
    modal.show();

    this.bookingForm.reset();
  } else {
    this.bookingForm.markAllAsTouched(); // 🔥 Show errors immediately
  }
}

}
