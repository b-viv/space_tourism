import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css'
})
export class CrewComponent {
  crews: Crew[] = [
    {
      id: 1,
      name: 'Douglas Hurley',
      image: './assets/crew/image-douglas-hurley.png',
      role: 'Commander',
      bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    },
    {
      id: 2,
      name: 'Mark Shuttleworth',
      image: './assets/crew/image-mark-shuttleworth.png',
      role: 'Mission Specialist',
      bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
    },
    {
      id: 3,
      name: 'Victor Glover',
      image: './assets/crew/image-victor-glover.png',
      role: 'Pilot',
      bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
    },
    {
      id: 4,
      name: 'Anousheh Ansari',
      image: './assets/crew/image-anousheh-ansari.png',
      role: 'Flight Engineer',
      bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space'
    },
  ];

  selectedCrewMember: Crew | null = null;

   constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const crewId = params.get('id');
      if (crewId) {
        const id = parseInt(crewId, 10);
        this.selectedCrewMember = this.crews.find(crew => crew.id === id) || this.crews[0];
      } else {
        this.router.navigate(['/crew', this.crews[0].id]);
        this.selectedCrewMember = this.crews[0];
      }
    });
  }

  showCrewMember(crew: Crew): void {
    this.selectedCrewMember = crew;
    this.router.navigate(['/crew', crew.id]);
  }
}

interface Crew {
  id: number,
  name: string,
  image: string,
  role: string,
  bio: string
}
