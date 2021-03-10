import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { OnboardingProvider } from './onboarding';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <OnboardingProvider>
        <ToastProvider>{children}</ToastProvider>
      </OnboardingProvider>
    </AuthProvider>
  );
};

export default AppProvider;
