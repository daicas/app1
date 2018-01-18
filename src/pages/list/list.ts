import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  items: Array<{id: number, name: string, image: string, price: string, colors: Array<string>,condition: string, description: string }>;

  constructor(public navCtrl: NavController) {
    this.items = [
      {id: 1,
        name: 'Chair',
        image: 'https://devitems.com/preview/furnish/img/product/1.jpg',
        price: '$39',
        colors: ['red', 'green', 'blue'],
        condition: 'New',
        description: 'Black chair'
      },
      {
        id: 2,
        name: 'Lamp',
        image: 'https://devitems.com/preview/furnish/img/product/2.jpg',
        price: '$39',
        colors: ['red'],
        condition: 'Used',
        description: 'Amazing lamp'
      },
      {
        id: 3,
        name: 'Lamp',
        image: 'https://devitems.com/preview/furnish/img/product/3.jpg',
        price: '$39',
        colors: ['red'],
        condition: 'Used',
        description: 'Amazing lamp'
      },
      {
        id: 4,
        name: 'Lamp',
        image: 'https://devitems.com/preview/furnish/img/product/4.jpg',
        price: '$39',
        colors: ['red'],
        condition: 'Used',
        description: 'Amazing lamp'
      },
      {
        id: 5,
        name: 'Chair',
        image: 'https://devitems.com/preview/furnish/img/product/1.jpg',
        price: '$39',
        colors: ['red', 'green', 'blue'],
        condition: 'New',
        description: 'Black chair'
      },
      {
        id: 6,
        name: 'Lamp',
        image: 'https://devitems.com/preview/furnish/img/product/2.jpg',
        price: '$39',
        colors: ['red'],
        condition: 'Used',
        description: 'Amazing lamp'
      },
      {
        id: 7,
        name: 'Lamp',
        image: 'https://devitems.com/preview/furnish/img/product/3.jpg',
        price: '$39',
        colors: ['red'],
        condition: 'Used',
        description: 'Amazing lamp'
      },
      {
        id: 8,
        name: 'Lamp',
        image: 'https://devitems.com/preview/furnish/img/product/4.jpg',
        price: '$39',
        colors: ['red'],
        condition: 'Used',
        description: 'Amazing lamp'
      }
  ];
  }

}
