import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Input() heroes:any[] = [];
  @Input() index?: number;

  palabra?:string;

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService,
              private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( data => {
      // console.log(data['palabra']);

    this.palabra = data['palabra'];
    this.heroes = this.heroesService.buscarHeroes( data['palabra']);
      // console.log(this.heroes);
    })
  }
}
