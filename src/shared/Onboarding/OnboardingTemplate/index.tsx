import { ReactNode, useEffect, useRef } from 'react';
import { useOnboarding } from '@/hooks/onboarding';

interface OnboardingTemplateProps {
  children: ReactNode;
}

const OnboardingTemplate = ({ children }: OnboardingTemplateProps) => {
  const ref = useRef(null);
  const { addOnboarding } = useOnboarding();

  useEffect(() => {
    addOnboarding({
      title: 'Alertas',
      description: 'teste',
      component: ref.current,
    });
  }, [addOnboarding]);

  return <div ref={ref}>{children}</div>;
};

export default OnboardingTemplate;
