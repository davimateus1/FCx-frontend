import { UserStatus } from '~/types';

export const tags = [
  { label: '18-26', minValue: '18', maxValue: '26' },
  { label: '25-31', minValue: '25', maxValue: '31' },
  { label: '30-36', minValue: '30', maxValue: '36' },
  { label: '35-41', minValue: '35', maxValue: '41' },
  { label: '40+', minValue: '40', maxValue: '' },
];

export const translateStatus = (status?: string) => {
  switch (status) {
    case 'active':
      return 'Ativo';
    case 'inactive':
      return 'Inativo';
    case 'blocked':
      return 'Bloqueado';
    case 'Ativo':
      return UserStatus.ACTIVE;
    case 'Inativo':
      return UserStatus.INACTIVE;
    case 'Bloqueado':
      return UserStatus.BLOCKED;
    default:
      return '';
  }
};
