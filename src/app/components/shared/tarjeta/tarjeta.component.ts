import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() heroes: any = {};
  @Input() index?:number;

  @Output() verHeroeOut: EventEmitter<number>;

  constructor(private router:Router) {
    this.verHeroeOut = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // this.verHeroeOut.emit(this.index);
    this.router.navigate(['/heroe', this.index]);
  }
}
