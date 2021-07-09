import { createStore } from "vuex";

export default createStore({
  state: {
    movies: {
      discover: [],
      upcoming: [],
      popularity: [],
      topRated: [],
      inTheatres: [],
      trending: [],
    },
    tv: [],
  },
  mutations: {
    storeMovies(state, payload) {
      Object.entries(state.movies).forEach((value, index) =>
        payload[index].results.forEach((data) => {
          value[1].push(data);
        })
      );
    },
    storeTv(state, payload) {
      payload.forEach((data) => {
        state.tv.push(data);
      });
    },
  },
  actions: {
    async getMovies(context, payload) {
      context.state.movies.discover = [];
      context.state.movies.upcoming = [];
      context.state.movies.popularity = [];
      context.state.movies.topRated = [];
      context.state.movies.inTheatres = [];
      context.state.movies.trending = [];
      const options = {
        headers: {
          "content-type": "application/json;charset=utf-8",
          authorization:
            "Bearer <<eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDAzNTZiM2VhNmE1NTE3MWU1NDIxZjkwMGI2M2FiOSIsInN1YiI6IjYwZTNjNTQ5YjNmNmY1MDAyYzQ2OGJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sr0GDGc-LG43wFiR3NQXMWLR1DjbmlBHSLSrvtWkUEM>>",
        },
      };

      const results = await Promise.all([
        fetch(payload.discover, options),
        fetch(payload.upcoming, options),
        fetch(payload.popular, options),
        fetch(payload.topRated, options),
        fetch(payload.inTheatres, options),
        fetch(payload.trending, options),
      ]);

      const dataPromises = results.map((res) => res.json());

      const data = await Promise.all(dataPromises);

      if (payload.type === "tv") {
        context.commit("storeTv", data);
      } else if (payload.type === "movie") {
        context.commit("storeMovies", data);
      }
    },
  },
  getters: {
    getMoviesDiscover(state) {
      return state.movies.discover;
    },
    getMoviesUpcoming(state) {
      return state.movies.upcoming;
    },
    getMoviesPopularity(state) {
      return state.movies.popularity;
    },
    getMoviesToprated(state) {
      return state.movies.topRated;
    },
    getMoviesinTheatres(state) {
      return state.movies.inTheatres;
    },
    getMoviesTrending(state) {
      return state.movies.trending;
    },
    getOneMovie(state) {
      if (state.movies.discover !== undefined) {
        return state.movies.discover[0];
      } else {
        return "";
      }
    },
  },
  modules: {},
});
