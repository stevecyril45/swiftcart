import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  submitted = false;

  constructor(private fb: FormBuilder) {}

  quoteForm = this.fb.group({
    fullName: ['', Validators.required],
    contact: ['', Validators.required],
    serviceType: ['', Validators.required],
    pickup: [''],
    dropoff: [''],
    moveType: [''],
    itemsDesc: [''],
    preferredDate: [''],
    deliveryAddress: [''],
    orderType: [''],
    itemsNeeded: [''],
    quantity: [''],
    deliveryDate: ['']
  });

  get f() {
    return this.quoteForm.controls;
  }
selectedFile: File | null = null;

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}

  onSubmit() {
    this.submitted = true;

    if (this.quoteForm.invalid) {
      return;
    }

    // Show Bootstrap modal instead of alert
    const modalElement = document.getElementById('successModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }

    // Reset form after showing modal
    this.quoteForm.reset();
    this.submitted = false;
  }
}
