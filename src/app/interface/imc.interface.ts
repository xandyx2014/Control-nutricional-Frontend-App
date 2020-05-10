export enum NutricionMenores {
    Severa = 'Desnutricion Severa',
    Moderada = 'Desnutricion Moderada',
    Normal = 'Desnutricion Normal',
    SobrePeso = 'SobrePeso',
    Obesidad = 'Obesidad',
}
export interface TablaImc {
    severa: number;
    moderada: number[];
    normal: number[];
    sobrePeso: number[];
    obesidad: number;
}
export enum NutricionImc {
    DesnutricionSevera = 'Desnutricion Severa',
    DesnutricionModerada = 'Desnutricion Moderada',
    DesnutricionLeve = 'Desnutricion Leve',
    Normal = 'Intervalo Normal',
    Sobrepeso = 'Sobrepeso',
    SobrepesoI = 'Sobrepeso Grado I',
    SobrepesoII = 'Sobrepeso Grado I',
    Obesidad = 'Obesidad',
    ObesidadI = 'Obesidad Tipo I',
    ObesidadII= 'Obesidad Tipo II',
    ObesidadIII = 'Obesidad Tipo III Morbida',
    ObesidadIV = 'Obesidad Tipo IV Extrema',
}
