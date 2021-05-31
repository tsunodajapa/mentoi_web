import * as Yup from 'yup';

export const ForgotPasswordValidator = () =>
  Yup.object().shape({
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
  });
