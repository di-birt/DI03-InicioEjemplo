import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.page.html',
  styleUrls: ['./borrar.page.scss'],
})
export class BorrarPage implements OnInit {
  indice: number=0;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    // Borrar
  }
}
