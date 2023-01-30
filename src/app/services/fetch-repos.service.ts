import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class FetchReposService {
	recvdUsername: string = '';
	constructor(private http: HttpClient) { }
	mydata: any;
	
	getCountries () {
		console.log(this.http.get(`127.0.0.1:8000/profile/?username=${this.recvdUsername}`));
	}
	
	getUsername (username: string) {
		// this.recvdUsername = username;
		// console.log(this.http.get('http://127.0.0.1:8000/profile/', {
		// 	params: { 'username': username}
		// }));
		let s = this.http.get('http://127.0.0.1:8000/profile/', {
				params: { 'username': username}
			});
		s.subscribe( (data) => {
			this.mydata = data;
			console.log(JSON.parse(this.mydata));
		} );
		
	}
}


