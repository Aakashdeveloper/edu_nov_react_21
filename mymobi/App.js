import React,{useState} from 'react';
import Home from './component/Home'
import { StyleSheet, Text, View,Button,Alert } from 'react-native';

function App() {

  const [title, setTitle] = useState('User Text')

  const updateState = () => {
    setTitle('Title Change')
  }

  const revertState = () => {
    setTitle('User Text')
  }
  return (
    <View style={styles.container}>
      <Home/>
      <Text>Developer Funnel</Text>
      <Text>{title}</Text>
      <Button onPress={updateState} title="Change Text"/>
      <Button onPress={revertState} title="Revert Text"/>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    color:'white'
  },
});

export default App;
