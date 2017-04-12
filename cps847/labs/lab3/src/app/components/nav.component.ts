import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  template: `
  				<nav>
  					<ul class='nav nav-pills pull-right'>
  						<li role='presentation'><a href='/about'>About us</a></li>
  						<li role='presentation'><a href='/services'>Services</a></li>
  						<li role='presentation'><a href='/customers'>Customers</a></li>
  					</ul>
  					<time></time>
  					<h2>My company Inc.</h2>
  				</nav>
  			`
})
export class NavComponent  { 

}
