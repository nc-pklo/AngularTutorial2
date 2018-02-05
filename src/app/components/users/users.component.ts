import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true ; 
  loaded: boolean=false;
  enableAdd: boolean = true;
  currentClasses={};
  currentStyles={};


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
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: true,
          balance: 100,
          registered: new Date('01/02/2018 08:30:00')
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
          image: 'http://lorempixel.com/600/600/people/2',
          isActive: false,
          balance: 200,
          registered: new Date('03/1/2017 06:20:00')
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
          image: 'http://lorempixel.com/600/600/people/1',
          isActive: true,
          balance: 50,
          registered: new Date('11/06/2016 11:45:00')
        }
      ];
      this.loaded=true;
 
    // this.showExtended= false;

    // this.addUser({
    //   firstName: 'David',
    //   lastName: 'Jackson',
    //   // age: 12,
    //   // address: {
    //   //   street: '12 Wake st',
    //   //   city: 'Miami',
    //   //   state: 'Fl'
    //   // }
    // });

      this.setCurrentClasses();
      this.setCurrentStyles();

  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses= {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended,
    }
  }

  setCurrentStyles(){
    this.currentStyles= {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size' : this.showExtended ? '' : '40px'
    }
  }


}
