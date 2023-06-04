import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})
export class HomePage {
  constructor() {}

  mainTitle : string = "Sardar Patel Institute of Technology";
  
  aboutUs : string = `Right from it’s first year in
  2009, S.P.I.T. has been one of the
  sought college by students for MCA and
  is renown for its ongoing courses.
  Even though starting in year 2009 it
  has managed to excel quickly and with
  the highest cutoff this year it has
  shown a growth among the students all
  over.`

  visionTxt = `Keeping in view the
  growing and changing needs of Industry
  and society, we at S.P.I.T. are
  committed to creating an environment
  which will raise the intellectual and
  moral standards of our students. Our
  endeavor is to strive for the overall
  development of students, thereby
  enabling them to accept challenges. In
  tune with this our vision is`

  visionMain = `"To build a renowned
  institute which will produce graduate
  engineers with global competency and
  social sensitivity."`

  missionList = [
    `"Provide high
    quality education in engineering and
    technology promoting the Indian Values
    and Ethos that will prepare the
    participants to lead lives of personal
    integrity and civic responsibility in
    a global society."`,

    `Promote an
    Educational Environment that combines
    academic study with the excitement of
    intellectual curiosity for engineers
    of tomorrow.`,

    `Enhance career
    opportunities for students through
    Industry-Institute interaction, valueadded
    courses and projects in cutting
    edge technology.`,

    ` Focus on applied
    research to create next generation
    technologies.`

  ];

}
