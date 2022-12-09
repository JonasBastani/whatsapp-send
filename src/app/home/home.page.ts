import { Component } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public data = {
    number: '',
    message: '',
    save: false
  }

  public valid = '';

  constructor() {}

  ionViewWillEnter(){
    this.checkMessage();
  }

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
    this.checkToSave(); 
    window.open('https://api.whatsapp.com/send/?phone='+number+'&text='+encodeURI(message));
  }

  async save(message:string) {
    await Storage.set({
      key: 'message',
      value: message,
    });
  };

  async checkMessage(){
    const { value } = await Storage.get({ key: 'message' });
    if(value){
      this.data.message = value;
      this.data.save = true;
    }
  }

  async checkToSave(){
    const { value } = await Storage.get({ key: 'message' });
    if(this.data.save){
      this.save(this.data.message);
    } else {
      if(value) await Storage.remove({ key: 'message' });
    }
  }

  changeSave(){
    this.data.save = this.data.save ? false: true;
  }

  redrectDev(){
    window.open('https://www.linkedin.com/in/jonas-bastani/', '_blank');
  }

}
