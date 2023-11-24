import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingModule } from 'angular-star-rating';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  foods:Foods[]=[];
  constructor( private fs:FoodService,private route:ActivatedRoute){

  }
  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.foods=this.fs.getAll().filter(food =>food.name.toLowerCase
    ().includes (params['searchItem'].toLowerCase()));
    else
    this.foods=this.fs.getAll();


    })
  
    
    
  }

}
