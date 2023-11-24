import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchItem:string='';
  constructor(private route:ActivatedRoute,private rauter:Router){}
 ngOnInit(): void{
  this.route.params.subscribe(params=> {
    this.searchItem=params['searchItem'];
  })

 }
 search():void{
  if(this.searchItem)
  this.rauter.navigateByUrl('/search/'+this.searchItem)

 }
}
