import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/lista.models';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item.models';
import { TabsService } from '../../core/tabs.service';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
  lista: Lista;
  constructor(public deseosService: DeseosService, private router: Router, private route: ActivatedRoute, private tabsService: TabsService) {
    this.tabsService.hideTabs();
    const listaId = this.route.snapshot.paramMap.get('listaId');
    this.lista = this.deseosService.getLista(listaId);
    
  }
  backBeg(){
    this.router.navigateByUrl(`/`);
  }
  ngOnInit() {
  }

}
  