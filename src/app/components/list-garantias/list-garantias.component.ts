import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Garantia } from 'src/app/interfaces/garantia';
import { GarantiaService } from 'src/app/services/garantia.service';

@Component({
  selector: 'app-list-garantias',
  templateUrl: './list-garantias.component.html',
  styleUrls: ['./list-garantias.component.css']
})
export class ListGarantiasComponent implements OnInit {
  listGarantias: Garantia[] = []
  loading: boolean = false;

  constructor(private _garantiaService: GarantiaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListGarantias();
  }

  getListGarantias() {
    this.loading = true;
    this._garantiaService.getListGarantias().subscribe((data: Garantia[]) => {
      this.listGarantias = data;
      this.loading = false;
    })
  }

  deleteProduct(id: number){
    this.loading = true;
    this._garantiaService.deleteProduct(id).subscribe(() => {
      this.getListGarantias();
      this.toastr.warning('La garantia fue eliminada con éxito', 'Garantia eliminada');
    })
  }

}
