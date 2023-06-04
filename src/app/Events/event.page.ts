import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'event.page.html',
  styleUrls: ['event.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})

export class EventPage {
  
  constructor(private eventServ: EventsService) {}

  events =  this.eventServ.getEvents();

}
