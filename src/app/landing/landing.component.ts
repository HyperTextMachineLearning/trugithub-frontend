import { Component } from '@angular/core';
import { FetchReposService } from '../services/fetch-repos.service';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.css']
})
export class LandingComponent {
	constructor(private repoService: FetchReposService){};
	failsBasicValidn: boolean = false;
	username: string = '';
	validnregex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
	// submit (event: any, form: NgForm) {
	submit (usernameField: HTMLInputElement) {

		this.username = usernameField.value;

		if(this.validnregex.test(this.username)){
			this.repoService.getUsername(this.username);
			this.failsBasicValidn = false;
		}
		else{
			usernameField.value = '';
			this.failsBasicValidn = true;
		}
 	}
}
