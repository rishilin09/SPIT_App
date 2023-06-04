import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  private eventsList = [
    {
      detail: "AICTE-ATAL Sponsored Faculty Development Program organized by MCA Department and Electronics Engineering Department.",
      link: "https://www.spit.ac.in/2022/10/20/aicte_atal_mca/"
    },
    {
      detail: "AICTE ATAL sponsored one week FDP on Design Thinking theme Practical Perspective on Decision Making Education",
      link: "https://www.spit.ac.in/2022/01/21/aicte-atal-sponsored-one-week-fdp-on-design-thinking-theme-practical-perspective-on-decision-making-education/"
    },
    {
      detail: "Two weeks online credit course on Research and Publication Ethics for Ph.D. Students",
      link: "https://www.spit.ac.in/2021/10/29/two-weeks-online-credit-course-on-research-and-publication-ethics-for-ph-d-students/"
    },
    {
      detail: "Even Semester May 2023 exam Notice",
      link: "https://www.spit.ac.in/2023/04/20/even-semester-may-2023-exam-notice/"
    },
    {
      detail: "Re-examination result November 2022 (2021-2022) Batch",
      link: "https://www.spit.ac.in/2023/03/08/re-examination-result-november-2022-2021-2022-batch/"
    },
    {
      detail: "Regular Result Dec 2022",
      link: "https://www.spit.ac.in/2023/03/01/regular-result-dec-2022/"
    },
  ];

  getEvents(){
    return this.eventsList;
  }


}
