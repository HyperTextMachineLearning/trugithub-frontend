import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FetchReposService } from '../services/fetch-repos.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent {
	constructor(
		private repoService: FetchReposService, 
		private router: Router,
		){};
	username: string = '';
	@Input() onHome: boolean = true;
	// This flag checks whether username abides by Github's rules for username
	failsBasicValidn: boolean = false;
	// Following is the regex for above
	validnregex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
	showLoadingIcon: boolean = false;
	showUserNotFoundIcon: boolean = false;
	userData: any;

	submit (usernameField: HTMLInputElement) {
		this.showUserNotFoundIcon = false;
		this.failsBasicValidn = false;
		
		this.username = usernameField.value;
		this.process_username(usernameField)
			.then(data => {
				if (data == 'not found' || data == 'invalid') {

				}
				else {
					this.repoService.setUserData(data);
					if (this.onHome) {
						this.router.navigate(['/profile']);
					}
					else {
						this.router.navigateByUrl('/', {skipLocationChange: true})
						.then(() => {this.router.navigateByUrl('/profile')});
					}
					// this.router.navigateByUrl('/profile');
				}
			})
			.catch(error => console.log(error.message));
		
 	}

	process_username = async (usernameField: HTMLInputElement) => {
		if(this.validnregex.test(this.username)){
			this.showLoadingIcon = true;
			let response: any = await this.repoService.getUserRepos(this.username);
			this.userData = await response.json();
			this.userData = JSON.parse(this.userData);
			if(this.userData.message){
				this.showLoadingIcon = false;
				this.showUserNotFoundIcon = true;
				setTimeout(() => {
					this.showUserNotFoundIcon = false;
				}, 2500);
				return 'not found';
			}
			else{
				this.showLoadingIcon = false;
				return this.userData;
			}
		}
		else{
			this.showUserNotFoundIcon = false;
			this.failsBasicValidn = true;
			usernameField.value = '';
			setTimeout(() => {
				this.failsBasicValidn = false;
			}, 2500);
			return 'invalid';
		}
	}
}
