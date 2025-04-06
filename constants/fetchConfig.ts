export const TMDB_CONFIG = {
  method: 'GET',
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMBD_API_KEY}`,
  },
};