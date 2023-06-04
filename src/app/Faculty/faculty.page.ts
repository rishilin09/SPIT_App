import { FacultyService } from './../faculty.service';
import { Component } from '@angular/core';
import { IonInput, IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'faculty.page.html',
  styleUrls: ['faculty.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule]
})
export class FacultyPage {

  constructor(private facultyServ: FacultyService) {}

  facultyDetails = this.facultyServ.getFaculty();

}
