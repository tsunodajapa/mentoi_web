import * as Yup from 'yup';

export const CreateQuestionValidator = () =>
  Yup.object().shape({
    title: Yup.string().required('Título obrigatório'),
    description: Yup.string().required('Insira uma pergunta válida'),
    areasInterest: Yup.array()
      .of(Yup.string())
      .min(1, 'Selecione no mínimo uma área de interesse')
      .required('Selecione área de interesse'),
  });
