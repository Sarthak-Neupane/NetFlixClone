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
    tv: {
      airingToday: [],
      onTheAir: [],
      popular: [],
      topRated: [],
      originals: [],
    },

    // store: {
    //   userID: 'a1',
    //   id: null,
    //   title: null,
    //   mediaType: null,
    //   genre: [],
    // },

    user: null,
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
    // userSigned(state, payload) {
    //   state.user = payload;
    // },
    userLogged(state) {
      state.user = firebase.auth().currentUser;
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
    signup(_, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: payload.firstName + payload.lastName,
            })
            .then(() => {
              console.log("signed in");
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    },

    // authChange(context) {
    //   firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //       context.state.user = user;
    //     } else {
    //       context.state.user = null;
    //     }
    //   });
    // },

    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("logged out");
        });
    },
    login(context, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          context.commit("userLogged");
          console.log("logged in");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async storeList(context, payload) {
      const response = await fetch(
        `https://netflixclonefirst-default-rtdb.firebaseio.com/${context.state.user.user.uid}/list.json`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: payload.id,
            title: payload.title,
            poster: payload.poster,
            mediaType: payload.mediaType,
            genres: payload.genre,
          }),
        }
      );
      if (response.ok) {
        //..
      } else {
        throw new Error("Couldnt save data");
      }
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
    getUser(state) {
      return state.user;
    },
  },
});
