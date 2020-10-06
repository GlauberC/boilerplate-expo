import * as Yup from 'yup';

interface FormProps {
  email: string;
  password: string;
}

export default async (data: FormProps) => {
  try {
    const schema = Yup.object().shape({
      email: Yup.string()
        .required('Esse campo é obrigatório')
        .email('Digite um email válido'),
      password: Yup.string().required('Esse campo é obrigatório'),
    });

    await schema.validate(data, {
      abortEarly: false,
    });
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      throw err;
    }
    throw new Error('UnexpectedError');
  }
};
