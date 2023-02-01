import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root'
})
export class FetchReposService {
	constructor() { }
	response: any;
	restAPIURL: string = 'https://test-api-qzn1.onrender.com';
	
	getUserRepos = (username: string) => {
		return fetch(`${this.restAPIURL}/profile/?username=${username}`);
	}

	getUserReposByPage = (username: string, page: number) => {
		return fetch(`${this.restAPIURL}/profile/?username=${username}&page=${page}`);
	}

	setUserData (data: any) {
		this.response = data;
	}

	getUserData () {
		console.log(this.response);
		return this.response;
	}
}
