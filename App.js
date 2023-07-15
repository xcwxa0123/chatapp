import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ChatMain from './pages/chatMain';


export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={ChatMain} />
      </Stack.Navigator> */}
      <ChatMain></ChatMain>
    </NavigationContainer>

    // <View style={styles.container}>

    //   {/* <Text>Open up App.js to start working on your app! with test</Text>
    //   <TextInput>test</TextInput>
    //   <StatusBar style="auto" /> */}
    //   <ChatMain></ChatMain>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// 1、报错提示中止
// 2、手动中止
// 3、手动清理历史

// ex、流的分段式传递