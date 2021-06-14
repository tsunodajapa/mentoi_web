import Header from '@/modules/common/components/Header';
import SEO from '@/shared/components/SEO';
import { Main, Section } from '@/styles/pages/edit-profile';

import ChangeUserForm from '@/modules/common/components/ChangeUserForm';

import SectionBordered from '@/shared/components/SectionBordered';

const EditProfile = () => {
  return (
    <>
      <SEO
        title="Plataforma Educacional para Professores e Alunos | Mentoi"
        description="Plataforma educacional para interação entre estudantes e professores com atuação verificada, garantindo responsabilidade e evitando respostas com erros ou Fake News."
      />
      <Header actualNameStep="Editar Perfil" />
      <Main>
        <Section>
          <SectionBordered>
            <ChangeUserForm />
          </SectionBordered>
        </Section>
      </Main>
    </>
  );
};

export default EditProfile;
