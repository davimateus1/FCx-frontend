import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { getUsers } from '../../requests';
import { User } from '~/types';

export type UseGetUsersParams = {
  search?: string;
  minAge?: string;
  maxAge?: string;
  status?: string;
  date?: { from: string; to: string };
  page?: number;
} & UseQueryOptions<{ users: Array<User>; totalPages: number }, unknown>;

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
            ...(search && { search }),
            ...(minAge && { minAge }),
            ...(maxAge && { maxAge }),
            ...(status && { status }),
            ...(date?.from && { from: date?.from }),
            ...(date?.to && { to: date?.to }),
            ...(page && { page }),
          },
        },
      }),
    queryKey: ['users', search, minAge, maxAge, status, date?.from, date?.to, page],
    ...rest,
  });
};
