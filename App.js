import React, {useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import LanguageItem from './LanguageItem';

const languages = [
  { id: '1', lang: 'JavaScript', experience: 4 },
  { id: '2', lang: 'Python', experience: 2 },
  { id: '3', lang: 'Java', experience: 3 },
  { id: '4', lang: 'C++', experience: 5 },
  { id: '5', lang: 'Ruby', experience: 1 },
];

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
      <View style={styles.container}>
        <FlatList
            data={languages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <LanguageItem language={item} />}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
});
