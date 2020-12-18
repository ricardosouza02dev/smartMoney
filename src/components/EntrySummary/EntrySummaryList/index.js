import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const EntrySummaryList = ({entriesCategorias}) => {
  return (
    <View style={styles.container}>
      {/* Categorias */}
      <Text style={styles.categoria}>Categorias</Text>
      <FlatList
        data={entriesCategorias}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <Text style={styles.text}>
                - {item.description} - R${item.amount}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default EntrySummaryList;
