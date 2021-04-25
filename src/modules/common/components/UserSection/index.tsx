// import { Container } from './styles';

import { useAuth } from '@/hooks/auth';
import { Circle } from '@/shared/components/Circle';
import ContentBox from '@/shared/components/ContentBox';
import ProgressCircle from '@/shared/components/ProgressCircle';
import { Profile, Row } from './styles';

const UserSection = () => {
  const { user } = useAuth();

  return (
    <>
      {user && (
        <ContentBox>
          <Profile>
            <div>
              <ProgressCircle percentage={90} />

              {/* <Image
                    src="/test_profile_.jpg"
                    alt="Professor CZ"
                    layout="fill"
                  /> */}

              <Circle size={70} />
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
