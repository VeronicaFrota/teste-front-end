import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { ROUTES } from './app.routes';
import { SearchHomeComponent } from './search-home/search-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { DetailsVideoComponent } from './details-video/details-video.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		SearchHomeComponent,
		SearchResultsComponent,
		DetailsComponent,
		DetailsVideoComponent,
		ErrorMessageComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		MatSliderModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		RouterModule.forRoot(ROUTES),
		FormsModule,
		ReactiveFormsModule,
		MatCardModule,
		HttpClientModule,
		YoutubePlayerModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
