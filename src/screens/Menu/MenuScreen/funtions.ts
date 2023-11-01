import FeedBack from '../Feedback';
import {
  IconPen,
  IconB,
  IconE,
  IconMessage,
  IconTick,
  IconVR,
  IconPlus,
  IconSearch,
  IconSetting,
} from '@/assets/images/app';
import Instruct from '../Instruct';

export const ListMenu = [
  {
    id: 1,
    title: 'Chỉnh sửa thông tin',
    icon: IconPen,
  },
  {
    id: 2,
    title: 'VR shop đã visit',
    icon: IconVR,
  },
  {
    id: 3,
    title: 'Bạn bè đã giới thiệu',
    icon: IconB,
  },
  {
    id: 4,
    title: 'Nhập mã giới thiệu',
    icon: IconPlus,
  },
  {
    id: 5,
    title: 'Cài đặt',
    icon: IconSetting,
  },
  {
    id: 6,
    title: 'Ngôn ngữ',
    icon: IconE,
  },
  {
    id: 7,
    title: 'Lịch sử giao dịch',
    icon: IconSearch,
  },
  {
    id: 8,
    title: 'Hướng dẫn',
    comps: Instruct,
    icon: IconTick,
  },
  {
    id: 9,
    title: 'Gửi phản hồi',
    icon: IconMessage,
  },
];
