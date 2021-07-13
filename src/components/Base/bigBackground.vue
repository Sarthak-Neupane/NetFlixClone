<template>
  <base-background @change-color="changeColor">
    <template #background>
      <img :src="background" />
    </template>
    <template #genres>
      <ul>
        <li v-for="genre in genres" :key="genre">{{ genre }}</li>
      </ul>
    </template>
    <template #title>
      <h1>{{ title }}</h1>
    </template>
    <template #releaseDate
      ><span>{{ releaseDate }}</span></template
    >
    <template #adult v-if="pathMovie || pathTV"
      ><span :class="getClass">adult</span></template
    >
    <template v-if="pathMovie" #runtime>
      <span class="time"> {{ time }}min </span>
    </template>
    <template #desription>
      <p class="desc">{{ desc }}</p>
    </template>

    <template #playNow>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 172 172"
        :style="{ fill: color }"
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
          <g :fill="color">
            <path
              d="M34.4,17.2c-3.16643,0 -5.73333,2.5669 -5.73333,5.73333c-0.00001,0.00747 -0.00001,0.01493 0,0.0224v63.04427v63.04427c-0.00001,0.00746 -0.00001,0.01493 0,0.02239c0,3.16643 2.5669,5.73333 5.73333,5.73333c1.19346,-0.00345 2.3561,-0.37925 3.32578,-1.075l0.0112,0.0112l113.71485,-62.52917c2.03773,-0.93223 3.34559,-2.96619 3.34817,-5.20703c0.00115,-2.30642 -1.37987,-4.38898 -3.50495,-5.28542l-113.55807,-62.45078h-0.0112c-0.97102,-0.69177 -2.13354,-1.06362 -3.32578,-1.0638z"
            ></path>
          </g>
        </g>
      </svg>
      <p class="textButton">Play</p>
    </template>
    <template #info>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 172 172"
        :style="{ fill: color }"
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
          <g :fill="color">
            <path
              d="M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603 35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12 -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM82.56,44.72v37.84h-37.84v6.88h37.84v37.84h6.88v-37.84h37.84v-6.88h-37.84v-37.84z"
            ></path>
          </g>
        </g>
      </svg>
      <p class="textButton">My List</p>
    </template>
    <template class="forTv" #tv v-if="pathTV">
      <p>No. of Seasons: {{ seasons }}</p>
      <p>No. of Episodes: {{ episodes }}</p>
    </template>
  </base-background>
</template>

<script>
export default {
  props: [
    "background",
    "title",
    "desc",
    "id",
    "releaseDate",
    "genres",
    "time",
    "adult",
    "seasons",
    "episodes",
  ],
  data() {
    return {
      color: "#ffffff",
      // currentPath: false,
    };
  },
  methods: {
    changeColor(value) {
      // console.log(value);
      if (value === "true") {
        this.color = "#000000";
        // console.log(this.color);
      } else {
        this.color = "#ffffff";
      }
    },
  },
  computed: {
    getClass() {
      if (this.adult) {
        return "adult red";
      } else {
        return "adult green";
      }
    },
    pathTV() {
      if (this.$route.path === `/tv/${this.id}`) {
        return true;
      } else {
        return false;
      }
    },
    pathMovie() {
      if (this.$route.path === `/movie/${this.id}`) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    // console.log(typeof this.adult);
    // console.log(this.$route.path);
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  margin: 0.5rem 0;
  font-size: 4rem;
  text-align: left;
}

.desc {
  margin: 1rem 1rem;
}
.green {
  background: green;
}
.red {
  background: red;
}
ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

li {
  margin: 0 2rem;
}

.adult {
  padding: 0 0.4rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.forTv p {
  margin: 0.5rem 0;
}

.time {
  background: red;
  color: white;
  border-radius: 20px;
  padding: 0 0.4rem;
}

.textButton {
  margin: 0 1rem;
}
</style>
