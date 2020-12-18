import {getRealm} from './Realm';
import {Alert} from 'react-native';

export const saveEntry = async (value) => {
  const realm = await getRealm();
  let data = {};
  const {amount} = value;

  try {
    realm.write(() => {
      data = {
        id: null,
        amount: amount,
        entryAt: new Date(),
        isInit: false,
      };
      realm.create('Entry', data, true);
    });
    console.error('saveEntry :: error on save object: ', JSON.stringify(data));
  } catch (error) {
    console.error('saveEntry :: error on save object: ', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados de lançamento.', JSON.stringify(data));
  }
  return data;
};
