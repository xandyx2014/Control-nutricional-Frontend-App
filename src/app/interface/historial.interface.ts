import { Doctor } from './user.interface';

export interface Historial {
    id: number;
    peso: number;
    tamagno: number;
    doctor_id: number;
    paciente_id: number;
    edad: string;
    createdAt: string;
    updatedAt: string;
    Doctor: Doctor;
    genero: string;
}

