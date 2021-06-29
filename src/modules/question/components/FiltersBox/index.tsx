import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/shared/components/Buttons/Button';
import subjects from '@/data/subjects';
import concatUrlParams from '@/shared/utils/concatUrlParams';

import { FaCheckCircle } from 'react-icons/fa';
import ContentBox from '@/shared/components/ContentBox';
import { Container } from './styles';

const FiltersBox = () => {
  const [actualFilter, setActualFilter] = useState('');

  const router = useRouter();

  useEffect(() => {
    const areaInterest = router.query.areaInterest as string;

    setActualFilter(areaInterest);
  }, [router.query]);

  function handleOption(name = ''): void {
    const filter = concatUrlParams(router, name, 'areaInterest');

    router.push(`/feed${filter}`, undefined, { shallow: true });
  }

  return (
    <ContentBox>
      <Container>
        <p>Selecione o conteúdo</p>

        {subjects.map(subject => (
          <Button
            key={`filters${subject.name}`}
            text={subject.name}
            color={subject.color}
            onClick={() => handleOption(subject.name)}
            selected={subject.name === actualFilter}
          />
        ))}

        <div />
        <p>OS MELHORES ESTÃO AQUI</p>

        <div>
          <FaCheckCircle />
          <p>Apenas tutores certificados em sua área de atuação te ajudando!</p>
        </div>
      </Container>
    </ContentBox>
  );
};

export default FiltersBox;
