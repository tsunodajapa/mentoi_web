import { ReactNode, useEffect, useRef } from 'react';
import { useOnboarding } from '@/shared/hooks/onboarding';

interface OnboardingTemplateProps {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
}

const OnboardingTemplate = ({
  id,
  title,
  description,
  children,
}: OnboardingTemplateProps) => {
  const ref = useRef(null);
  const { addOnboarding } = useOnboarding();

  useEffect(() => {
    addOnboarding({
      id,
      title,
      description,
      component: ref.current,
    });
  }, [addOnboarding, title, description, id]);

  return (
    <div id={id} ref={ref} style={{ padding: '5px', borderRadius: '15px' }}>
      {children}
    </div>
  );
};

export default OnboardingTemplate;
