import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {
  destinations: Destinations[] = [
    {
      name: 'Moon',
      image: './assets/destination/image-moon.png',
      description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '384,400 km',
      travel: '3 days'
    },
    {
      name: 'Mars',
      image: './assets/destination/image-mars.png',
      description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distance: '225 mil. km',
      travel: '9 months'
    },
    {
      name: 'Europa',
      image: './assets/destination/image-europa.png',
      description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance: '628 mil. km',
      travel: '3 years'
    },
    {
      name: 'Titan',
      image: './assets/destination/image-titan.png',
      description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '1.6 bil. km',
      travel: '7 years'
    }
  ];

  selectedDestination: Destinations | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const destinationName = params.get('name');
      if (destinationName) {
        this.selectedDestination = this.destinations.find(destination => destination.name === destinationName) || this.destinations[0];
      } else {
        this.router.navigate(['/destination', this.destinations[0].name]);
        this.selectedDestination = this.destinations[0];
      }
    });
  }

  showDestination(destination: Destinations): void {
    this.selectedDestination = destination;
    this.router.navigate(['/destination', destination.name]);
  }
}

interface Destinations {
  name: string;
  image: string;
  description: string;
  distance: string;
  travel: string;
}
