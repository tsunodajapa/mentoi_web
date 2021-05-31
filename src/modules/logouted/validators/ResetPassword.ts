import * as Yup from 'yup';

export const ResetPasswordValidator = () =>
  Yup.object().shape({
    password: Yup.string().required('Senha obrigatória'),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password'), undefined],
      'Confirmação incorreta',
    ),
  });
