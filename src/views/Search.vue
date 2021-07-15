<template>
  <section>
    <div class="formContainer">
      <form @submit.prevent="getData()">
        <div class="form">
          <input
            type="search"
            v-model="enteredData"
            class="input"
            placeholder="Search"
            ref="input"
          />
          <!-- <div class="custom-select">
            <type v-model="selected"></type>
          </div> -->
        </div>
        <button class="search">Search</button>
      </form>
    </div>
    <base-spinner v-if="isLoading"></base-spinner>
    <div v-if="!isLoading" class="display">
      <p v-if="empty">No Search Results Found For '{{ inputValue }}'</p>
      <div v-else class="results">
        <p>
          <search-list
            v-for="item in data"
            :key="item.id"
            :image="'https://image.tmdb.org/t/p/w300' + item.backdrop_path"
            :id="item.id"
            :type="item.media_type"
            :title="item.title"
            :genre="item.genre_ids"
            :name="item.name"
          ></search-list>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import SearchList from "../components/SearchList.vue";
// import Type from "../components/MovieOrTv.vue";
export default {
  components: {
    // Type,
    SearchList,
  },
  data() {
    return {
      enteredData: "",
      isLoading: false,
      selected: null,
      data: [],
      empty: null,
    };
  },
  computed: {
    inputValue() {
      return this.$refs.input.value;
    },
  },
  methods: {
    async getData() {
      this.empty = false;
      this.data = [];
      this.isLoading = true;
      const response = await fetch(
        `
https://api.themoviedb.org/3/search/multi?api_key=600356b3ea6a55171e5421f900b63ab9&language=en-US&query=${this.enteredData}&page=1&include_adult=true`,
        {
          headers: {
            "content-type": "application/json;charset=utf-8",
            authorization:
              "Bearer <<eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDAzNTZiM2VhNmE1NTE3MWU1NDIxZjkwMGI2M2FiOSIsInN1YiI6IjYwZTNjNTQ5YjNmNmY1MDAyYzQ2OGJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sr0GDGc-LG43wFiR3NQXMWLR1DjbmlBHSLSrvtWkUEM>>",
          },
        }
      );
      const data = await response.json();
      this.isLoading = false;

      if (data.results.length !== 0) {
        data.results.forEach((item) => {
          if (
            item.genre_ids &&
            item.genre_ids.length !== 0 &&
            item.backdrop_path !== null
          ) {
            this.data.push(item);
          }
        });
        this.data.sort((a, b) => {
          if (a.popularity > b.popularity) {
            return -1;
          } else {
            return 1;
          }
        });
        console.log(this.data);
      } else {
        this.empty = true;
      }
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 5rem;
}

.formContainer {
  padding: 2rem;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input {
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  height: 40px;
  width: 20rem;
  border-radius: 20px;
  background: #171717;
  color: whitesmoke;
}

.input:focus {
  outline: none;
  border: none;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
}

.search {
  background: none;
  outline: none;
  border: none;
  color: whitesmoke;
  border: 1px solid #db202c;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin: 1rem 0;
  cursor: pointer;
  /* remove this to make it to previous */
  margin: 0rem 1rem;
}

.display {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 90vw;
}

.results p {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .display{
    max-width: 100%;

  }
      .input{
      max-width: 20rem;
    }

    form{
      flex-direction: column;
    }

    .search{
      margin: 1rem 0;
    }
}
</style>
