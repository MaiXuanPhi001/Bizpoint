import { lightColors } from '@/theme/colors';

type customerType = {
  [x: string]: { name: string; color: string };
};

export const customerType: customerType = {
  ORGANIZATION: { name: 'Doanh nghiệp', color: lightColors.orange },
  PERSONAL: { name: 'Cá nhân', color: lightColors.primary },
  LEADS: { name: 'Walk in', color: lightColors.green },
};
