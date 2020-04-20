export enum UsuarioTipo {
    paciente = 'paciente',
    doctor = 'doctor;'
}

export interface RespUsuario {
    data: Usuario;
    doctor?: Persona;
    paciente?: Persona;
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
