import * as Yup from 'yup';

export const CreateUserValidator = (birthDateMax: Date) =>
  Yup.object().shape({
    name: Yup.string().required('Nome Obrigatório'),
    nickName: Yup.string()
      .min(5, 'No mínimo 5 digitos')
      .required('Username Obrigatório'),
    birthDate: Yup.date()
      .max(birthDateMax, 'Você deve ter no mínimo 6 anos')
      .notRequired(),
    gender: Yup.string().oneOf(
      ['MALE', 'FEMALE', 'OTHER'],
      'Selecione uma opção',
    ),
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
    password: Yup.string().min(6, 'No mínimo 6 dígitos'),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password'), undefined],
      'Confirmação incorreta',
    ),
  });
