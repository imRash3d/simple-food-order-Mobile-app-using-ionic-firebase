import { Component, OnInit } from '@angular/core';
import { Food } from '../../model/food.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  foodMenu: Food[] = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NOpg1j3F6OVeDf_DTwImLSXDEY25w081lvjWjc3HgCVqP9sM',
      id: 1,
      name: 'Colde Coffe',
      description: `The grid is composed of three units — a grid, row(s) and column(s).
    Columns will expand to fill their row, and
    will resize to fit additional columns `,
      price: 100,
      rating: 3.5,
      category: 1
    },
    {
      // tslint:disable-next-line:max-line-length
      image: 'https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/rf/image_960w/2010-2019/Wires/Images/2016-06-21/AP/Starbucks_Lawsuit-e3d34.jpg&w=480',
      id: 1,
      name: 'Colde Coffe',
      description: `The grid is composed of three units — a grid, row(s) and column(s).
    Columns will expand to fill their row, and
    will resize to fit additional columns `,
      price: 100,
      rating: 3.5,
      category: 1
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTurr1dtY3O1EhdVdUZennYQn7YAYK1FOocfHRNiTxf5xABn7s4',
      id: 1,
      name: 'Colde Coffe',
      description: `The grid is composed of three units — a grid, row(s) and column(s).
    Columns will expand to fill their row, and
    will resize to fit additional columns `,
      price: 100,
      rating: 3.5,
      category: 2
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI_dToPIGQLJxTlpIqlTVyk6hzL4H_y7GcC1xsSzHjTi6GgyVz',
      id: 1,
      name: 'Colde Coffe',
      description: `The grid is composed of three units — a grid, row(s) and column(s).
    Columns will expand to fill their row, and
    will resize to fit additional columns `,
      price: 100,
      rating: 3.5,
      category: 2
    }
  ];
  items: Food[] = [];
  constructor(private route: ActivatedRoute) {
    const category = this.route.snapshot.params.id;
    this.items = this.foodMenu.filter(item => {
      if (item.category === category) {
        return item;
      }
    });
   console.log(this.items, this.foodMenu)
  }

  ngOnInit() {
  }

}
