import * as Yup from 'yup';

export const CreateSolicitation = () =>
  Yup.object().shape({
    name: Yup.string().required('Nome Obrigatório'),
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
    cpf: Yup.string().required('CPF é obrigatório'),
  });
