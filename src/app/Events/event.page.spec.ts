import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { EventPage } from './event.page';

describe('Event', () => {
  let component: EventPage;
  let fixture: ComponentFixture<EventPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventPage, IonicModule, ExploreContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
