import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { getUser } from '../../requests';
import { User } from '~/types';

export type UseGetUserParams = {
  id: number;
} & UseQueryOptions<User, unknown>;

export const useGetUser = ({ id, ...rest }: UseGetUserParams) => {
  return useQuery({
    queryFn: () => getUser({ id }),
    queryKey: ['users', id],
    ...rest,
  });
};
