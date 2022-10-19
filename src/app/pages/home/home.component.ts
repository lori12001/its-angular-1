import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks:any[] = [];
  loading = true;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void{
    console.log('oninit');
    this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .subscribe((response: any) => {
      console.log(response);
      this.drinks = response.drinks;
      console.log(this.drinks);
      
      this.loading = false;
    })
    
  }

}

