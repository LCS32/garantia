export interface Garantia {
    id?: number;
    fecha: string;
    name: string;
    telefono: string;
    marca: string;
    modelo: string;
    color: string;
    descripcion: string;
    distribuidor: string;
    tramitada?: boolean;
    fechaTramitada?: string;
    aceptada?: boolean;
    fechaAceptada?: string;
    entregada?: boolean; 
    fechaEntregada?: string;
    files?: FileList;
}