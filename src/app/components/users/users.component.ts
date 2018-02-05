import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'
import { log } from 'util';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  user: User= {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }

  }
  users: User[];
  showExtended: boolean = true ; 
  loaded: boolean=false;
  enableAdd: boolean = false;
  showUserform: boolean = false;


  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MI'
          }, 
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Daniel',
          lastName: 'Horoszko',
          age: 34,
          address: {
            street: 'Jana Pawła',
            city: 'Wawa',
            state: 'Maz'
          },

          isActive: false,
   
          registered: new Date('03/1/2017 06:20:00'),
          hide: true
        },
        {
          firstName: 'Andrzej',
          lastName: 'Paleta',
          age: 54,
          address: {
            street: 'Interii',
            city: 'Piaseczno',
            state: 'Pdkrpr'
          },
         
          isActive: true,

          registered: new Date('11/06/2016 11:45:00'),
          hide: true
        }
      ];
      this.loaded=true;

  }

  addUser() {
    this.user.isActive == true;
    this.user.registered=new Date();
    this.users.push(this.user); 
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    }
    // Pushes user to the array
  }

  // fireEvent(e){
  //   // console.log('Button Clicked');
  //   console.log(e.type);
  // }

  toggleHide(user:User) {
    user.hide = !user.hide;
  }

  onSubmit(e){
    console.log(123);
    e.preventDefault();

  }

  fireEvent(e){
    console.log(e.type);
    console.log(e.target.value);
  }

}
