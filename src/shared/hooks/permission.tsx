import { useAuth } from './auth';

interface usePermissionParams {
  permissions: string[];
}

export function usePermission({ permissions }: usePermissionParams) {
  const { user } = useAuth();

  if (!user) return false;

  const hasPermissions = permissions.some(
    permission => user.permission === permission,
  );

  return hasPermissions;
}
