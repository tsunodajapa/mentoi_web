import { useRef } from 'react';
import { FormHandles } from '@unform/core';

import subjects from '@/data/subjects';
import { useToast } from '@/shared/hooks/toast';
import { useQuestion } from '@/modules/question/hooks/question';

import { CreateQuestionData } from '@/modules/question/hooks/question';
import { CreateQuestionValidator } from '@/modules/question/validators/CreateQuestion';
import { ValidationError } from 'yup';
import Button from '@/shared/components/Buttons/Button';
import {
  Input,
  TextArea,
  Select,
  Dropzone,
} from '@/shared/components/FormElements';

import { FormQuestion } from './styles';

interface MakeQuestionBoxProps {
  alternativeId?: string;
}

const MakeQuestionBox = ({ alternativeId = 'web' }: MakeQuestionBoxProps) => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { createQuestion } = useQuestion();

  async function handleSubmit(data: CreateQuestionData) {
    try {
      formRef.current?.setErrors({});

      await CreateQuestionValidator().validate(data, {
        abortEarly: false,
      });

      const formData = new FormData();

      Object.keys(data).forEach(key => {
        if (key === 'files') {
          data[key].map(file => formData.append(`files`, file, file.name));
        } else if (key === 'areasInterest') {
          formData.append(key, JSON.stringify(data[key]));
        } else {
          formData.append(key, data[key]);
        }
      });

      await createQuestion(formData);

      addToast({
        type: 'success',
        title: 'Sua pergunta foi publicada!',
      });

      formRef.current.reset();
    } catch (error) {
      let description =
        'Ocorreu um erro ao publicar a pergunta, tente novamente';
      let title = 'Erro ao publicar!';

      if (error instanceof ValidationError) {
        title = 'Campos obrigatórios!';
        description =
          'Os campos Título, Pergunta e Área de interesse, são obrigatórios.';
      }

      addToast({
        type: 'error',
        title,
        description,
      });
    }
  }

  return (
    <FormQuestion onSubmit={handleSubmit} ref={formRef}>
      <Input id={`title-${alternativeId}`} name="title" placeholder="TÍTULO" />

      <TextArea
        name="description"
        id={`description-${alternativeId}`}
        cols={30}
        rows={10}
        placeholder="PERGUNTA"
      >
        <Dropzone name="files" />
      </TextArea>

      <Select
        id={`areasInterest-${alternativeId}`}
        name="areasInterest"
        placeHolder="Selecione área de interesse"
        data={subjects}
        multiSelect
      />

      <Button type="submit" text="PUBLICAR" />
    </FormQuestion>
  );
};

export default MakeQuestionBox;
