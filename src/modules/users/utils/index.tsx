import { UserStatus } from '~/types';

export const tags = [
  { label: '18-26', minValue: '18', maxValue: '26' },
  { label: '25-31', minValue: '25', maxValue: '31' },
  { label: '30-36', minValue: '30', maxValue: '36' },
  { label: '35-41', minValue: '35', maxValue: '41' },
  { label: '40+', minValue: '40', maxValue: '' },
];

export const translateTextToStatus = (status?: string): UserStatus => {
  switch (status) {
    case 'Ativo':
      return UserStatus.ACTIVE;
    case 'Inativo':
      return UserStatus.INACTIVE;
    default:
      return UserStatus.BLOCKED;
  }
};

export const translateStatusToText = (status?: UserStatus): string => {
  switch (status) {
    case UserStatus.ACTIVE:
      return 'Ativo';
    case UserStatus.INACTIVE:
      return 'Inativo';
    default:
      return 'Bloqueado';
  }
};
