import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

const Index = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/movies/avengers')
  }

  return (
    <View>
      <Text>Index</Text>
      <Button title='Go to Avengers' onPress={handleClick} />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})