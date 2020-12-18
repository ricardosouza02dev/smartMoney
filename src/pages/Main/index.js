import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import BalancePanel from '../../components/BalancePanel/index';
import EntrySummary from '../../components/EntrySummary/index';
import EntryList from '../../components/EntryList/index';

const entriesCategorias = [
  {id: '00', description: 'Alimentação', amount: 200},
  {id: '01', description: 'Combustível', amount: 250},
  {id: '02', description: 'Aluguel', amount: 600},
  {id: '03', description: 'Outros', amount: 1200},
];

const entrieLancamentos = [
  {id: '00', description: 'Padaria Asa Branca', amount: 20},
  {id: '01', description: 'Supermercado Isadora', amount: 250},
  {id: '02', description: 'Posto Ipiranga', amount: 600},
];

const Main = ({navigation}) => {
  const currentBalance = 2567.994;
  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary entriesCategorias={entriesCategorias} />
      <EntryList entrieLancamentos={entrieLancamentos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Main;
