import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonIcon, IonTabBar, IonTabButton, IonTabs, IonLabel, IonRouterOutlet } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [IonIcon, IonTabBar, IonTabButton, IonTabs, CommonModule, FormsModule, IonLabel, IonRouterOutlet],
  standalone: true,
})
export class TabsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    // Initialization logic here
    console.log('TabsComponent iniciado');
  }

}
