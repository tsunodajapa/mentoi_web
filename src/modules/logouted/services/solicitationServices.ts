import api from '@/shared/services/api';

export interface Solicitation {
  name: string;
  email: string;
  cpf: string;
  documents: File[];
  observations?: string;
}

export async function createSolicitation(payload: FormData): Promise<void> {
  await api.post('solicitations', payload);
}
