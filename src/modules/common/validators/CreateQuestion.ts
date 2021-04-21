import * as Yup from 'yup';

export const CreateQuestionValidator = () =>
  Yup.object().shape({
    title: Yup.string().required('Título obrigatório'),
    description: Yup.string().required('Insira uma pergunta válida'),
  });
