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
}
