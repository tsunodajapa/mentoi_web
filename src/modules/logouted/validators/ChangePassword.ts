import * as Yup from 'yup';

export const ChangePasswordValidator = () =>
  Yup.object().shape({
    oldPassword: Yup.string().required('Senha atual obrigatória'),
    password: Yup.string().required('Nova Senha obrigatória'),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password'), undefined],
      'Confirmação incorreta',
    ),
  });
