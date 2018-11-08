import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  ngOnInit() {}

  powers = ['Really Smart', 'Very Strong', 'Super Hot', 'Laser Eyes'];

  model = new Hero(18, 'Green Man','Boxing', this.powers[0]);

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
  }
}
