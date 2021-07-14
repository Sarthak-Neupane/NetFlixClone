<template>
  <router-link :to="getPath">
    <div class="scene">
      <div class="card">
        <div class="face front" :style="getImages"></div>
        <div class="face back">
          <div class="header">
            <h1>{{ name }}</h1>
          </div>
          <div class="genres">
            <ul>
              <li v-for="genre in DisplayGenre" :key="genre">{{ genre }}</li>
            </ul>
          </div>
          <div class="actions">
            <router-link to="/video">
              <button
                @mouseover="changeColorPlay('true')"
                @mouseleave="changeColorPlay('false')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 172 172"
                  :style="{ fill: colorPlay }"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g :fill="colorPlay">
                      <path
                        d="M34.4,17.2c-3.16643,0 -5.73333,2.5669 -5.73333,5.73333c-0.00001,0.00747 -0.00001,0.01493 0,0.0224v63.04427v63.04427c-0.00001,0.00746 -0.00001,0.01493 0,0.02239c0,3.16643 2.5669,5.73333 5.73333,5.73333c1.19346,-0.00345 2.3561,-0.37925 3.32578,-1.075l0.0112,0.0112l113.71485,-62.52917c2.03773,-0.93223 3.34559,-2.96619 3.34817,-5.20703c0.00115,-2.30642 -1.37987,-4.38898 -3.50495,-5.28542l-113.55807,-62.45078h-0.0112c-0.97102,-0.69177 -2.13354,-1.06362 -3.32578,-1.0638z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
            </router-link>

            <!-- <router-link> -->
            <button
              @mouseover="changeColorInfo('true')"
              @mouseleave="changeColorInfo('false')"
              @click="updateList()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 172 172"
                :style="{ fill: colorInfo }"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g :fill="colorInfo">
                    <path
                      d="M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603 35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12 -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM82.56,44.72v37.84h-37.84v6.88h37.84v37.84h6.88v-37.84h37.84v-6.88h-37.84v-37.84z"
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
            <!-- </router-link> -->
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      DisplayGenre: null,
      colorPlay: "#ffffff",
      colorInfo: "#ffffff",
    };
  },
  props: ["poster", "id", "name", "genres", "allGenre"],
  computed: {
    getPath() {
      return this.$route.path + "/" + this.id;
    },
    getImages() {
      if (this.poster) {
        return {
          "background-image":
            "url(http://image.tmdb.org/t/p/w154" + this.poster + ")",
        };
      } else {
        return {
          "background-image": "url(../assets/netflix.jpg)",
        };
      }
    },
  },
  created() {
    this.getGenres();
  },
  methods: {
    getGenres() {
      const displayGenre = [];
      if (this.genres.length !== 0) {
        this.genres.forEach((value) => {
          this.allGenre.forEach((item) => {
            if (item.id === value) {
              displayGenre.push(item.name);
            }
          });
        });
      }
      this.DisplayGenre = displayGenre;
      console.log(this.DisplayGenre);
    },
    changeColorPlay(value) {
      console.log(value);
      if (value === "true") {
        this.colorPlay = "#000000";
        console.log(this.color);
      } else {
        this.colorPlay = "#ffffff";
      }
    },
    changeColorInfo(value) {
      console.log(value);
      if (value === "true") {
        this.colorInfo = "#000000";
        console.log(this.color);
      } else {
        this.colorInfo = "#ffffff";
      }
    },
    updateList(){
      try {
        this.$store.dispatch('storeList', {
          title: this.name,
          poster: this.poster,
          id: this.id,
          genre: this.DisplayGenre,
          mediaType: 'tv'
        })
      } catch (error) {
        console.log(error.msg)
        this.error = true
        this.errorMessage = error.msg
      }
    }
  },
};
</script>

<style scoped>
.scene {
  width: 154px;
  height: 231px;
  perspective: 30em;
}
.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.7s;
  transform-style: preserve-3d;
}
.face {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  backface-visibility: hidden;
}

.front {
  /* background-color: #0379ff; */
}

.back {
  background-color: black;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

a {
  color: white;
}

h1 {
  font-size: 1.3rem;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 1s ease-in;
  transition: transform 0.7s ease-in;
}

ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0.7rem;
}

li {
  font-size: 1rem;
  margin: 0.2rem 0.4rem;
  text-align: center;
  opacity: 0;
  transition: opacity 1.5s ease-in;
  /* color: red; */
}

button:hover {
  background: white;
}

button {
  margin: 1rem 0.3rem;
  background: none;
  outline: none;
  border: 1px solid white;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.4s ease-in;
  transition: opacity 1s ease-in;
  transition: transform 0.7s ease-in;
  transform: translateY(10px);
  opacity: 0;
}

.actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.scene:hover .card {
  transform: rotateY(180deg);
}

.scene:hover button {
  opacity: 1;
  transform: translateY(0px);
}

.scene:hover h1 {
  opacity: 1;
  transform: translateY(0px);
}

.scene:hover li {
  opacity: 1;
}
</style>
