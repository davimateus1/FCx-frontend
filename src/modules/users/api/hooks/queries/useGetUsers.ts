import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { getUsers } from '../../requests';
import { User } from '~/types';

export type UseGetUsersParams = {
  search?: string;
  minAge?: string;
  maxAge?: string;
  status?: string;
  date?: string;
} & UseQueryOptions<Array<User>, unknown>;

export const useGetUsers = ({
  search,
  minAge,
  maxAge,
  status,
  date,
  ...rest
}: UseGetUsersParams) => {
  return useQuery({
    queryFn: () =>
      getUsers({
        config: {
          params: {
            search,
            minAge,
            maxAge,
            ...(status && { status }),
            ...(date && { date }),
          },
        },
      }),
    queryKey: ['users', search, minAge, maxAge, status, date],
    ...rest,
  });
};
