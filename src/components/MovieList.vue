<template>
  <teleport to="body">
    <div class="loader" v-if="loading">
      <base-dialog>
        <template #header> Updating.. </template>
        <template #body> <base-spinner> </base-spinner> </template>
        <template #footer> </template>
      </base-dialog>
    </div>
  </teleport>
  <teleport to="body">
    <div class="loader" v-if="error">
      <base-dialog>
        <template #header> Error Occured </template>
        <template #body> {{ error }} </template>
        <template #footer> </template>
      </base-dialog>
    </div>
  </teleport>
  <!-- <router-link :to="getPath"> -->
  <div
    class="scene"
    ref="scene"
    @mouseover="mouseInside"
    @mouseleave="mouseOutside"
    :style="{ width: posterSize + 'px', height: (3 / 2) * posterSize + 'px' }"
  >
    <div class="card">
      <div
        class="face front"
        :style="{
          'background-image':
            'url(http://image.tmdb.org/t/p/w' + posterSize + poster + ')',
        }"
      >
        <div class="datas" v-if="dimension">
          <router-link :to="getPath"
            ><div class="linkingPart"></div
          ></router-link>
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

            <button
              @mouseover="changeColorInfo('true')"
              @mouseleave="changeColorInfo('false')"
              @click="updateList"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 172 172"
                v-if="!added"
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
              <svg
                v-if="added"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                :style="{ fill: colorInfo }"
              >
                <path
                  d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"
                ></path>
              </svg>
            </button>
          </div>
          <router-link :to="getPath">
            <div class="titleAndGenres">
              <h1>{{ name }}</h1>
              <ul>
                <li v-for="genre in DisplayGenre" :key="genre">{{ genre }}</li>
              </ul>
            </div>
          </router-link>
        </div>
      </div>

      <div class="face back" v-if="!dimension">
        <router-link :to="getPath">
          <div class="header">
            <h1>{{ name }}</h1>
          </div>
          <div class="genres">
            <ul>
              <li v-for="genre in DisplayGenre" :key="genre">{{ genre }}</li>
            </ul>
          </div>
        </router-link>
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

          <button
            @mouseover="changeColorInfo('true')"
            @mouseleave="changeColorInfo('false')"
            @click="updateList"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 172 172"
              v-if="!added"
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
            <svg
              v-if="added"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              :style="{ fill: colorInfo }"
            >
              <path
                d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- </router-link> -->
</template>

<script>
export default {
  data() {
    return {
      DisplayGenre: null,
      colorPlay: "#ffffff",
      colorInfo: "#ffffff",
      error: false,
      loading: false,
      added: null,
    };
  },
  props: ["poster", "id", "name", "genres", "allGenre", "posterSize", "type"],
  computed: {
    getPath() {
        if (this.type) {
          return `/${this.type}/` + this.id;
        } else {
          return "/movie/" + this.id;
        }
    },
    dimension() {
      if (window.innerWidth >= 1000) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.addedOrNot();
    this.getGenres();
    // console.log(this.$route.path);
    // console.log(this.type)
  },
  methods: {
    mouseInside() {
      this.$refs.scene.parentElement.classList.add("current");
    },
    mouseOutside() {
      this.$refs.scene.parentElement.classList.remove("current");
    },
    getGenres() {
      const displayGenre = [];
      if (this.genres && this.allGenre) {
        this.genres.forEach((value, index) => {
          this.allGenre[0].forEach((item) => {
            if (item.id === value && index <= 1) {
              displayGenre.push(item.name);
            }
          });
        });
      }
      this.DisplayGenre = displayGenre;
      // console.log(this.DisplayGenre);
    },
    addedOrNot() {
      const stored = this.$store.getters.getStoredMovies;
      stored.forEach((element) => {
        if (element.id === this.id) {
          this.added = true;
        }
      });
    },
    changeColorPlay(value) {
      if (value === "true") {
        this.colorPlay = "#000000";
      } else {
        this.colorPlay = "#ffffff";
      }
    },
    changeColorInfo(value) {
      if (value === "true") {
        this.colorInfo = "#000000";
      } else {
        this.colorInfo = "#ffffff";
      }
    },
    async updateList() {
      if (this.added) {
        try {
          this.loading = true;
          await this.$store.dispatch("removeList", this.id);
          this.loading = false;
          this.added = false;
        } catch (error) {
          this.loading = false;
          this.error = true;
          this.errorMessage = error.msg;
        }
      } else {
        try {
          this.loading = true;
          await this.$store.dispatch("storeList", {
            title: this.name,
            poster: this.poster,
            id: this.id,
            genre: null,
            mediaType: "movie",
          });
          this.loading = false;
          this.added = true;
        } catch (error) {
          this.loading = false;
          this.error = true;
          this.errorMessage = error.msg;
        }
      }
    },
  },
};
</script>

<style scoped>
.linkingPart {
  min-height: 150px;
  /* background: red;  */
}
.scene {
  /* width: 154px;
  height: 231px; */
  perspective: 30em;
}

a {
  text-decoration: none;
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
  z-index: 50;
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

.back .header {
  min-height: 80px;
  max-height: 80px;
  overflow: wrap;
  margin-bottom: 0.5rem;
}

.back h1 {
  font-size: clamp(1rem, 90%, 95%);
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 1s ease-in;
  transition: transform 0.7s ease-in;
  font-weight: 500;
}

.back ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0.7rem;
}

.back li {
  font-size: 0.7rem;
  margin: 0.2rem 0.4rem;
  text-align: left;
  opacity: 0;
  transition: opacity 1.5s ease-in;
  /* color: red; */
  background: red;
  border-radius: 20px;
  padding: 0.2rem;
}

button:hover {
  background: white;
}

button {
  margin: 0.6rem 0.3rem;
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
  transform: scale(1.3);
  /* transform: rotateY(180deg); */
}

.scene:hover button {
  opacity: 1;
  transform: translateY(0px);
}

.scene:hover .back h1 {
  opacity: 1;
  transform: translateY(0px);
}

.scene:hover .back li {
  opacity: 1;
}

.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1010101010110;
}

.datas {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  padding: 0.3rem 0.7rem;
}

.datas h1 {
  /* background: red; */
  font-size: 0.8rem;
  /* text-align: left; */
}

.datas .actions button {
  height: 30px;
  width: 30px;
}

.datas ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
  /* background: green; */
}

.datas li {
  margin-right: 0.5rem;
  background: red;
  border-radius: 20px;
  padding: 0.2rem;
}
.datas .actions {
  /* background: yellow; */
}
.datas {
  transition: all 1s ease;
  opacity: 0;
}

.scene:hover .datas {
  opacity: 1;
}

.scene:hover .datas h1,
.scene:hover .datas ul {
  transform: translateY(-10px);
}
@media screen and (max-width: 768px) {
  .scene:hover .card {
    transform: scale(1);
    transform: rotateY(180deg);
  }
}
</style>
