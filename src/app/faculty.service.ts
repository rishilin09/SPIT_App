import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor() {}
  principal = {
    name: "Dr. Bhalchandra Chaudhari",
    designation: "Principal",
    imgUrl: "https://www.spit.ac.in/wp-content/uploads/2021/05/bnc.jpg",
    email: "principal@spit.ac.in",
    linkedIn: "https://www.linkedin.com/in/dr-b-n-chaudhari-2a930b23b/"
  };

  private facultyDetails = [
    {
      name: "Dr. Bhalchandra Chaudhari",
      designation: "Principal",
      imgUrl: "https://www.spit.ac.in/wp-content/uploads/2021/05/bnc.jpg",
      email: "principal@spit.ac.in",
      linkedIn: "https://www.linkedin.com/in/dr-b-n-chaudhari-2a930b23b/"
    },
    {
      name: "Dr. Dhananjay Kalbande",
      designation: "Head Of The Department",
      imgUrl: "https://cse.spit.ac.in/assets/faculty/dr-dhananjay-kalbande.jpg",
      email: "drkalbande@spit.ac.in",
      linkedIn: "https://www.linkedin.com/in/dhananjay-kalbande-77349923/?originalSubdomain=in",
      areaOfInterest: ["Soft Computing",
      "Machine Learning",
      "Deep Learning",
      "Human Machine Interaction",
      "User Experience Design",
      "Artificial Intelligence for Social and Healthcare cause",
      "Data and Image Analytics",
      "IOT for Rural Healthcare"]
    },
    {
      name: "Dr. Pooja Raundale",
      designation: "Professor",
      imgUrl: "https://mca.spit.ac.in/wp-content/uploads/2022/12/PR-e1670491866552.jpg",
      email: "pooja@spit.ac.in",
      linkedIn: "https://www.linkedin.com/in/pooja-raundale-9a7349153/",
      areaOfInterest: ["Artificial Intelligence","Machine Learning","Data Science"]
    },
    {
      name: "Dr. Aarti Karande",
      designation: "Professor",
      imgUrl: "https://mca.spit.ac.in/wp-content/uploads/2022/12/aarti.png",
      email: "aartimkarande@spit.ac.in",
      linkedIn: "https://www.linkedin.com/in/aartimkarande/",
      areaOfInterest: ["Cloud Computing",
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Soft Computing",
      "Data Warehouse",
      "Business Intelligence",
      "Business Architect"]
    },
    {
      name: "Harshil Kanakia",
      designation: "Professor",
      imgUrl: "https://mca.spit.ac.in/wp-content/uploads/2022/12/HK.png",
      email: "harshil_kanakia@spit.ac.in",
      linkedIn: "https://www.linkedin.com/in/harshil-kanakia-b477246a/",
      areaOfInterest: ["Data Science",
      "Data Structures & Algorithms",
      "Databases",
      "Machine Learning",
      "Automation Programming"]
    },
    {
      name: "Pallavi Thakur",
      designation: "Professor",
      imgUrl: "https://mca.spit.ac.in/wp-content/uploads/2022/12/PT-150x150.png",
      email: "pallavi.thakur@spit.ac.in",
      linkedIn: "https://www.linkedin.com/in/pallavi-thakur-8a7a271ba/",
      areaOfInterest: ["Data Science",
      "Machine Learning",
      "Computer Networks",
      "Network Security",
      "Web Technology"]
    },
    {
      name: "Nikitha Mangaonkar",
      designation: "Professor",
      imgUrl: "https://mca.spit.ac.in/wp-content/uploads/2022/12/NM.jpg",
      email: "nikhita.mangaonkar@spit.ac.in",
      linkedIn: "https://www.linkedin.com/in/nikhita-mangaonkar-5268b4191/",
      areaOfInterest: ["Computer Networking",
      "Distributed Computing Cloud Computing",
      "Software Engineering",
      "Software Testing & Quality Assurance",
      "Software Project Management"]
    },
  ];

  getFaculty(){
    return this.facultyDetails;
  }

}
