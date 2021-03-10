import { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

export interface OnboardingStep {
  id: string;
  title: string;
  description?: string;
  component: any;
}

interface OnboardingContextData {
  addOnboarding(step: Omit<OnboardingStep, 'id'>): void;
  removeOnboarding(id: string): void;
  steps: OnboardingStep[];
}

const OnboardingContext = createContext<OnboardingContextData>(
  {} as OnboardingContextData,
);

const OnboardingProvider: React.FC = ({ children }) => {
  const [steps, setSteps] = useState<OnboardingStep[]>([]);

  const addOnboarding = useCallback(
    ({ title, description, component }: Omit<OnboardingStep, 'id'>) => {
      const id = uuid();

      const Onboarding = {
        id,
        title,
        description,
        component,
      };

      setSteps(state => [...state, Onboarding]);
    },
    [],
  );

  const removeOnboarding = useCallback((id: string) => {
    setSteps(state => state.filter(step => step.id !== id));
  }, []);

  return (
    <OnboardingContext.Provider
      value={{ addOnboarding, removeOnboarding, steps }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

function useOnboarding(): OnboardingContextData {
  const context = useContext(OnboardingContext);

  return context;
}

export { OnboardingProvider, useOnboarding };
