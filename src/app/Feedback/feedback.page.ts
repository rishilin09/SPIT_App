import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ValidatorFn, Validators } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class FeedbackPage {

  feedbackForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
  ) {
    this.feedbackForm = this.formBuilder.group({
      name: ['', [Validators.required, this.onlyAlphabets()]],
      email: ['', [Validators.required, Validators.email]],
      ucid: ['', [Validators.required, this.onlyNumbers()]],
      suggestion: ['', Validators.required]
    });
  }

  @Input() rating = 0;
  @Output() ratingChange = new EventEmitter<number>();
  @Input() readOnly = false;

  rate(index: number) {
    if (!this.readOnly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
      console.log("Rating: "+this.rating);
    }
  }

  getStarClass(index: number) {
    console.log("Index: "+index);
    console.log("Rating: "+this.rating);

    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star-outline';
    }
  }
  
  onlyAlphabets(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const valid = /^[a-zA-Z\s]*$/.test(control.value);
      return valid ? null : { 'invalidName': { value: control.value } };
    };
  }

  onlyNumbers(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const valid = /^[0-9]*$/.test(control.value);
      return valid ? null : { 'invalidNumber': { value: control.value } };
    };
  }

  async submitForm() {
    if (this.feedbackForm.valid) {
      const formData = this.feedbackForm.value;
      console.log('Form submitted:', formData);

      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Thanks ' + formData['name'] +' for your feedback!',
        buttons: ['OK']
      });

      await alert.present();

      this.feedbackForm.reset();
    }
  }

}
