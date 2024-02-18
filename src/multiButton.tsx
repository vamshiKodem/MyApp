import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

interface ListProps {
  id: number;
  isTouched: boolean;
}

const data: ListProps[] = [
  {id: 1, isTouched: false},
  {id: 2, isTouched: false},
  {id: 3, isTouched: false},
  {id: 4, isTouched: false},
  {id: 5, isTouched: false},
];

export const MultiButton = () => {
  const [list, setList] = useState<ListProps[]>(data);

  const onButtonPress = (id: number) => {
    const newData = list.map(list => {
      if (list.id === id) {
        return {
          ...list,
          isTouched: !list.isTouched,
        };
      }
      return list;
    });
    setList(newData);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={({id}) => id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[styles.button, item.isTouched ? styles.greenButton : null]}
            onPress={() => onButtonPress(item.id)}>
            <Text>{item.id}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  button: {
    backgroundColor: 'black',
    height: 40,
    marginBottom: 5,
    width: '100%',
  },
  container: {
    width: '100%',
  },
  // eslint-disable-next-line react-native/no-color-literals
  greenButton: {
    backgroundColor: 'green',
  },
});
