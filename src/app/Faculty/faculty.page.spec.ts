import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { FacultyPage } from './faculty.page';

describe('Tab2Page', () => {
  let component: FacultyPage;
  let fixture: ComponentFixture<FacultyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyPage, IonicModule, ExploreContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FacultyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
