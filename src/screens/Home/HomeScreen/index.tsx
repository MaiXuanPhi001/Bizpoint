import { mainStackParamList } from '@/navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface CustomerDetailScreenProps extends NativeStackScreenProps<mainStackParamList, 'HomeScreen'> {}
const HomeScreen: React.FC<CustomerDetailScreenProps> = ({ navigation }) => {
  return <></>;
};

export default HomeScreen;
