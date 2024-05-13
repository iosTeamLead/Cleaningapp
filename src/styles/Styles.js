import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
    marginLeft: 15,
    marginRight: 15,
  },
  h1: {
    fontSize: 40,
    fontWeight: '700',
  },
  h2: {
    fontSize: 28,
    fontWeight: '400',
    color: '#000',
    lineHeight: 35,
  },
  h3: {
    fontSize: 28,
    fontWeight: '500',
  },
  h4: {
    fontSize: 25,
    fontWeight: '500',
    lineHeight: 30,
  },
  h5: {
    fontSize: 20,
    fontWeight: '500',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
   fontFamily:"Rubik-Italic",
    lineHeight: 20,
    color: '#000',
  },
  btn: {
    fontWeight: '500',
    padding: 15,
    borderRadius: 23,
    backgroundColor: '#fff',
    width: 233,
    height: 62,
  },
  btn1: {
    fontWeight: '500',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 23,
    backgroundColor: '#25435F',
    marginBottom: 15,
  },
  btntext: {
    color: '#25435F',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  btntext1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  btn2: {
    fontWeight: '500',
    padding: 15,
    borderRadius: 23,
    backgroundColor: '#DCDEE0',
    marginTop: 10,
  },
  btntext2: {
    color: '#25435F',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  textfield: {
    borderColor: '#25435F',
    borderRadius: 20,
    borderWidth: 1,
    paddingLeft: 20,
    fontSize: 18,
    marginTop: 10,
  },
  textfield_wrapper: {
    width: '100%',
    marginBottom: 15,
  },
  errortext: {
    color: 'red',
  },
  whitebox: {
    backgroundColor: '#F4F3F3',
    flex: 1,
    borderRadius: 10,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
});
export default styles;
