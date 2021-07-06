import { useAuth } from '@/shared/hooks/auth';
import ContentBox from '@/shared/components/ContentBox';
import ProgressCircle from '@/shared/components/ProgressCircle';
import { Profile, Row } from './styles';
import UserImage from '../UserImage';

const UserSection = () => {
  const { user } = useAuth();

  return (
    <>
      {user && (
        <ContentBox>
          <Profile>
            <div>
              <ProgressCircle percentage={90} />

              <UserImage
                avatarUrl={user.avatarUrl}
                name={user.name}
                color={user.color}
                size={70}
                gender={user.gender}
              />
            </div>
            <strong>{user.name}</strong>
            <span>@{user.nickName}</span>
          </Profile>

          <Row>
            <span>Avaliações</span>
          </Row>
          <Row>
            <span>Prêmios</span>
          </Row>
        </ContentBox>
      )}
    </>
  );
};

export { UserSection };
