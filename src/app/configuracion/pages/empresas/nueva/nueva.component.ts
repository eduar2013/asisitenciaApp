import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegimenIva, TipoContribuyente } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styles: [
  ]
})
export class NuevaComponent implements OnInit {

  myForm : FormGroup = this.fb.group({
      nit:['',[Validators.required]],
      digitoVerificacion:['',[]],
      razonSocial:['',[Validators.required]],      
      direccion:['',[Validators.required]],
      codigoCiudad:['',[Validators.required]],
      nombreCiudad:[''],
      telefono:['',[Validators.required]],
      email:['',[Validators.email]],
      regimenIva:['',[Validators.required]],
      tipoContribuyente:['',[Validators.required]],
      autoretenedor:['']
  });

  listRegimenIVA:RegimenIva[]=[
    {tipo:"1",nombre:"Responsable de IVA"},
    {tipo:"2",nombre:"NO responsable de IVA"},
    {tipo:"3",nombre:"Sin animo de lucro"}
  ];

  listTipoContribuyente:TipoContribuyente[]=[
    {tipo:"1",nombre:"Persona Natural"},
    {tipo:"2",nombre:"Persona Juridica"},
    {tipo:"3",nombre:"Gran Contribuyente"}
  ];


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm.controls.nit.setValue('8112541111');
    this.myForm.controls.digitoVerificacion.setValue('1');
    this.myForm.controls.razonSocial.setValue('Asistencia Contable KH');
    this.myForm.controls.direccion.setValue('Cra 115 # 26-165');
    this.myForm.controls.codigoCiudad.setValue('05001');
    this.myForm.controls.nombreCiudad.setValue('Medellin');
    this.myForm.controls.telefono.setValue('5293565');
    this.myForm.controls.email.setValue('slest281@gmail.com');
  }

  grabarEmpresa(){
    console.log(this.myForm.value);
  }

}
