import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root'
})
export class FetchReposService {
	constructor() { }
	response: any;
	
	getUserRepos = (username: string) => {
		return fetch(`http://127.0.0.1:8000/profile/?username=${username}`);
	}

	getUserReposByPage = (username: string, page: number) => {
		return fetch(`http://127.0.0.1:8000/profile/?username=${username}&page=${page}`);
	}

	setUserData (data: any) {
		this.response = data;
	}

	getUserData () {
		console.log(this.response);
		return this.response;
	}
}
