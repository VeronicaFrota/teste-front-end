import { Routes } from '@angular/router';
import { SearchHomeComponent } from './search-home/search-home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { DetailsComponent } from './details/details.component';
import { DetailsVideoComponent } from './details-video/details-video.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

export const ROUTES: Routes = [
    { path: '', component: SearchHomeComponent },
    { path: 'search-results', component: SearchResultsComponent },
    { path: 'details'       , component: DetailsComponent },
    { path: 'details-video' , component: DetailsVideoComponent },
    { path: 'error-message' , component: ErrorMessageComponent }   
]
