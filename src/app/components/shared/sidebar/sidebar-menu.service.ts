import { Injectable, EventEmitter } from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})




export class SidebarMenuService {
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);

  constructor(private router: Router) {

  }




}







