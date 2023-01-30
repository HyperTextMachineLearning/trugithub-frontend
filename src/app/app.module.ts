import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { RepoDataComponent } from './profile/repo-data/repo-data.component';

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		ProfileComponent,
		RepoDataComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [HttpClient],
	bootstrap: [AppComponent]
})
export class AppModule { }
