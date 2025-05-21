export type IEjercicio = {
   id?: number;
   rutina_id: number;
   nombre: string;
   video_url: string;
   descripcion: string;
};

type EjercicioColumnAliasKeys = 'ID' | 'RUTINA_ID' | 'NOMBRE' | 'VIDEO_URL' | 'DESCRIPCION';
export type IEjercicioColumnsAliases = {
   [key in EjercicioColumnAliasKeys]: keyof IEjercicio;
};

export type IEjercicioAssociations = object;
