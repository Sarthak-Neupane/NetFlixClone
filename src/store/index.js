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
    tv: {
      airingToday: [],
      onTheAir: [],
      popular: [],
      topRated: [],
      originals: [],
    },
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
      Object.entries(state.tv).forEach((value, index) =>
        payload[index].results.forEach((data) => {
          value[1].push(data);
        })
      );
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

      context.commit("storeMovies", data);
    },
    async getTV(context, payload) {
      context.state.tv.onTheAir = [];
      context.state.tv.airingToday = [];
      context.state.tv.popular = [];
      context.state.tv.topRated = [];
      context.state.tv.originals = [];
      const options = {
        headers: {
          "content-type": "application/json;charset=utf-8",
          authorization:
            "Bearer <<eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDAzNTZiM2VhNmE1NTE3MWU1NDIxZjkwMGI2M2FiOSIsInN1YiI6IjYwZTNjNTQ5YjNmNmY1MDAyYzQ2OGJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sr0GDGc-LG43wFiR3NQXMWLR1DjbmlBHSLSrvtWkUEM>>",
        },
      };

      const results = await Promise.all([
        fetch(payload.airingToday, options),
        fetch(payload.onTheAir, options),
        fetch(payload.popular, options),
        fetch(payload.topRated, options),
        fetch(payload.originals, options),
      ]);

      const dataPromises = results.map((res) => res.json());

      const data = await Promise.all(dataPromises);

      context.commit("storeTv", data);
    },
  },
  getters: {
    getMoviesDiscover(state) {
      // return state.movies.discover;
      return { name: "Discover", datas: state.movies.discover };
    },
    getMoviesUpcoming(state) {
      // return state.movies.upcoming;
      return {
        name: "Upcoming",
        datas: state.movies.upcoming,
      };
    },
    getMoviesPopularity(state) {
      // return state.movies.popularity;
      return {
        name: "Popular",
        datas: state.movies.popularity,
      };
    },
    getMoviesToprated(state) {
      // return state.movies.topRated;
      return {
        name: "Top Rated",
        datas: state.movies.topRated,
      };
    },
    getMoviesinTheatres(state) {
      // return state.movies.inTheatres;
      return {
        name: "In Theatres",
        datas: state.movies.inTheatres,
      };
    },
    getMoviesTrending(state) {
      // return state.movies.trending;
      return {
        name: "Trending",
        datas: state.movies.trending,
      };
    },
    getTvAiringToday(state) {
      return {
        name: "Airing Today",
        datas: state.tv.airingToday,
      };
    },
    getTvAiring(state) {
      return {
        name: "On The Air",
        datas: state.tv.onTheAir,
      };
    },
    getTvPopular(state) {
      return {
        name: "Popular on ChillFlix",
        datas: state.tv.popular,
      };
    },
    getTvTopRated(state) {
      return {
        name: "Top Rated",
        datas: state.tv.topRated,
      };
    },
    getTvOriginal(state) {
      return {
        name: "ChillFlix Orginals",
        datas: state.tv.originals,
      };
    },
  },
});
