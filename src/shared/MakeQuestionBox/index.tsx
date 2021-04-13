import subjects from '@/data/subjects';
import { Form } from '@unform/web';

import Button from '../Button';
import { Input, TextArea, Select } from '../FormElements';
import Dropzone from '../Dropzone';

const MakeQuestionBox = () => {
  return (
    <Form onSubmit={() => console.log('enviar')}>
      <Input id="title" name="title" placeholder="TÍTULO" />

      <TextArea
        name="question"
        id="question"
        cols={30}
        rows={10}
        placeholder="PERGUNTA"
      >
        <Dropzone onFileUploaded={() => console.log()} />
      </TextArea>

      <Select
        id="interest_area"
        name="interest_area"
        placeHolder="Selecione área de interesse"
        data={subjects}
        multiSelect
      />

      <Button text="PUBLICAR" />
    </Form>
  );
};

export default MakeQuestionBox;
