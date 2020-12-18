import React from 'react';
import {View, StyleSheet} from 'react-native';
import EntrySummaryChart from '../EntrySummary/EntrySummaryChart/index';
import EntrySummaryList from '../EntrySummary/EntrySummaryList/index';

const EntrySummary = ({entriesCategorias}) => {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList entriesCategorias={entriesCategorias} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default EntrySummary;
