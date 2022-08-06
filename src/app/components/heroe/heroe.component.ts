import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService) {

    this.activatedRoute.params.subscribe( (data:any) => (
      this.heroe = this.heroesService.getHeroe( data['id'])
    ));

   }

  ngOnInit(): void {
  }

}
