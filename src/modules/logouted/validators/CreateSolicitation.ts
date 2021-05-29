import * as Yup from 'yup';

export const CreateSolicitation = () =>
  Yup.object().shape({
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
  });
