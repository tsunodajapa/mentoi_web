import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { Container } from './styles';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimationLeave, setIsAnimationLeave] = useState(false);

  useEffect(() => {
    if (!Cookies.get('purecookieDismiss')) {
      setIsVisible(true);
    }
  }, []);

  function handleCookieDimiss() {
    setIsAnimationLeave(true);
    Cookies.set('purecookieDismiss', '1', { expires: 30 });
  }

  return (
    <Container
      isVisible={isVisible}
      isAnimationLeave={isAnimationLeave}
      className="cookieConsentContainer"
      id="cookieConsentContainer"
    >
      <div className="cookieTitle">
        <a>Cookies</a>
      </div>
      <div className="cookieDesc">
        <p>
          Este site utiliza cookies para te proporcionar uma melhor experiência.
          Ao continuar navegando, você aceita nossa{' '}
          <a href="/privacy-policy/" target="_blank">
            Política de Privacidade
          </a>
        </p>
      </div>
      <div className="cookieButton">
        <button type="button" onClick={handleCookieDimiss}>
          Confirmar
        </button>
      </div>
    </Container>
  );
};

export default CookieConsent;
