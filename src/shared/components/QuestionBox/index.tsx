import Image from 'next/image';
import { FaComment } from 'react-icons/fa';
import {
  RiEmotionLine,
  RiEmotionHappyLine,
  RiEmotionNormalLine,
} from 'react-icons/ri';
import { Question } from '@/modules/common/hooks/question';

import { useMemo, useState } from 'react';
import subjects from '@/data/subjects';
import { Circle } from '../Circle';

import {
  Container,
  Content,
  Header,
  AnswersContainer,
  EvaluateContainer,
} from './styles';
import { Link } from '../Buttons/Link';
import Button from '../Buttons/Button';
import ButtonIcon from '../Buttons/ButtonIcon';

interface QuestionBoxProps {
  data: Question;
  isQuestionPage?: boolean;
}

const QuestionBox = ({
  data: { id, description, title, areasInterest, files, user },
  isQuestionPage = false,
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
    <Container titleColor={titleColor} isQuestionPage={isQuestionPage}>
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
        {!isQuestionPage && (
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
      {isQuestionPage && (
        <AnswersContainer>
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
              <EvaluateContainer>
                <ButtonIcon icon={RiEmotionLine} color="--color-success" />
                <ButtonIcon icon={RiEmotionHappyLine} color="--color-warning" />
                <ButtonIcon icon={RiEmotionNormalLine} color="--color-error" />
                <span>Avalie a resposta</span>
              </EvaluateContainer>

              <Button text="DENUNCIAR" variant="outlineError" />
            </div>
          </Content>
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

            <div />
          </Content>
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

            <div />
          </Content>
        </AnswersContainer>
      )}
    </Container>
  );
};

export default QuestionBox;
