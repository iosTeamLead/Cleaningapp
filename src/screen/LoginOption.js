import {View, Text, Image, SafeAreaView} from 'react-native';
import styles from '../styles/Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginOption = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{marginTop: 1}}>
        <Image source={require('../assets/circle1.png')} />
      </View>
      <View style={styles.container}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../assets/loginoption-img.png')}
            style={{height: '90%', width: '100%', resizeMode: 'contain'}}
          />
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btntext1}>Sign in as Services Provider</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.btntext2}>Sign in as Customer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginOption;
