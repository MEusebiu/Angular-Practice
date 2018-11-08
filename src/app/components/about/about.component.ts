import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  hobbies: string[] = ['Jogging', 'Computer games', 'Traveling', 'Action movies', 'Skydiving', 'Bungee', 'Programming', 'Chilling'];
  updatedData : string[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.updatedData = JSON.parse(localStorage.getItem("Users"));
  }

  addHobby(hobby):void{
    if(hobby != '')
    {
      this.hobbies.push(hobby);
      this.UpdateData();
    }
  }

  deleteHobby(index){
    this.hobbies.splice(index,1);
    this.UpdateData();
  }

  UpdateData(){
    localStorage.setItem("Users", JSON.stringify(this.hobbies));
    this.updatedData = JSON.parse(localStorage.getItem("Users"));
  }
}





