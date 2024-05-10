import {useNavigation, useRoute} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({title}) => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={{backgroundColor:'#eee',height: 60, padding: 5}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu-open" size={35} color="#000" />
        </TouchableOpacity>
        {route.name !== 'CarNumberPlate' && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={35} color="#000" />
          </TouchableOpacity>
        )}
        <View>
          <Text style={styles.heading}>{title}</Text>
        </View>
        {route.name !== 'CarDetails' && (
          <TouchableOpacity onPress={() => navigation.navigate('CarDetails')}>
            <Icon name="qr-code-scanner" size={40} color="#000" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
