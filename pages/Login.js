/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  Button,
  Layout,
  Input,
  Icon,
  Text,
  Card,
} from '@ui-kitten/components';

const Login = ({navigation}) => {
  const navigateRegister = () => {
    navigation.navigate('Register');
  };

  const [value, setValue] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  // const toggleSecureEntry = () => {
  //   setSecureTextEntry(!secureTextEntry);
  // };

  // const renderIcon = (props) => (
  //   <TouchableWithoutFeedback onPress={toggleSecureEntry}>
  //     <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
  //   </TouchableWithoutFeedback>
  // );
const AlertIcon = (props) => (
  <Icon {...props} name="alert-circle-outline"/>
);


  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.container}>
      <Layout style={styles.header} />
       <Text style={styles.judul}>
          ION APPS
        </Text>
        <Text style={styles.name}>
          Please Enter Your Username and Password to Login !
        </Text>
      </Layout>
      <Layout style={styles.body}>
       <Card style={styles.card}>
        <Input
          style={styles.input}
          label="Username"
          placeholder="Place your Text"
          value={value}
          onChangeText={nextValue => setValue(nextValue)}
        />
        <Input
          style={styles.input}
          value={password}
          label="Password"
          placeholder="Input your password"
          caption="Should contain at least 8 symbols"
      // accessoryRight={renderIcon}
          captionIcon={AlertIcon}
      // secureTextEntry={secureTextEntry}
          onChangeText={nextValue => setPassword(nextValue)}
        />
        <Button style={styles.button} onPress={navigateRegister}>Login</Button>
        <Button style={styles.button} onPress={navigateRegister}>Register</Button>
        </Card>
      </Layout>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#000000',
    justifyContent: 'center',
    textAlign: 'center',
  },
  header:{
    backgroundColor: '#00BFFF',
    height:250,
  },
  card:{
    backgroundColor: '#bcb9c9',
    alignItems: 'center',
    marginTop:-75,
    marginRight:20,
    marginLeft:20,
    height:400,
    width:350,
    borderRadius:20,
  },
  judul:{
    fontSize:30,
    color:'#050505',
    fontWeight:'600',
    position: 'absolute',
    marginTop:80,
    alignSelf:'center',
  },
  name:{
    fontSize:14,
    color:'#050505',
    fontWeight:'600',
    position: 'absolute',
    marginTop:130,
    alignSelf:'center',
  },
  container:{
    backgroundColor: '#FFF',
    height:250,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  body: {
    width:'100%',
    height:'80%',
    alignItems: 'center',
  },
  input:{
    width:300,
    margin:10,
  },
  button:{
    width:300,
    margin:10,
    justifyContent: 'center',
  },

});

export default Login;
