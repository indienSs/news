import {ReactNode} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface INewsFullInfo {
  children: ReactNode;
}

export default function NewsFullInfo({children}: INewsFullInfo) {
  return (
    <View style={styles.PageLayout}>
      <Text>Single news</Text>
    </View>
  );
}
