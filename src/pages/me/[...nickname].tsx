import { useEffect, useRef, useState } from 'react';
import { GiGears } from 'react-icons/gi';
import {
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
  FaYoutube,
  FaMinus,
  FaMars,
  FaVenus,
} from 'react-icons/fa';

import Header from '@/modules/common/components/Header';
import SEO from '@/shared/components/SEO';
import { Main, Section, InputGroup } from '@/styles/pages/edit-profile';
import {
  Input,
  Radio,
  Select,
  TextArea,
} from '@/shared/components/FormElements';
import { Form } from '@unform/web';
import { Link } from '@/shared/components/Buttons/Link';
import Button from '@/shared/components/Buttons/Button';
import ButtonIcon from '@/shared/components/Buttons/ButtonIcon';
import { Genero } from '@/styles/pages/signup';
import { Scholarity } from '@/shared/data/Scholarity';
import subjects from '@/data/subjects';
import { useAuth } from '@/shared/hooks/auth';
import { FormHandles } from '@unform/core';

const EditProfile = () => {
  const [links, setLinks] = useState<String[]>(['']);
  const { user } = useAuth();
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data) {
    console.log(data);
  }

  function removeLink(indexToRemove: number) {
    const linksWithoutRemoveLink = links.filter(
      (_, index) => index !== indexToRemove,
    );
    setLinks(linksWithoutRemoveLink);
  }
  function addLink() {
    setLinks(oldState => [...oldState, '']);
  }

  return (
    <>
      <SEO
        title="Plataforma Educacional para Professores e Alunos | Mentoi"
        description="Plataforma educacional para interação entre estudantes e professores com atuação verificada, garantindo responsabilidade e evitando respostas com erros ou Fake News."
      />
      <Header actualNameStep="Editar Perfil" />
      <Main>
        <Section>
          <aside>
            <ul>
              <li>
                Perfil
                <div />
              </li>
              <li>
                Segurança
                <div />
              </li>
            </ul>
            <Link text="SEJA UM MENTOI" href="/become-mentoi" />
          </aside>
          <main>
            <Form ref={formRef} onSubmit={handleSubmit} initialData={user}>
              <fieldset>
                <legend>Dados Pessoais</legend>
                <Input
                  id="name"
                  name="name"
                  label="Nome"
                  type="text"
                  placeholder="Digite seu nome completo"
                />

                <Input id="nickName" name="nickName" label="Nick name" />

                <Input
                  type="date"
                  id="dateBirth"
                  name="dateBirth"
                  label="Data de nascimento (opcional)"
                />

                <Radio
                  label="Selecione seu Gênero"
                  customComponent={Genero}
                  name="gender"
                  items={[
                    { id: 'MALE', descrption: 'Masculino', icon: FaMars },
                    { id: 'FEMALE', descrption: 'Feminino', icon: FaVenus },
                    { id: 'OTHER', descrption: 'Não declarar' },
                  ]}
                />

                <Select
                  id="scholarity"
                  name="scholarity"
                  label="Escolaridade (opcional)"
                  data={Scholarity}
                />

                <Select
                  id="areasInterest"
                  name="areasInterest"
                  label="Área(s) de interesse (opcional)"
                  data={subjects}
                  multiSelect
                />
              </fieldset>

              <fieldset>
                <legend>Dados Personalizados</legend>
                <Input
                  id="display_name"
                  name="display_name"
                  label="Nome de Perfil"
                  placeholder="Nome que aparecerá acima do Nickname"
                />
                <Input
                  id="url"
                  name="url"
                  label="URL personalizada"
                  placeholder="Digite a url de algum site pessoal seu"
                />

                <InputGroup>
                  <label htmlFor="links">Links</label>
                  {links.map((_, index) => (
                    <div key={index}>
                      <Select
                        id={`types${index}`}
                        name={`types[${index}]`}
                        data={[
                          {
                            name: 'Linkedin',
                            key: 'linkedin',
                            icon: FaLinkedinIn,
                          },
                          {
                            name: 'Instagram',
                            key: 'instagram',
                            icon: FaInstagram,
                          },
                          {
                            name: 'Behance',
                            key: 'behance',
                            icon: FaBehance,
                          },
                          {
                            name: 'Youtube',
                            key: 'youtube',
                            icon: FaYoutube,
                          },
                        ]}
                      />
                      <Input
                        id={`links${index}`}
                        name={`links[${index}]`}
                        placeholder="Digite o link do site"
                      />
                      <ButtonIcon
                        icon={FaMinus}
                        color="--color-red"
                        onClick={() => removeLink(index)}
                      />
                    </div>
                  ))}

                  <Button text="Adicionar novo link" onClick={addLink} />
                </InputGroup>

                <TextArea
                  id="summary"
                  name="summaray"
                  label="Resumo"
                  rows={3}
                />
              </fieldset>

              <Button type="submit" text="Salvar" />
            </Form>
          </main>
        </Section>
        <GiGears />
      </Main>
    </>
  );
};

export default EditProfile;
