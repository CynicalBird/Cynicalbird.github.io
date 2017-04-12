import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'index',
  template: `
  				<h1>Welcome to {{title}}</h1>
  				<p>Hello {{name}}</p>
  				<p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.province}}</p>
  				<form>
            <label>Name</label>
            <input type='text' name='name' placeholder='name' [(ngModel)]='name'><br>
            <label>Email</label>
            <input type='text' name='email' placeholder='email' [(ngModel)]='email'><br>
            <label>Street</label>
            <input type='text' name='street' placeholder='street' [(ngModel)]='address.street'><br>
            <label>City</label>
            <input type='text' name='city' placeholder='city' [(ngModel)]='address.city'><br>
            <label>Province</label>
            <input type='text' name='province' placeholder='province' [(ngModel)]='address.province'><br>
          </form>
          <form (submit)='addHobby(hobby.value)'>
            <label>Add a hobbie</label>
            <input type='text' #hobby ><br>
          </form>
  				<div class='center'>
  					<button id='hobbies' (click)="toggleHobbies()">
  						{{!showHobbies ? 'Show' : 'Hide'}} hobbies
  					</button>
  				</div>
  				<div *ngIf='showHobbies'>
	  				<p>Hobbies</p>
	  				<ul>
	  					<li *ngFor='let hobby of hobbies; let i = index;'>
	  						{{hobby}}
                <button (click)='deleteHobby(i)'>delete</button>
	  					</li>
	  				</ul>
	  			</div>
  			`,
        providers: [WeatherService]
})
export class IndexComponent  {
	name : string;
	title : string;
	address : address;
	hobbies : string[];
	showHobbies : boolean;

	constructor(private weatherService: WeatherService) {
		this.name = 'Alex Ng';
		this.title = 'Welcome to my first Angular 2 App';
		this.address = {
			street : '120 Main Street',
			city : 'Toronto',
			province : 'ON'
		};
		this.hobbies = ['Programming',' Reading','Drawing','Games'];
		this.showHobbies = false;
    this.weatherService.getWeather().subscribe(posts => {
      console.log(posts);
    });
	}
	toggleHobbies() {
		if (this.showHobbies)
			this.showHobbies = false;
		else
			this.showHobbies = true;
	}
	addHobby(hobby : string) {
    this.hobbies.push(hobby);
	}
  deleteHobby(index : number) {
    this.hobbies.splice(index, 1);
  }
}

interface address {
	street : string;
	city : string;
	province : string;
}
