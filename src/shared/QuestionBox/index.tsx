import Image from 'next/image';
import { FaComment } from 'react-icons/fa';
import { Circle } from '../Circle';
import { Container, Content, Header } from './styles';

const QuestionBox = () => {
  return (
    <Container>
      <div>
        <span># AREA INTERESSE + #HISTÓRIA</span>
      </div>

      <Content>
        <Header>
          <div>
            <div>
              <Image src="/test_profile.jpg" alt="Professor CZ" layout="fill" />
              {/* <Circle size={100} /> */}
            </div>
            <div>
              <span>Arielle Tsunoda</span>
              <span>@arielleft</span>
            </div>
          </div>
          <span>há 5 minutos</span>
        </Header>

        <span>
          {`O que é o 'genocídio branco' que a Stormfront fala no último episódio de The
          Boys?`}
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
