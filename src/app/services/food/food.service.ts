import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Foods[]{
    return[
      {
        id:1,
        name:' Meat',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'/assets/1.jpg',
        tags:['SlowFood','Soup'],
      },
      {
        id:2,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'/assets/1.jpg',
        tags:['SlowFood','Soup'],
      },
      {
        id:3,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'/assets/3.jpg',
        tags:['SlowFood','Soup'],
      },
      {
        id:4,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'/assets/4.jpg',
        tags:['SlowFood','Soup'],
      },
      {
        id:5,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'/assets/5.jpg',
        tags:['SlowFood','Soup'],
      },
      {
        id:6,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'/assets/6.jpg',
        tags:['SlowFood','Soup'],
      },
      {
        id:7,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'/assets/7.jpg',
        tags:['SlowFood','Soup'],
      },
      {
        id:8,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'/assets/8.jpg',
        tags:['SlowFood','Soup'],
      }
      
    ];
  }
}
