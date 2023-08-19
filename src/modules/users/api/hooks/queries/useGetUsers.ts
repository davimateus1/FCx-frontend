import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { getUsers } from '../../requests';
import { User } from '~/types';

export type UseGetUsersParams = {
  search?: string;
  minAge?: string;
  maxAge?: string;
  status?: string;
  date?: string;
  page?: number;
} & UseQueryOptions<
  {
    users: Array<User>;
    totalPages: number;
  },
  unknown
>;

export const useGetUsers = ({
  search,
  minAge,
  maxAge,
  status,
  date,
  page,
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
            ...(page && { page }),
          },
        },
      }),
    queryKey: ['users', search, minAge, maxAge, status, date, page],
    ...rest,
  });
};
