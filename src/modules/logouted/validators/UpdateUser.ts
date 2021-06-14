import * as Yup from 'yup';

export const UpdateUserValidator = (birthDateMax: Date) =>
  Yup.object().shape({
    name: Yup.string().required('Nome Obrigatório'),
    nickName: Yup.string()
      .min(5, 'No mínimo 5 digitos')
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
  });
