
export interface Empresa {
    id:                 number;
    tipoIdentificacion: number;
    nit:                number;
    digitoVerificacion: number;
    razonSocial:        string;
    regimenIva:         null;
    ubicacion:          Ubicacion;
}

export interface Ubicacion {
    direccion:    string;
    telefono:     string;
    fax:          null;
    email:        string;
    codigoCiudad: number;
    codigoPais:   number;
}

export interface RegimenIva{
    tipo:   string;
    nombre: string;
}

export interface TipoContribuyente{
    tipo: string;
    nombre: string;
}