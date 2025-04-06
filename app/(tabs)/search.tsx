import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import BasicLayout from "@/components/BasicLayout";
import SearchBar from "@/components/SearchBar";
import useMovieFetch from "@/hooks/useMovieFetch";
import MovieLister from "@/components/MovieLister";
import Logo from "@/components/Logo";
import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import useDebouncedState from "@/hooks/useDebouncedState";

const search = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedState(query, 1000);
  const { movies, isPending, error, refetch } = useMovieFetch(debouncedQuery);

  const renderSearchLabel = useMemo(() => 
    query.trim().length > 0 ? (
      <Text style={styles.title}>
        Search results for: "
        <Text style={{ color: colors.accent }}>{query}</Text>"
      </Text>
    ) : (
      <Text style={styles.title}>Search for a movie...</Text>
    )
  , [query]);

  const renderSearching = useMemo(
    () =>
      error ? (
        <Text style={styles.title}>
          Something went wrong:{"\n"} {error.message}
        </Text>
      ) : isPending ? (
        <ActivityIndicator
          size={"large"}
          color={colors.accent}
          style={{ marginVertical: 12 }}
        />
      ) : null,
    [movies, isPending, error]
  );

  return (
    <BasicLayout>
      <MovieLister //Trying out the Flatlist component properties is the reason, that these are not seperate components
        movies={movies as Movie[]}
        scrollable
        style={{ paddingHorizontal: 20 }}
        ListHeaderComponent={
          <>
            <Logo />
            <View>
              <SearchBar value={query} onChange={setQuery} focuseIn={true}/>
              {renderSearchLabel}
              {renderSearching}
            </View>
          </>
        }
        ListHeaderComponentStyle={{ gap: 20 }}
        ListEmptyComponent={
          <>
            {!isPending && !error && (
              <View style={styles.notFoundContainer}>
                <View style={styles.notFoundImageContainer}>
                    <Ionicons name="search" size={24} color={colors.primary} />
                </View>
                <Text style={styles.notFound}>No movies were found...</Text>
              </View>
            )}
          </>
        }
      />
    </BasicLayout>
  );
};

export default search;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginVertical: 24,
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 24,
  },
  notFoundImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: colors.light_300,
    justifyContent: "center",
    alignItems: "center",
  },
  notFound: {
    fontSize: 16,
    color: colors.light_300,
    fontWeight: "bold",
    marginVertical: 24,
    textAlign: "center",
  },
});
