import { Component, OnInit} from '@angular/core';
import { Prueba } from './prueba';
import { ServiceService } from '../../api/service.service';
import { PruebaComponent } from '../menu/prueba.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css'],
  providers: [ServiceService]
})
export class IdComponent implements OnInit {
  
  public prueba: Prueba;
  public articulos;
  constructor(private _peticionesService:ServiceService, private router: Router) { 
    this.prueba = new Prueba("");
  }

  ngOnInit() {
    this._peticionesService.getArticulos().subscribe(
      result=>{
        this.articulos=result;
        console.log(this.articulos);
          if(!this.articulos){
              console.log('Error en el servicio');
          }
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }

  onSubmit(){
    this.router.navigate(['menu', this.prueba.id]);
  }

}
