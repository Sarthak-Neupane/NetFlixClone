<template>
  <li>
    <div class="containerli">
      <router-link :to="getPath">
        <img :src="getImages" width="235" class="posterImg" />
      </router-link>
      <div class="actions">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 172 172"
          style="fill: #000000"
          class="svgInfo"
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
            <path
              d="M86,159.96c-40.84698,0 -73.96,-33.11302 -73.96,-73.96v0c0,-40.84698 33.11302,-73.96 73.96,-73.96h0c40.84698,0 73.96,33.11302 73.96,73.96v0c0,40.84698 -33.11302,73.96 -73.96,73.96z"
              fill="#ffffff"
            ></path>
            <g fill="#000000">
              <path d="M55.76415,43.19531v85.59593l72.75358,-42.79373z"></path>
            </g>
          </g>
        </svg>
        <router-link :to="getPath">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 172 172"
            style="fill: #000000"
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
              <g fill="#ffffff">
                <path
                  d="M86,6.88c-43.69832,0 -79.12,35.42168 -79.12,79.12c0,43.69832 35.42168,79.12 79.12,79.12c43.69832,0 79.12,-35.42168 79.12,-79.12c0,-43.69832 -35.42168,-79.12 -79.12,-79.12zM86,37.84c5.70008,0 10.32,4.61992 10.32,10.32c0,5.70008 -4.61992,10.32 -10.32,10.32c-5.70008,0 -10.32,-4.61992 -10.32,-10.32c0,-5.70008 4.61992,-10.32 10.32,-10.32zM99.76,130.72h-6.88h-13.76h-6.88v-6.88h6.88v-44.72h-6.88v-6.88h6.88h13.76v6.88v44.72h6.88z"
                ></path>
              </g>
            </g>
          </svg>
        </router-link>
      </div>
      <div class="textArea">
        <h1>{{ name }}</h1>
        <ul class="genres">
          <li v-for="genre in DisplayGenre" :key="genre">{{ genre }}</li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      DisplayGenre: null,
    };
  },
  props: ["poster", "id", "name", "genres", "allGenre"],
  computed: {
    getPath() {
      return this.$route.path + "/" + this.id;
    },
    getImages() {
      if (this.poster !== null) {
        return "https://image.tmdb.org/t/p/w300" + this.poster;
      } else {
        return "../assets/netFlixfake.jpg";
      }
    },
  },
  created() {
    this.getGenres();
  },
  methods: {
    getGenres() {
      const displayGenre = [];
      if (this.genres !== []) {
        this.genres.forEach((value) => {
          this.allGenre.forEach((item) => {
            if (item.id === value) {
              displayGenre.push(item.name);
            }
          });
        });
      }
      this.DisplayGenre = displayGenre;
    },
  },
};
</script>

<style scoped>
li {
  transition: transform 0.3s ease-in;
  text-decoration: none;
}

.textArea {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: absolute;
  bottom: -10%;
  left: 0%;
  transform: translate(0%, 0%);
  z-index: 999;
  opacity: 0;
  transition: all 1s ease;
  width: 100%;
  height: 30%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  padding: 0.5rem;
}

li:hover .textArea {
  opacity: 1;
  bottom: 0%;
  left: 0%;
  transform: translate(0%, 0%);
}

li:hover .actions {
  opacity: 1;
}
.actions {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -70%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.4rem 0;
  z-index: 9999;
  opacity: 0;
  transition: all 1s ease;
}
.posterImg {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 5px;
}

h1 {
  font-size: 1rem;
  font-weight: 500;
  color: whitesmoke;
  text-align: center;
}

.genres {
  list-style-type: disc;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.genres li {
  color: whitesmoke;
  margin: 10px;
  text-align: left;
  font-size: 0.6rem;
  max-width: 80%;
}

.containerli {
  padding: 0;
  margin: 2rem;
  height: 100%;
  transition: transform 1s ease;
}

@media (max-width: 768px) {
  .textArea {
    position: absolute;
    bottom: -30%;
    left: 0%;
    transform: translate(0%, -30%);
    opacity: 1;
    background: none;
  }
  .posterImg {
    object-fit: cover;
    height: 80%;
    width: 80%;
    border-radius: 5px;
    margin-left: 10%;
  }
  .containerli {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .actions {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 1;
  }
  li:hover .textArea {
    opacity: 1;
  }
  li:hover .actions {
    opacity: 1;
  }
}
</style>
