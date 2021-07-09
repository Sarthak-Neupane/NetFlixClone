import { createStore } from "vuex";

export default createStore({
  state: {
    movies: [],
    tv: [],
  },
  mutations: {
    storeMovies(state, payload) {
      payload.forEach((data) => {
        state.movies.push(data);
      });
    },
    storeTv(state, payload) {
      payload.forEach((data) => {
        state.tv.push(data);
      });
    },
  },
  actions: {
    async getMovies(context, payload) {
      const options = {
        headers: {
          "content-type": "application/json;charset=utf-8",
          authorization:
            "Bearer <<eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDAzNTZiM2VhNmE1NTE3MWU1NDIxZjkwMGI2M2FiOSIsInN1YiI6IjYwZTNjNTQ5YjNmNmY1MDAyYzQ2OGJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sr0GDGc-LG43wFiR3NQXMWLR1DjbmlBHSLSrvtWkUEM>>",
        },
      };

      const results = await Promise.all([
        fetch(payload.url1, options),
        fetch(payload.url2, options),
        fetch(payload.url3, options),
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
    getMovies(state) {
      return state.movies;
    },
    getTvs(state) {
      return state.tv;
    },
  },
  modules: {},
});
