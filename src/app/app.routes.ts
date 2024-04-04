import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contatos', component: ContactsComponent },
  { path: 'sobre', component: AboutComponent },
];
