import { Form } from '@unform/web';

import subjects from '@/data/subjects';
import Dropzone from '@/shared/Dropzone';
import { Input, Select, TextArea } from '../FormElements';
import Button from '../Button';

import { Container } from './styles';

const MakeQuestionMobile = () => {
  return (
    <Container>
      <Form onSubmit={() => console.log('enviar')}>
        <Input id="title" name="title" placeholder="TÍTULO" />

        <TextArea
          name="question"
          id="question"
          cols={30}
          rows={10}
          placeholder="PERGUNTA"
        />

        <Select
          id="interest_area"
          name="interest_area"
          placeHolder="Selecione área de interesse"
          data={subjects}
          multiSelect
        />

        <Dropzone onFileUploaded={() => console.log()} />
        <Button text="PUBLICAR" />
      </Form>
    </Container>
  );
};

export default MakeQuestionMobile;