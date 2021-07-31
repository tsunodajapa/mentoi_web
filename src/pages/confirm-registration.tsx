import { useEffect, useState } from 'react';
import { RiCheckFill } from 'react-icons/ri';

import { Main } from '@/styles/pages/password';
import Header from '@/modules/logouted/components/Header';
import SEO from '@/shared/components/SEO';

import { useToast } from '@/shared/hooks/toast';

import { useRouter } from 'next/router';
import { updateFragmentUser } from '@/modules/logouted/services/userServices';
import Loading from '@/shared/components/Loading';

const ResetPassword = () => {
  const router = useRouter();

  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const { addToast } = useToast();

  useEffect(() => {
    const token = router.query.token as string;

    async function handleVerifyToken() {
      try {
        if (!token) {
          return;
        }

        const isUserVerified = await updateFragmentUser(token);

        if (!isUserVerified) {
          throw new Error('Token inválido ou expirado');
        }

        setIsSuccess(true);
        addToast({
          type: 'success',
          title: 'Senha alterada com sucesso!',
          description: 'Clique em "Entrar", e faça login com sua nova senha.',
        });
      } catch (error) {
        console.error(error);
        setIsSuccess(false);
        addToast({
          type: 'error',
          title: 'Erro ao restar senha',
          description:
            'Ocorreu um erro ao validar seu cadastro, tente novamente mais tarde',
        });
      } finally {
        setLoading(false);
      }
    }

    handleVerifyToken();
  }, [router.query.token, addToast]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <SEO
        title="Confirmar cadastro"
        description="O nosso objetivo é ajudar estudantes e curiosos a terem respostas didáticas e, principalmente, com CREDIBILIDADE"
      />
      <Header />
      <Main>
        {isSuccess && (
          <section>
            <h1>Cadastro Confirmado</h1>
            <p>Realize o login e aproveite a plataforma!</p>
          </section>
        )}
        {!isSuccess && (
          <section>
            <h1>Token inválido ou expirado</h1>
            <p>
              Caso o token tenha sido expirado, verifique sua caixa de entrada.
            </p>
          </section>
        )}
        <RiCheckFill />
      </Main>
    </>
  );
};

export default ResetPassword;
