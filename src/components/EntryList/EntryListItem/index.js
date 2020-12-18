import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const state = {
  lancamentos: [
    {id: '00', name: 'Padaria Asa Branca: R$ 20,00'},
    {id: '01', name: 'Supermercado Isadora: R$ 250,00'},
    {id: '02', name: 'Posto Ipiranga: R$ 600,00'},
  ],
};

const EntryListItem = () => {
  return (
    <View style={styles.container}>
      {/* Categorias */}
      <Text style={styles.categoria}>Últimos Lançamentos</Text>
      <FlatList
        data={state.lancamentos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <Text style={styles.text}>{item.name}</Text>
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

export default EntryListItem;
