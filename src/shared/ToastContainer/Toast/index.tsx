import { useEffect, useState } from 'react';
import {
  FiAlertCircle,
  FiXCircle,
  FiInfo,
  FiCheckCircle,
} from 'react-icons/fi';

import { Container } from './styles';
import { ToastMessage, useToast } from '../../../hooks/toast';

interface ToastProps {
  message: ToastMessage;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();
  const [isRemove, setIsRemove] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isRemove) {
      timer = setTimeout(() => {
        removeToast(message.id);
      }, 700);
    } else {
      timer = setTimeout(() => {
        setIsRemove(true);
      }, 500000);
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
