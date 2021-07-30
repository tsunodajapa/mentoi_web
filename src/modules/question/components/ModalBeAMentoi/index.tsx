import { useEffect, useState } from 'react';

import { Link } from '@/shared/components/Buttons/Link';
import { useAuth } from '@/shared/hooks/auth';

import BackgroudBeAMentoi from '@/assets/background_be_a_mentoi.svg';
import { Container } from './styles';

const ModalBeAMentoi = () => {
  const { user } = useAuth();

  const [textGeneralized, setTextGeneralized] = useState('campeã(o)');

  useEffect(() => {
    if (user && user.gender) {
      if (user.gender === 'MALE') setTextGeneralized('campeão');
      if (user.gender === 'FEMALE') setTextGeneralized('campeã');
    }
  }, [user]);

  return (
    <>
      <Container>
        <h2>Calma lá, {textGeneralized}!</h2>
        <p>
          Apenas usuários verificados podem responder as perguntas. Verifique
          sua conta e seja um Mentoi!
        </p>
        <p>
          Entrando para o time de Mentoi&apos;s você pode, além de responder as
          perguntas, personalizar seu perfil, ganhar
          &apos;badges&apos;(distintivos) personalizados, se destacando na
          comunidade acadêmica.
        </p>
        <Link text="VERIFICAR CONTA" href="/become-mentoi" />
        <div>
          <BackgroudBeAMentoi />
        </div>
      </Container>
    </>
  );
};

export default ModalBeAMentoi;
