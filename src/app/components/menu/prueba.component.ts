import { Component, OnInit, Input} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { ServiceService } from '../../api/service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
  providers: [ServiceService]
})
export class PruebaComponent implements OnInit {
  closeResult: string;
  url:string;
 id:string;
  
  public articulos;
  constructor(private modalService: NgbModal, private _peticionesService:ServiceService,
    private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.getId();
    this.url="http://ec2-54-164-16-250.compute-1.amazonaws.com:9000/cleverbeat-report/"+ this.id;
  }

  getId() {
      this.id = this.route.snapshot.paramMap.get('id');
  }


  open() {
    this.modalService.open(ModalComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  salir(){
    console.log("salir");
  }

}
