import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { TabsService } from '../../core/tabs.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public deseosService: DeseosService, private router:Router, private  alertCtrl: AlertController, private navCtrl: NavController, private tabsService: TabsService) {
    this.tabsService.showTabs();
  }

  async agregarLista(){
    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [{
                  text:'Cancelar',
                  role:'cancel',
                  handler:()=>{
                    return;
                  }
                },
                { 
                  text:'Crear',
                  handler:(data)=>{ 
                    if(data.titulo.length === 0){
                      console.log("Nothing");
                      return;
                    }
                    const listaId = this.deseosService.crearLista(data.titulo);
                    this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
                  }
                }]
              });
    alert.present();
  }

irConfig(){
    this.router.navigateByUrl(`/tabs/tab1/configuracion`);  
  }

}
  