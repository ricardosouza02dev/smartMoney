import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
//import EntryListItem from './EntryListItem/index';

const EntryList = ({entrieLancamentos}) => {
  return (
    <View style={styles.container}>
      <Text>Últimos lançamentos</Text>
      <FlatList
        data={entrieLancamentos}
        renderItem={({item}) => (
          <Text>
            - {item.description} R${item.amount}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default EntryList;
