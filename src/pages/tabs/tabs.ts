import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ChatPage } from '../chat/chat';
import { FindPage } from '../find/find';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homePage = HomePage;
  findPage = FindPage;
  chatPage = ChatPage;
  aboutPage = AboutPage;
  contactPage = ContactPage;

  constructor() {

  }
}
