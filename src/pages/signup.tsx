import Header from '@/modules/logouted/Header';
import Button from '@/shared/Button';
import Input from '@/shared/Input';
import { Container, Border, Footer } from '@/styles/pages/signup';
import { Form } from '@unform/web';
import Image from 'next/image';

import Logo from '@/assets/logo_mentoi_two_line.svg';

const SignUp = () => {
  const text = `"Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda"`;

  return (
    <>
      {/* <Header /> */}
      <Container>
        <span>
          {/* <Image
            src="/background_signup.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          /> */}
          {text} <br /> <span>Paulo Freire</span>
        </span>
        <div>
          <Logo />
          <h1>Crie sua conta</h1>

          <Form onSubmit={() => console.log('aqui')}>
            <Input
              id="name"
              name="name"
              label="Nome"
              placeholder="Digite seu nome completo"
            />

            <Input id="username" name="username" label="Username" />

            <Input type="email" id="email" name="email" label="E-mail" />

            <Input
              type="password"
              id="confirm-password"
              name="confirm-password"
              label="Confirmar sua senha"
            />

            <Input type="email" id="email" name="email" label="E-mail" />

            <Input
              type="date"
              id="birthDate"
              name="birthDate"
              label="Data de nascimento (opcional)"
            />

            <Border />

            <Input
              type="text"
              id="interest_area"
              name="interest_area"
              label="Área(s) de interesse (opcional)"
            />

            <Input
              type="text"
              id="scolarity"
              name="scolarity"
              label="Escolaridade (opcional)"
            />

            <Footer>
              <div>
                <input type="checkbox" name="" id="termos" />
                <label htmlFor="termos">Concordo com os termos de uso</label>
              </div>
              <div>
                <a href="_#">Já sou cadastrado</a>

                <Button text="CADASTRAR" />
              </div>
            </Footer>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
