import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  title = 'cdash';
  description = 'Meu Aplicativo Gerenciador de Compras'
  url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg'

  constructor() { }

  ngOnInit() {
  }

}
