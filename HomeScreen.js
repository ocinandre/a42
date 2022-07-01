import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
            this.goToBuzzerScreen('red');
          }}>
          <Text style={styles.buttonText}>SI</Text>
        </TouchableOpacity>

        

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.goToBuzzerScreen('blue');
          }}>
          <Text style={styles.buttonText}>NO</Text>
        </TouchableOpacity>

      
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 100,
    marginTop: 50,
    width: 200,
    height: 200,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 100
  },
});
