import ReactLoading from 'react-loading';
import MentoiLogo from '@/assets/logo_mentoi_two_line.svg';
import { Container } from './styles';

const Loading = () => {
  return (
    <Container>
      <MentoiLogo />
      <ReactLoading type="cylon" color="#64B447" />
    </Container>
  );
};

export default Loading;
