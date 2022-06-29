import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Product} from "../../modals/product.model";
import {CartItem} from "../../modals/cart-item";
import {ProductService} from "../shared/services/product.service";
import {CartService} from "../shared/services/cart.service";
import { Router, NavigationEnd } from '@angular/router';
import { SidebarMenuService } from '../shared/sidebar/sidebar-menu.service';
import { SidenavMenu } from '../shared/sidebar/sidebar-menu.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  public sidenavMenuItems:Array<any>;

  public currencies = ['USD', 'EUR'];
  public currency:any;
  public flags = [
    { name:'English', image: 'assets/images/flags/gb.svg' },
    { name:'German', image: 'assets/images/flags/de.svg' },
    { name:'French', image: 'assets/images/flags/fr.svg' },
    { name:'Russian', image: 'assets/images/flags/ru.svg' },
    { name:'Turkish', image: 'assets/images/flags/tr.svg' }
  ]
  public flag:any;

  products: Product[];

  indexProduct: number;
  shoppingCartItems: CartItem[] = [];

  public banners = [];

  wishlistItems  :   Product[] = [];

  public url : any;

  navItems: SidenavMenu[] = [
    {
      displayName: 'Home',
      iconName: 'recent_actors',
      children: [
        {
          displayName: 'Home-1',
          iconName: 'group',
          route: '/home/one'
        },
        {
          displayName: 'Home-2',
          iconName: 'speaker_notes',
          route: '/home/two',
        },
        {
          displayName: 'Home-3',
          iconName: 'feedback',
          route: '/home/three'
        }
      ]
    },
    {
      displayName: 'Products',
          iconName: 'feedback',
          route: '/home/products/all'
    },
    {
      displayName: 'Shop',
      iconName: 'movie_filter',
      children: [
        {
          displayName: 'Computers',
          iconName: 'group',
          children: [
            {
              displayName: 'Laptops',
              iconName: 'person',
              route: 'michael-prentice',
            },
            {
              displayName: 'Cables',
              iconName: 'person',
              route: 'stephen-fluin',
               },
            {
              displayName: 'Monitors',
              iconName: 'person',
              route: 'mike-brocchi',
           },
           {
            displayName: 'Tablets',
            iconName: 'person',
            route: 'mike-brocchi',
         },
         {
          displayName: 'Headsets',
          iconName: 'person',
          route: 'mike-brocchi',
       }
          ]
        },
        {
          displayName: 'Tv & Audio',
          iconName: 'speaker_notes',
          children: [
            {
              displayName: 'Tv',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'Audio',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'Video',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Dvd',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Phones',
          iconName: 'feedback',
          children: [
            {
              displayName: 'Mobile phones',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'Power Bank',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'Memory Cards',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Accesories',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Electronics',
          iconName: 'feedback',
          children: [
            {
              displayName: 'Washing Machines',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'Water heater',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'Cookers',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Cold stores',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        }
      ]
    },
    {
      displayName: 'Blog',
      iconName: 'report_problem',
      children: [
        {
          displayName: 'Blog List',
          iconName: 'group',
          route: '/blog/blog-list'
        },
        {
          displayName: 'Blog Columns',
          iconName: 'speaker_notes',
          route: '/blog/blog-column',
        },
        {
          displayName: 'Blog Details',
          iconName: 'feedback',
          route: '/blog/blog-details'
        }
      ]
    },
    {
      displayName: 'Pages',
      iconName: 'report_problem',
      children: [
        {
          displayName: 'About Us',
          iconName: 'group',
          route: '/pages/about'
        },
        {
          displayName: 'FAQ',
          iconName: 'speaker_notes',
          route: '/pages/faq',
        },
        {
          displayName: 'Contact',
          iconName: 'feedback',
          route: '/pages/contact'
        },
        {
          displayName: 'Wishlist',
          iconName: 'group',
          route: '/pages/wishlist'
        },
        {
          displayName: 'Compare',
          iconName: 'speaker_notes',
          route: '/pages/compare',
        },
        {
          displayName: 'Checkout',
          iconName: 'feedback',
          route: '/pages/checkout'
        },
        {
          displayName: 'Cart',
          iconName: 'group',
          route: '/pages/cart'
        },
        {
          displayName: 'My Account',
          iconName: 'speaker_notes',
          route: '/pages/my-account',
        },
        {
          displayName: '404',
          iconName: 'feedback',
          route: '/pages/error'
        }
      ]
    },
    {
      displayName: 'Contact',
          iconName: 'feedback',
          route: '/pages/contact'
    }
  ];

  constructor(public router: Router, private cartService: CartService, public sidenavMenuService:SidebarMenuService) {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    } )
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.currency = this.currencies[0];
    this.flag = this.flags[0];
  }

  public changeCurrency(currency){
    this.currency = currency;
  }
  public changeLang(flag){
    this.flag = flag;
  }
}
