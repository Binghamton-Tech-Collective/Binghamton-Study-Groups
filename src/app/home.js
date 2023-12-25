import { View, Text } from 'react-native';
import ArrowButton from '../components/functional/ArrowButton'


const home = () => {
  return (
    <View>
      <Text>
        Hello World
      </Text>
      <ArrowButton text="arrow button text" />
    </View>
  );
};
export default home;
