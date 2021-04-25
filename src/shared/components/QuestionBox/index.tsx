import Image from 'next/image';
import { FaComment } from 'react-icons/fa';
import { Question } from '@/modules/common/hooks/question';

import { useMemo, useState } from 'react';
import subjects from '@/data/subjects';
import { Circle } from '../Circle';

import { Container, Content, Header } from './styles';
import { Link } from '../Buttons/Link';

interface QuestionBoxProps {
  data: Question;
}

const QuestionBox = ({
  data: { id, description, title, areasInterest, files, user },
}: QuestionBoxProps) => {
  const [titleColor, setTitleColor] = useState<[string, string]>();

  const Title = useMemo(() => {
    if (areasInterest.length > 1) {
      const [color1, color2] = subjects
        .filter(
          subject =>
            subject.name === areasInterest[0].name ||
            subject.name === areasInterest[1].name,
        )
        .map(subject => subject.color);

      setTitleColor([color1, color2]);

      return `# ${areasInterest[0].name.toUpperCase()} + # ${areasInterest[1].name.toUpperCase()}`;
    }
    if (areasInterest.length) {
      const subjectFound = subjects.find(
        subject => subject.name === areasInterest[0].name,
      );

      if (subjectFound) {
        const { color } = subjectFound;
        setTitleColor([color, color]);
      }
      return `# ${areasInterest[0].name.toUpperCase()}`;
    }
    return title;
  }, [areasInterest, title]);

  return (
    <Container titleColor={titleColor}>
      <div>
        <span>{Title}</span>
      </div>

      <Content>
        <Header>
          <div>
            <div>
              {user.avatarUrl ? (
                <Image src={user.avatarUrl} alt={user.name} layout="fill" />
              ) : (
                <Circle size={100} />
              )}
            </div>
            <div>
              <span>{user.displayName || user.name}</span>
              <span>@{user.nickName}</span>
            </div>
          </div>
          <span>há 5 minutos</span>
        </Header>

        <span>{description}</span>

        <div>
          <div>
            <FaComment />
            <span>2</span>
          </div>
          <Link
            href={`questions/${id}`}
            text="Ver Pergunta"
            variant="outlinePrimary"
          />
        </div>
      </Content>
    </Container>
  );
};

export default QuestionBox;
