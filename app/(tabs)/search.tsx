import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BasicLayout from '@/components/BasicLayout'
import SearchBar from '@/components/SearchBar'
import { useLocalSearchParams } from 'expo-router'

const search = () => {
  const { focuseIn } = useLocalSearchParams();

  return (
    <BasicLayout>
        <View style={styles.searchBarContainer}>
          <SearchBar placeholder='Search for a movie...' focuseIn={!!focuseIn}/>
        </View>
    </BasicLayout>
  )
}

export default search

const styles = StyleSheet.create({
  searchBarContainer: {
    flex: 1,
    marginTop: 2.5*8,
  }
})