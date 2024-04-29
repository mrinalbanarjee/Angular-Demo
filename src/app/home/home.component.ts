import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    {name: '/images/Carousel/logo1.jpeg', caption:"Logo1"},
    {name: '/images/Carousel/logo2.jpeg', caption:"Logo2"},
    {name: '/images/Carousel/logo3.jpeg', caption:"Logo3"}
  ]

  ngOnInit() {
    const id =1;
    this.images = []
  }

}

