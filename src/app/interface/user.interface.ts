export enum UsuarioTipo {
    paciente = 'paciente',
    doctor = 'doctor;'
}

export interface RespUsuario {
    data: Usuario;
    doctor?: Persona;
    paciente?: Persona;
    message?: string;
    token: string;
}

export interface Usuario {
    id?: number;
    usuario: string;
    password: string;
    nombre: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    ci: number;
    telefono?: string;
    email: string;
    tipo: string;
    createdAt?: string;
    updatedAt?: string;
    paciente_id?: string;
    Paciente?: Paciente;
}
export interface Paciente {
    id: number;
    usuario_id: number;
    createdAt: string;
    updatedAt: string;
}
export interface Doctor extends Paciente {
    Usuario: Usuario;
}

export interface Persona {
    id: number;
    usuario_id: number;
    createdAt: string;
    updatedAt: string;
}
export enum EstadoNutricion {
    grave = 'Desnutricion Grave',
    moderada = 'Desnutricion aguda moderada',
    leve = 'Desnutricion aguda leve',
    normal = 'No tiene desnutricion aguda leve',
    mediana = 'Nutricion normal',
    sobrePeso = 'Nutricion con Sobrepeso'
}
export enum EstadoMedida {
    grave = 'Talla / Longitud baja',
    media = 'Riesgo de Talla / Longitud Baja',
    normal = 'Normal'
}
