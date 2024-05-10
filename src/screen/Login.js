import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import styles from '../styles/Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialIcons';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);

  //Login handleSubmit function
  const handleSubmit = async values => {
    console.log('values', values);
    navigation.navigate('Home')
  };
  return (
    <>
      <View style={{marginTop: 1}}>
        <Image source={require('../assets/circle1.png')} />
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={values => handleSubmit(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={[styles.h3, {color: '#000'}]}>Sign In</Text>
              <View style={[styles.textfield_wrapper, {marginTop: 30}]}>
                <TextInput
                  placeholder="Email"
                  style={styles.textfield}
                  placeholderTextColor="#000"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errortext}>{errors.email}</Text>
                )}
              </View>
              <View style={styles.textfield_wrapper}>
                <View
                  style={[
                    styles.textfield,
                    {flexDirection: 'row', alignItems: 'center'},
                  ]}>
                  <TextInput
                    placeholder="password"
                    secureTextEntry={!showPassword}
                    placeholderTextColor="#000"
                    style={[
                      styles.textfield,
                      {flex: 1, borderWidth: 0, paddingLeft: 0, marginTop: 0},
                    ]}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={{marginRight: 10}}>
                    <Icon
                      name={showPassword ? 'visibility' : 'visibility-off'}
                      size={30}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errortext}>{errors.password}</Text>
                )}
              </View>
              <TouchableOpacity
                style={[styles.btn1, {marginTop: 20}]}
                onPress={handleSubmit}>
                <Text style={styles.btntext1}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </>
  );
};
export default Login;
