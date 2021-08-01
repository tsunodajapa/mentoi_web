import api from '@/shared/services/api';
import { FilterToGet } from '@/shared/services/IFilterDTO';
import { Answer } from '../hooks/answer';
import { Question } from '../hooks/question';

interface ComplaintQuestion {
  answerId?: string;
  observation?: string;
}

export async function createQuestion(data: FormData): Promise<Question> {
  return (await api.post('questions', data)).data;
}

export async function getQuestions(
  params?: FilterToGet & { userId?: string },
): Promise<Question[]> {
  return (
    await api.get<Question[]>('questions', {
      params,
    })
  ).data;
}

export async function showQuestion(id: string): Promise<Question> {
  return (await api.get<Question>(`questions/${id}`)).data;
}

export async function deleteQuestion(id: string): Promise<void> {
  return api.delete(`questions/${id}`);
}

export async function createAnswer(
  id: string,
  data: { text: string },
): Promise<Answer> {
  return (await api.post<Answer>(`questions/${id}/answers`, data)).data;
}

export async function getAnswers(
  id: string,
  params: FilterToGet,
): Promise<Answer[]> {
  return (await api.get<Answer[]>(`questions/${id}/answers`, { params })).data;
}

export async function deleteAnswer(
  id: string,
  answerId: string,
): Promise<void> {
  return api.delete(`questions/${id}/answers/${answerId}`);
}

export async function complaint(
  id: string,
  data: ComplaintQuestion,
): Promise<void> {
  return api.post(`questions/${id}/complaint`, data);
}
