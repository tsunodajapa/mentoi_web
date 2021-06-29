import Button from '@/shared/components/Buttons/Button';
import ButtonIcon from '@/shared/components/Buttons/ButtonIcon';
import {
  RiEmotionHappyLine,
  RiEmotionLine,
  RiEmotionNormalLine,
} from 'react-icons/ri';
import UserImage from '@/modules/common/components/UserImage';
import { EvaluateContainer } from './styles';
import { Content, Header as HeaderAnswer } from '../QuestionBox/styles';
import { Answer } from '../../hooks/answer';

interface AnswerTemplateProps {
  answer: Answer;
}

const AnswerTemplate = ({ answer }: AnswerTemplateProps) => {
  return (
    <Content key={answer.id}>
      <HeaderAnswer>
        <div>
          <div>
            <UserImage
              avatarUrl={answer.user.avatarUrl}
              name={answer.user.name}
              color={answer.user.color}
            />
          </div>
          <div>
            <span>{answer.user.displayName || answer.user.name}</span>
            <span>@{answer.user.nickName}</span>
          </div>
        </div>

        <span>{answer.elapsedTime}</span>
      </HeaderAnswer>

      <span>{answer.text}</span>

      <div>
        <EvaluateContainer>
          <ButtonIcon icon={RiEmotionLine} color="--color-success" />
          <ButtonIcon icon={RiEmotionHappyLine} color="--color-warning" />
          <ButtonIcon icon={RiEmotionNormalLine} color="--color-error" />
          <span>Avalie a resposta</span>
        </EvaluateContainer>

        <Button
          text="DENUNCIAR"
          variant="outlineError"
          styles={{
            maxHeight: '2.8rem',
            alignSelf: 'flex-end',
          }}
        />
      </div>
    </Content>
  );
};

export default AnswerTemplate;
