import { ReactNode, useEffect, useRef } from 'react';
import { useOnboarding } from '@/shared/hooks/onboarding';

interface OnboardingTemplateProps {
  title: string;
  description: string;
  children: ReactNode;
}

const OnboardingTemplate = ({
  title,
  description,
  children,
}: OnboardingTemplateProps) => {
  const ref = useRef(null);
  const { addOnboarding } = useOnboarding();

  useEffect(() => {
    addOnboarding({
      title,
      description,
      component: ref.current,
    });
  }, [addOnboarding, title, description]);

  return <div ref={ref}>{children}</div>;
};

export default OnboardingTemplate;
