import { createStore } from "vuex";
import firebase from "firebase/app";
import "firebase/auth";

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
    home: {
      VoteHigh: [],
      VoteHighSecond: [],
      topRated: [],
      topRatedTv: [],
    },
    tv: {
      airingToday: [],
      onTheAir: [],
      popular: [],
      topRated: [],
      originals: [],
    },
    user: null,
    error: null,
    stored: null,
    genres: null,
  },
  mutations: {
    storeGenre(state, payload) {
      state.genres = payload;
      // console.log(state.genres);
    },
    storeMovies(state, payload) {
      Object.entries(state.movies).forEach((value, index) =>
        payload[index].results.forEach((data) => {
          if (data.backdrop_path && data.poster_path) {
            value[1].push(data);
          }
        })
      );
    },
    storeHome(state, payload) {
      Object.entries(state.home).forEach((value, index) =>
        payload[index].results.forEach((data) => {
          if (data.backdrop_path && data.poster_path) {
            value[1].push(data);
          }
        })
      );
    },
    storeTv(state, payload) {
      Object.entries(state.tv).forEach((value, index) =>
        payload[index].results.forEach((data) => {
          if (data.backdrop_path && data.poster_path) {
            value[1].push(data);
          }
        })
      );
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
      if (payload !== null) {
        // console.log(payload);
      } else {
        // console.log("error aayena");
      }
    },
    // storeList(state, payload) {
    //   state.stored.push(payload);
    // },
    storeData(state, payload) {
      state.stored = payload;
      // console.log(state.stored)
    },
  },
  actions: {
    storeGenres(context, payload) {
      // console.log(payload);
      const obj = [];
      payload.forEach((item) => {
        obj.push(item);
      });
      context.commit("storeGenre", obj);
    },
    async getHome(context, payload) {
      context.state.home.VoteHigh = [];
      const options = {
        headers: {
          "content-type": "application/json;charset=utf-8",
          authorization:
            "Bearer <<eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDAzNTZiM2VhNmE1NTE3MWU1NDIxZjkwMGI2M2FiOSIsInN1YiI6IjYwZTNjNTQ5YjNmNmY1MDAyYzQ2OGJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sr0GDGc-LG43wFiR3NQXMWLR1DjbmlBHSLSrvtWkUEM>>",
        },
      };

      const results = await Promise.all([
        fetch(payload.Votehigh, options),
        fetch(payload.VotehighSecond, options),
        fetch(payload.topRated, options),
        fetch(payload.topRatedTv, options),
      ]);

      const dataPromises = results.map((res) => res.json());

      const data = await Promise.all(dataPromises);

      context.commit("storeHome", data);
    },

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

    authAction({ commit }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          commit("setUser", user);
        } else {
          commit("setUser", null);
        }
      });
    },
    async signUpAction({ commit }, payload) {
      commit("setError", null);
      return firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
         //
        })
        .catch((error) => {
          console.log(error);
          commit("setError", error.message);
        });
    },
     signOutAction({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
        })
        .catch((error) => {
          console.log(error);
          commit("setError", error.message);
        });
    },

    async signInAction({ commit }, payload) {
      commit("setError", null);
      return firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          // commit("setUser", response);
        })
        .catch((error) => {
          console.log(error.message);
          commit("setError", error.message);
        });
    },

    // autoLogin(context) {
    //   const userExists = localStorage.getItem("user");
    //   if (userExists) {
    //     context.commit("setUser", userExists);
    //   }
    // },

    async storeList(context, payload) {
      const response = await fetch(
        `https://netflixclonefirst-default-rtdb.firebaseio.com/list/${context.state.user.uid}.json`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: payload.id,
            title: payload.title,
            poster: payload.poster,
            mediaType: payload.mediaType,
          }),
        }
      );
      if (response.ok) {
        //
      } else {
        throw new Error("Couldnt save data");
      }
    },
    async removeList(context, payload) {
      // console.log(payload);
      const response = await fetch(
        `https://netflixclonefirst-default-rtdb.firebaseio.com/list/${context.state.user.uid}.json`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        // console.log(responseData);
        let mainKey;

        for (const [key, value] of Object.entries(responseData)) {
          // console.log(`${key}: ${value.id}`);
          // console.log(typeof payload)
          // console.log(typeof value)
          if (payload == value.id) {
            // console.log("milyo");
            mainKey = key;
          }
        }

        // console.log(mainKey);

        await fetch(
          `https://netflixclonefirst-default-rtdb.firebaseio.com/list/${context.state.user.uid}/${mainKey}.json`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        );

        // for (let key in responseData) {
        //   if (responseData[key].id == payload.id) {
        //     await fetch(
        //       `https://netflixclonefirst-default-rtdb.firebaseio.com/list/${context.state.user.uid}/${responseData[key].id}.json`,
        //       {
        //         method: "DELETE",
        //         headers: { "Content-Type": "application/json" },
        //       }
        //     );
        //   }
        // }
      } else {
        throw new Error("Couldnt save data");
      }
    },
    async getList(context) {
      const response = await fetch(
        `https://netflixclonefirst-default-rtdb.firebaseio.com/list/${context.state.user.uid}.json`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        const items = [];

        for (let key in responseData) {
          let item = responseData[key];
          const obj = {
            genres: item.genres,
            id: item.id,
            mediaType: item.mediaType,
            title: item.title,
            poster: item.poster,
          };
          items.push(obj);
        }
        context.commit("storeData", items);
      } else {
        throw new Error("Couldnt Get data");
      }
    },
  },
  getters: {
    getMoviesDiscover(state) {
      // return state.movies.discover;
      return { name: "Discover More on ChillFlix", datas: state.movies.discover };
    },
    getMoviesUpcoming(state) {
      // return state.movies.upcoming;
      return {
        name: "Upcoming Movies on Chillflix",
        datas: state.movies.upcoming,
      };
    },
    getMoviesPopularity(state) {
      // return state.movies.popularity;
      return {
        name: "Popular on Chillfilx",
        datas: state.movies.popularity,
      };
    },
    getMoviesToprated(state) {
      // return state.movies.topRated;
      return {
        name: "Top Rated on Chillflix",
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
        name: "Trending on Chillflix",
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
        name: "Popular on Chillflix",
        datas: state.tv.popular,
      };
    },
    getTvTopRated(state) {
      return {
        name: "Top Rated on Chillflix",
        datas: state.tv.topRated,
      };
    },
    getTvOriginal(state) {
      return {
        name: "Chillflix Orginals",
        datas: state.tv.originals,
      };
    },
    getUser(state) {
      return state.user;
    },
    isUserAuth(state) {
      return !!state.user;
    },
    getError(state) {
      return state.error;
    },
    getStoredMovies(state) {
      return state.stored;
    },
    getGenres(state) {
      return state.genres;
    },
    getHomeVoteHigh(state) {
      return {
        name: "Chillflix Originals",
        datas: state.home.VoteHigh,
      };
    },
    VoteHighSecond(state) {
      return {
        name: "Top Grossing Movies on Chillflix",
        datas: state.home.VoteHighSecond,
      };
    },
    getHomeTopRatedMovie(state) {
      return {
        name: "Top Rated Movies on Chillflix",
        datas: state.home.topRated,
      };
    },
    getHometopRatedTv(state) {
      return {
        name: "Top Rated TV Shows on Chillflix",
        datas: state.home.topRatedTv,
      };
    },
  },
});
