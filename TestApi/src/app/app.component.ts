import { Component, OnInit } from '@angular/core';
import { ApplicationService } from './service/aplication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  nombre: string;
  data = {};
  constructor(private aplicationServ: ApplicationService) {
    
  }

    public ngOnInit(): void {
      this.aplicationServ.getGretting("test").then(data => {
        this.data = data;
        console.log(data);
      });
    }
}
