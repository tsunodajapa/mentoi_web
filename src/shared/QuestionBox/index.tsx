import { FaComment } from 'react-icons/fa';
import { Container, Content, Header } from './styles';

const QuestionBox: React.FC = () => {
  return (
    <Container>
      <div>
        <span># AREA INTERESSE + #HISTÓRIA</span>
      </div>

      <Content>
        <Header>
          <div>
            <img src="" alt="" />
            <div>
              <span>Arielle Tsunoda</span>
              <span>@arielleft</span>
            </div>
          </div>
          <span>há 5 minutos</span>
        </Header>

        <span>
          O que é o 'genocídio branco' que a Stormfront fala no último ep de The
          Boys?
        </span>

        <div>
          <div>
            <FaComment />
            <span>2</span>
          </div>
          <button type="button">Responder</button>
        </div>
      </Content>
    </Container>
  );
};

export default QuestionBox;
