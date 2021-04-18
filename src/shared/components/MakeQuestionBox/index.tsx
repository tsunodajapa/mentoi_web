import subjects from '@/data/subjects';

import Button from '../Button';
import { Input, TextArea, Select } from '../FormElements';
import Dropzone from '../Dropzone';

import { FormQuestion } from './styles';

interface MakeQuestionBoxProps {
  alternativeId?: string;
}

const MakeQuestionBox = ({ alternativeId = 'web' }: MakeQuestionBoxProps) => {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <FormQuestion onSubmit={handleSubmit}>
      <Input id="title" name="title" placeholder="TÍTULO" />

      <TextArea
        name="description"
        id={`description-${alternativeId}`}
        cols={30}
        rows={10}
        placeholder="PERGUNTA"
      >
        <Dropzone onFileUploaded={() => console.log()} />
      </TextArea>

      <Select
        id={`interest_area-${alternativeId}`}
        name="interest_area"
        placeHolder="Selecione área de interesse"
        data={subjects}
        multiSelect
      />

      <Button type="submit" text="PUBLICAR" />
    </FormQuestion>
  );
};

export default MakeQuestionBox;
