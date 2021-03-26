import { ModalStyles } from '@/shared/Modal/styles';
import { ItemProps } from '@/shared/Onboarding/styles';
import { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';

export interface OnboardingStep {
  id: string;
  title: string;
  description?: string;
  cardStyles: Omit<ItemProps, 'isVisible'>;
  modalStyles: ModalStyles;
}

interface OnboardingTemplate {
  title: string;
  description?: string;
  component: any;
}

interface OnboardingContextData {
  addOnboarding(step: OnboardingTemplate): void;
  removeOnboarding(id: string): void;
  steps: OnboardingStep[];
}

const OnboardingContext = createContext<OnboardingContextData>(
  {} as OnboardingContextData,
);

const OnboardingProvider: React.FC = ({ children }) => {
  const [steps, setSteps] = useState<OnboardingStep[]>([]);

  const addOnboarding = useCallback(
    ({ title, description, component }: OnboardingTemplate) => {
      const id = uuid();

      const { offsetTop, offsetLeft, clientWidth, clientHeight } = component;

      const width = clientWidth + 5;
      const height = clientHeight + 5;

      const top =
        offsetTop - (height / 2 + offsetTop - (clientHeight / 2 + offsetTop));

      const left =
        offsetLeft -
        (width / 2 + offsetLeft - (clientWidth / 2 + offsetLeft)) +
        8;

      const cardStyles = {
        width,
        height,
        top,
        left,
      };

      const topModal =
        document.body.offsetHeight < top + clientHeight + 160
          ? top - clientHeight + 10
          : top + clientHeight + 10;

      const modalStyles = {
        background: 'none',
        top: topModal,
        left: left + clientWidth - 300,
      };

      const Onboarding = {
        id,
        title,
        description,
        cardStyles,
        modalStyles,
      };

      setSteps(state => [...state, Onboarding]);
    },
    [],
  );

  const removeOnboarding = (id: string) => {
    setSteps(state => state.filter(step => step.id !== id));
  };

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
