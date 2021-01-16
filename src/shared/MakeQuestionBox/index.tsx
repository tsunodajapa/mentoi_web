import { Container } from './styles';

const MakeQuestionBox: React.FC = () => {
  return (
    <Container>
      <div>
        <div />
        <label htmlFor="question">QUAL SUA DÚVIDA?</label>
      </div>
      <textarea name="question" id="question" cols={30} rows={5} />
    </Container>
  );
};

export default MakeQuestionBox;
