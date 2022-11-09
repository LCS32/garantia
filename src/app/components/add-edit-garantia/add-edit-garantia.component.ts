import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Garantia } from 'src/app/interfaces/garantia';
import { GarantiaService } from 'src/app/services/garantia.service';

@Component({
  selector: 'app-add-edit-garantia',
  templateUrl: './add-edit-garantia.component.html',
  styleUrls: ['./add-edit-garantia.component.css']
})
export class AddEditGarantiaComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar '

  constructor(private fb: FormBuilder,
    private _garantiaService: GarantiaService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      //Con esto se pone la fecha de forma automatica
      id: [''],
      fecha: new FormControl((new Date()).toISOString().substring(0, 10)),
      name: ['', Validators.required],
      telefono: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      color: ['', Validators.required],
      descripcion: ['', Validators.required],
      distribuidor: ['', Validators.required],
      tramitada: false,
      fechaTramitada: ['',],
      aceptada: false,
      fechaAceptada: ['',],
      entregada: false,
      fechaEntregada: ['',],
      files: ['',]
    })

    this.id = Number(aRoute.snapshot.paramMap.get('id'))
    console.log(this.id)
  }

  ngOnInit(): void {
    if (this.id != 0) {
      //es editar
      this.operacion = 'Editar ';
      this.getGarantia(this.id);
    }
  }

  getGarantia(id: number) {
    this.loading = true;
    this._garantiaService.getGarantia(id).subscribe((data: Garantia) => {
      console.log(data);
      this.loading = false;
      this.form.patchValue({
        fecha: data.fecha,
        id: data.id,
        name: data.name,
        telefono: data.telefono,
        marca: data.marca,
        modelo: data.modelo,
        color: data.color,
        descripcion: data.descripcion,
        distribuidor: data.distribuidor,
        tramitada: data.tramitada,
        fechaTramitada: data.fechaTramitada,
        aceptada: data.aceptada,
        fechaAceptada: data.fechaAceptada,
        entregada: data.entregada,
        fechaEntregada: data.fechaEntregada,
        
      })
    })
  }

  addGarantia() {


    const garantia: Garantia = {

      fecha: this.form.value.fecha,
      name: this.form.value.name,
      telefono: this.form.value.telefono,
      marca: this.form.value.marca,
      modelo: this.form.value.modelo,
      color: this.form.value.color,
      descripcion: this.form.value.descripcion,
      distribuidor: this.form.value.distribuidor,
      tramitada: this.form.value.tramitada,
      fechaTramitada: this.form.value.fechaTramitada,
      aceptada: this.form.value.aceptada,
      fechaAceptada: this.form.value.fechaAceptada,
      entregada: this.form.value.entregada,
      fechaEntregada: this.form.value.fechaEntregada,
      files: this.form.value.files
    }
    console.log(garantia)




    if (this.id !== 0) {
      //es editar
      
      this.loading = true;
      this._garantiaService.updateGarantia(this.id, garantia).subscribe(() => {
        this.loading = false;
        this.toastr.info(`La garantia de ${garantia.name} fue actualizada correctamente`, 'Garantia actualizada');
        this.router.navigate(['/']);
      })
    } else {
      //es agregar
      this.loading = true;
      this._garantiaService.saveGarantia(garantia).subscribe(() => {
        this.loading = false;
        this.toastr.success(`La garantia de ${garantia.name} fue creada correctamente`, 'Garantia creada');
        this.router.navigate(['/']);
      })
    }


  }

}
