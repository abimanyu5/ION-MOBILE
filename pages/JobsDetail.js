/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  Divider,
  Button,
  Card,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

const BackIcon = props => <Icon {...props} name="arrow-back" />;

const JobsDetail = ({route, navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  const {id, job} = route.params;

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="Job Details"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={styles.container}>
        <Card style={styles.cardTitle}>
          <Text category="h2">{job}</Text>
        </Card>
        <Card style={styles.cardSub}>
          <Text category="h4">Job Description</Text>
        </Card>

        <Layout style={styles.containerBody}>
        <Card style={styles.cardBody}>
          <Text category="h6">
            A JavaScript function is a block of code designed to perform a
            particular task. The main advantages of using functions: Code reuse:
            Define the code once, and use it many times. Use the same code many
            times with different arguments, to produce different results.
          </Text>
        </Card>
        <Button style={styles.button} appearance="outline" status="primary">
          APPLY
        </Button>
          </Layout>
        </Layout>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },containerBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
  },
  cardTitle: {
    flex: 0,
    margin: 0,
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    backgroundColor: '#5a6be8',
  },
  cardSub: {
    flex: 0,
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    backgroundColor: '#f2f7f5',
  },
  cardBody: {
    flex: 3,
    margin: 0,
  },
  button: {
    margin: 15,
    width: 370,
    height: 60,
  },
});
export default JobsDetail;
