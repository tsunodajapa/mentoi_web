import { useState } from 'react';
import { GiGears } from 'react-icons/gi';

import Header from '@/modules/common/components/Header';
import SEO from '@/shared/components/SEO';
import { Main, Section } from '@/styles/pages/edit-profile';
import ChangeProfileForm from '@/modules/common/components/ChangeProfileForm';
import ChangeUserForm from '@/modules/common/components/ChangeUserForm';
import ChangePasswordForm from '@/modules/common/components/ChangePasswordForm';
import SectionBordered, {
  BorderTypes,
} from '@/shared/components/SectionBordered';

const EditProfile = () => {
  const [actualStep, setActualStep] = useState(1);

  function handleChangeStep(step: number) {
    setActualStep(step);
  }

  return (
    <>
      <SEO
        title="Plataforma Educacional para Professores e Alunos | Mentoi"
        description="Plataforma educacional para interação entre estudantes e professores com atuação verificada, garantindo responsabilidade e evitando respostas com erros ou Fake News."
      />
      <Header actualNameStep="Editar Perfil" />
      <Main>
        <Section step={actualStep}>
          <SectionBordered>
            {
              {
                1: <ChangeUserForm />,
                2: <ChangePasswordForm />,
              }[actualStep]
            }
          </SectionBordered>
          {/* <aside>
            <ul>
              {['Perfil', 'Dados Pessoais', 'Segurança'].map((item, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => handleChangeStep(index + 1)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <Link text="SEJA UM MENTOI" href="/become-mentoi" />
          </aside> */}
        </Section>
      </Main>
    </>
  );
};

export default EditProfile;
