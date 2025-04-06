import { Image, StyleSheet, Text, View, } from 'react-native'
import React, { useEffect } from 'react'
import { useFocusEffect, useRouter } from 'expo-router'
import { images } from '@/constants/images'
import SearchBar from '@/components/SearchBar'
import BasicLayout from '@/components/BasicLayout'
import useMovieFetch from '@/hooks/useMovieFetch'
import { FlatList } from 'react-native-gesture-handler'

const Index = () => {
  const {movies,isPending,error,refetch} = useMovieFetch()
  const router = useRouter()

  useEffect(() => {
    refetch()
  },[])
  console.log("Movies: "+ movies?.length)
  
  return (
    <BasicLayout>
      <Image source={images.logo} style={styles.logo} />
        <View style={styles.searchBarContainer}>
          <SearchBar onPress={() => {router.push("/search"); router.setParams({focuseIn: 1})}} placeholder='Search for a movie...'/>
        </View>
    </BasicLayout>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 6*8,
    height: 5*8,
    resizeMode: 'contain',
    marginTop: 5*8,
    marginBottom: 2.5*8,
    marginHorizontal: "auto"
  },
  searchBarContainer: {
    flex: 1,
    marginTop: 2.5*8,
  },
  trendingContainer: {
    flex: 1,
    marginTop: 2.5*8,
  }
})

export default Index;
