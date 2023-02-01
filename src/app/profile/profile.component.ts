import { Component } from '@angular/core';
import { FetchReposService } from '../services/fetch-repos.service';


@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
	userData: any; // Complete Response is split in {profile|repo}Data
	profileData: any;
	repoData: any;
	pages: number[];
	
	// Variables for pagination
	current_page: number = 1;
	upper_limit: number; 
	lower_limit: number = 1;
	showLoadingIcon: boolean = false;
	showReposContainer: boolean = true;
	username: string;
	
	constructor (private repoService: FetchReposService) {
		this.setUserData();
		this.profileData = this.userData['user_details'];
		this.profileData['twitter_username'] = 'https://twitter.com/' + this.profileData['twitter_username'];
		this.repoData = this.userData['repo_details']
		this.pages = [];
		for(let i = 1; i <= Math.ceil(this.profileData.public_repos / 9); i++){
			this.pages.push(i);
		}
		this.upper_limit = this.pages.length;
		this.username = this.profileData['html_url'].split("/").pop();
		console.log(this.pages);
	}
	
	setUserData () {
		this.userData = this.repoService.getUserData();
	}
	
	// Async Wrapper for fetching details
	getReposByPage = async (username: string, page: number) => {
		this.showReposContainer = false;
		this.showLoadingIcon = true;
		let response: any = await this.repoService.getUserReposByPage(username, page);
		response = await response.json();
		response = JSON.parse(response);
		this.showLoadingIcon = false;
		return response;
	} 
	
	getNextPage () {
		if (this.current_page == this.upper_limit){
			// Do Noting
		}
		else {
			this.current_page++;
			this.getReposByPage(this.username, this.current_page)
				.then( data => {
					this.repoData = data;
					this.showReposContainer = true;
				})
				.catch(error => console.log(error.message));
		}
	}
	
	getByPage (page: number) {
		if (this.current_page == page){
			// Do Nothing
		}
		else {
			this.current_page = page;
			this.getReposByPage(this.username, this.current_page)
			.then( data => {
				this.repoData = data;
				this.showReposContainer = true;
			})
			.catch(error => console.log(error.message));
		}
	}
	
	getPrevPage () {
		if (this.current_page == 1){
			// Do Nothing
		}
		else {
			this.current_page--;
			this.getReposByPage(this.username, this.current_page)
				.then( data => {
					this.repoData = data;
					this.showReposContainer = true;
				})
				.catch(error => console.log(error.message));
		}
	}
}
