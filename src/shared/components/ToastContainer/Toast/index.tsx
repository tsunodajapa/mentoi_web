import { useEffect, useState } from 'react';
import {
  FiAlertCircle,
  FiXCircle,
  FiInfo,
  FiCheckCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '@/shared/hooks/toast';
import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast = ({ message }: ToastProps) => {
  const { removeToast } = useToast();
  const [isRemove, setIsRemove] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isRemove) {
      timer = setTimeout(() => {
        removeToast(message.id);
      }, message.time);
    } else {
      timer = setTimeout(() => {
        setIsRemove(true);
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, isRemove, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={Number(!!message.description)}
      isRemove={isRemove}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => setIsRemove(true)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
