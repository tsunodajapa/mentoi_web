import BackgroudBeAMentoi from '@/assets/background_be_a_mentoi.svg';
import { Link } from '@/shared/components/Buttons/Link';

import { Container } from './styles';

const ModalBeAMentoi = () => {
  return (
    <>
      <Container>
        <h2>Calma lá, campeão!</h2>
        <p>
          Apenas usuários verificados podem responder as perguntas. Verifique
          sua conta e seja um Mentoi!
        </p>
        <p>
          Entrando para o time de Mentoi&apos;s você pode, além de responder as
          perguntas, personalizar seu perfil, ganhar &apos;badges&apos;
          personalizados, se destacando na comunidade acadêmica
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
