import * as Yup from 'yup';

export const CreateUserValidator = (birthDateMax: Date) =>
  Yup.object().shape({
    name: Yup.string().trim('Nome Obrigatório').required('Nome Obrigatório'),
    nickName: Yup.string()
      .min(5, 'No mínimo 5 digitos')
      .transform((curr, origin) => origin.trim())
      .matches(/^\S*$/u, 'Nick name não pode conter espaços')
      .required('Username Obrigatório'),
    dateBirth: Yup.date()
      .max(birthDateMax, 'Você deve ter no mínimo 6 anos')
      .nullable()
      .optional()
      .transform((curr, origin) => (origin === '' ? null : curr))
      .default(null),
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
