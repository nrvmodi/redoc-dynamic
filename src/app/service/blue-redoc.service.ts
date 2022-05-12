import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class BlueRedocService {

  private PROJECTS: Project[] = [
    {
        id: '1',
        name: 'Pet Store',
        url: 'https://petstore.swagger.io/v2/swagger.json'
    },
    {
      id: '2',
        name: 'Multi broker api',
        url: '../assets/json/swagger.json'
    },
    {
      id: '3',
        name: 'Spacex api',
        url: 'https://petstore.swagger.io/v2/swagger.json'
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.PROJECTS;
  }
}
