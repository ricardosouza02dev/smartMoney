import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  label: {
    fontSize: 20,
  },
  value: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default BalancePanelLabel;
