import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Body } from '@angular/http/src/body';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(private dataService: DataService) {}
  isEdit: boolean = false;
  users: User[];

  lastUser: any;
  flag: boolean = false;

  name:string;
  email:string;
  website:string;
  address:Address;

  ngOnInit() {
    this.name = "John Doe";
    this.email = "john@doe.com";
    this.address = {
      street : "Saint Mary",
      city: "Lost Angeles"
    }
    this.dataService.getUsers().subscribe((param)=>(this.users = param));
    };

    toggleEdit(user){
      
      if(user == this.lastUser && this.flag == false)
      {
        this.isEdit = false;
        this.flag = true;
      }
      else 
      {
        this.isEdit = true;
        this.flag = false;
      }

      
      this.name = user.name;
      this.email = user.email;
      this.website = user.website;
      this.address = {
        street : user.address.street,
        city: user.address.city
      }

      this.lastUser = user;
    }
  }


interface User{
  name:string;  
}

interface Address{
  street:string,
  city:string
};



