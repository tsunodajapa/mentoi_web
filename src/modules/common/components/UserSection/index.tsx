import { useAuth } from '@/shared/hooks/auth';
import ContentBox from '@/shared/components/ContentBox';
import ProgressCircle from '@/shared/components/ProgressCircle';
import { Profile, Row } from './styles';
import UserImage from '../UserImage';
import UserDisplayName from '../UserDisplayName';

const UserSection = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <ContentBox>
      <Profile>
        <div>
          <ProgressCircle percentage={100} />

          <UserImage
            avatarUrl={user.avatarUrl}
            name={user.name}
            color={user.color}
            size={70}
            gender={user.gender}
          />
        </div>
        <UserDisplayName
          hasUser={!!user}
          name={user.name}
          displayName={user.displayName}
          nickName={user.nickName}
          type={user.type}
        />
      </Profile>

      <Row>
        <span>Avaliações</span>
        <span>EM BREVE</span>
      </Row>
      <Row>
        <span>Prêmios</span>
        <span>EM BREVE</span>
      </Row>
    </ContentBox>
  );
};

export { UserSection };
