import { ReactNode, useMemo, useState } from 'react';
import Image from 'next/image';

import { FaComment } from 'react-icons/fa';

import { Question } from '@/modules/question/hooks/question';

import subjects from '@/data/subjects';

import { Circle } from '../../../../shared/components/Circle';

import { Container, Content, Header } from './styles';
import { Link } from '../../../../shared/components/Buttons/Link';

interface QuestionBoxProps {
  data: Question;

  children?: ReactNode;
}

const QuestionBox = ({
  data: { id, description, title, areasInterest, files, user, elapsedTime },
  children,
}: QuestionBoxProps) => {
  const [titleColor, setTitleColor] = useState<[string, string]>();

  const Title = useMemo(() => {
    if (areasInterest.length > 1) {
      const [subjectFirst, subjectSecond] = subjects.filter(
        subject =>
          subject.name === areasInterest[0].name ||
          subject.name === areasInterest[1].name,
      );

      setTitleColor(
        subjectFirst.name === areasInterest[0].name
          ? [subjectFirst.color, subjectSecond.color]
          : [subjectSecond.color, subjectFirst.color],
      );

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
    <Container titleColor={titleColor} isQuestionPage={!!children}>
      <div>
        <span>{Title}</span>
      </div>

      <div>
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
            <span>{elapsedTime}</span>
          </Header>

          <span>{description}</span>
          {!children && (
            <div>
              <div>
                <FaComment />
                <span>2</span>
              </div>
              {id && (
                <Link
                  href={`questions/${id}`}
                  text="Ver Pergunta"
                  variant="outlinePrimary"
                />
              )}
            </div>
          )}
        </Content>
        {children}
      </div>
    </Container>
  );
};

export default QuestionBox;
