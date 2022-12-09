import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public data = {
    number: '',
    message: ''
  }

  public valid = '';

  constructor() {}

  send(){
    this.valid = '';
    if(!this.data.number){
      this.valid = 'Número é obrigatório!';
      return;
    }
    if(this.data.number.length < 12){
      this.valid = 'Número inválido!';
      return;
    }

    this.openWpp(this.data.message, this.data.number);
  }

  openWpp(message:string, number:string) {
    window.open('https://api.whatsapp.com/send/?phone='+number+'&text='+encodeURI(message));
  }

}
