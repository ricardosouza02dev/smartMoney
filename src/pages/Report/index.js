import React from 'react';
import {View, StyleSheet, Picker, Button} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

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

const Report = () => {
  const currentBalance = 300.76;
  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />
      <View>
        <Picker>
          <Picker.Item label="Todas as Categorias" />
        </Picker>

        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary entriesCategorias={entriesCategorias} />
      <EntryList entrieLancamentos={entrieLancamentos} />
      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Report;
