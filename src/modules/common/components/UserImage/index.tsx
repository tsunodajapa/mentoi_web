import { Circle } from '@/shared/components/Circle';
import Image from 'next/image';

import Avatar1 from '@/assets/avatar_1.svg';
import Avatar2 from '@/assets/avatar_2.svg';
import Avatar3 from '@/assets/avatar_3.svg';
import Avatar4 from '@/assets/avatar_4.svg';
import Avatar5 from '@/assets/avatar_5.svg';
import Avatar6 from '@/assets/avatar_6.svg';
import Avatar7 from '@/assets/avatar_7.svg';

import { Container } from './styles';

interface UserImageProps {
  avatarUrl: string | undefined;
  name: string;
  color: string;
  size?: number;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
}

const Avatar = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7];

const UserImage = ({
  avatarUrl,
  name,
  color,
  size = 100,
  gender,
}: UserImageProps) => {
  const avatarSize = (85 / 100) * size;

  const AvatarNumber = {
    MALE: () => Math.floor(Math.random() * 3),
    FEMALE: () => Math.floor(Math.random() * 3) + 3,
    OTHER: () => 7,
  }[gender];

  if (avatarUrl) {
    return <Image src={avatarUrl} alt={name} layout="fill" />;
  }

  const AvatarComponent = Avatar[AvatarNumber()];

  return (
    <Container avatarSize={avatarSize}>
      <Circle size={size} color={color} />
      <AvatarComponent />
    </Container>
  );
};

export default UserImage;
