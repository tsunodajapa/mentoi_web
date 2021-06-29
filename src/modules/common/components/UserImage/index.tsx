import { Circle } from '@/shared/components/Circle';
import Image from 'next/image';

interface UserImageProps {
  avatarUrl: string | undefined;
  name: string;
  color: string;
  size?: number;
}

const UserImage = ({ avatarUrl, name, color, size = 100 }: UserImageProps) => {
  if (avatarUrl) {
    return <Image src={avatarUrl} alt={name} layout="fill" />;
  }

  return <Circle size={size} color={color} />;
};

export default UserImage;
