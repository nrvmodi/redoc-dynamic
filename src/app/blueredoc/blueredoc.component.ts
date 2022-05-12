import { Component, OnInit, Inject, AfterViewInit} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Project } from '../models/Project';
import { BlueRedocService } from '../service/blue-redoc.service';
import { DOCUMENT } from '@angular/common'; 
declare var RedocTryItOut:any
declare var $: any; // declaring jquery in this way solved the problem


@Component({
  selector: 'app-blueredoc',
  templateUrl: './blueredoc.component.html',
  styleUrls: ['./blueredoc.component.css']
})
export class BlueredocComponent implements OnInit , AfterViewInit {

  constructor(private blueRedocService: BlueRedocService,@Inject(DOCUMENT) document: Document) { 
    this.projects = this.blueRedocService.getProjects()
    this.activeProject = this.projects[0];
    
  }
  
  projects: Project[];
  activeProject: Project;

  ngAfterViewInit() {
  }

  ngOnInit(): void {

    if(this.projects.length >0 ) {

      RedocTryItOut.init(
        this.activeProject.url,
        { title: this.activeProject.name}, 
        document.getElementById("redoc-container")
      )
    }
  }

  onTabChange(event: MatTabChangeEvent) {
    // console.log('Selected Tab ', event.tab);
    const tab = event.tab.textLabel;

    for (let project of this.projects) {
      // console.log('project', project)

      if(project.name === tab) {
        this.initalizeRedoc(project);
      }
    }
  }

  initalizeRedoc(project: Project) : void {
    $('#redoc-container').remove();
    $('#swagger-ui').remove();
    RedocTryItOut.init(
      project.url,
      {
        title: project.name
      }, 
      document.getElementById("redoc-container")
    )
  }

}
