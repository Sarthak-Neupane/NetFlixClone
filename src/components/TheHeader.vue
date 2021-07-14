<template>
  <div @click="toggleMobileNav" v-show="mobile" class="menuIcon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 50 50"
      style="fill: #ffffff"
    >
      <path
        d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
      ></path>
    </svg>
  </div>
  <section class="desktop">
    <nav>
      <div class="logo">
        <svg
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:cc="http://creativecommons.org/ns#"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          id="svg2"
          xml:space="preserve"
          height="50"
          width="100"
          version="1.1"
          viewBox="0 0 999.99755 268.67481"
        >
          <defs id="defs4171" />
          <metadata id="metadata8" />
          <path
            id="path14"
            d="m 665.34443,-0.0011656 -42.11377,0 0,235.5057356 c 38.27198,1.31687 76.38577,3.24806 114.33999,5.77796 l 0,-41.49257 c -24.00949,-1.60177 -48.08717,-2.95942 -72.22622,-4.0825 z m 334.65312,0.0232 -46.25287,0 -30.48066,70.6714896 -27.41214,-70.6714896 -45.55734,0 48.95999,126.2867756 -53.46049,123.8865 c 14.78346,1.44214 29.53283,2.9809 44.26174,4.60729 l 31.08073,-72.03529 30.78751,79.40656 c 16.03815,2.06191 32.02857,4.21281 47.99852,6.49129 l 0.0614,-0.0269 -54.82427,-141.47937 z M 478.69641,233.44799 l 42.11241,-0.01 0,-95.79929 57.08407,0 0,-41.492576 -57.08407,0 0,-54.25967 75.44475,0 0,-41.8655596 -117.55853,0 z M 321.44483,41.890324 l 44.07081,0 0,194.026126 c 14.01292,-0.52874 28.05448,-0.96474 42.11105,-1.33263 l 0,-192.696426 44.07217,0 0,-41.8682896 -130.25539,0 z M 177.47655,247.97913 c 38.81204,-3.52661 77.80411,-6.43319 116.9721,-8.68937 l 0,-41.49666 c -25.02551,1.44562 -49.98283,3.15785 -74.86514,5.11489 l 0,-62.81881 c 16.32658,-0.16297 37.82397,-0.66075 56.86859,-0.42413 l 0,-41.495986 c -15.21442,-0.0368 -39.66918,0.21275 -56.86859,0.433 l 0,-56.7104 74.86514,0 0,-41.8655596 -116.9721,0 z M 94.865093,152.05711 40.021723,0.0220144 0,0.0220144 0,268.67462 c 14.010194,-1.994 28.0463,-3.90385 42.111046,-5.73562 l 0,-146.09579 48.764967,140.09513 c 15.339207,-1.77907 30.705007,-3.46409 46.100127,-5.04786 l 0,-251.8711956 -42.113774,0 z m 677.448047,91.72838 c 14.06066,1.07582 28.09404,2.22999 42.11378,3.47793 l 0,-247.2411356 -42.11378,0 0,243.7634756"
            style="fill: #db202c"
          />
        </svg>
      </div>
      <div class="links" v-show="!mobile">
        <ul>
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'movies' }">Movies</router-link></li>
          <li><router-link :to="{ name: 'tv' }">TV</router-link></li>
          <li><router-link :to="{ name: 'mylist' }">My List</router-link></li>
        </ul>
      </div>
    </nav>

    <div class="otherLinks">
      <router-link :to="{ name: 'search' }">
        <div class="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 50 50"
            style="fill: #ffffff"
          >
            <path
              d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"
            ></path>
          </svg>
        </div>
      </router-link>
      <div class="action" v-show="!mobile">
        <button @click="logout">LogOut</button>
      </div>
    </div>
  </section>

  <transition name="mobile-nav">
    <section class="mobileNavBar" v-show="mobileNav">
      <ul class="mobilelinks">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'movies' }">Movies</router-link></li>
        <li><router-link :to="{ name: 'tv' }">TV</router-link></li>
        <li><router-link :to="{ name: 'mylist' }">My List</router-link></li>
      </ul>
      <div class="mobileother">
        <div class="action">
          <button @click="logout">LogOut</button>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["signOutAction"]),
    async logout() {
      await this.signOutAction();
      console.log("logged out");
      this.$router.replace({ name: "login" });
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
      } else {
        // this.mobile = false;
        this.mobileNav = false;
      }
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  data() {
    return {
      windowWidth: null,
      mobile: null,
      mobileNav: null,
    };
  },
};
</script>

<style scoped>
.desktop {
  max-width: 100vw;
  min-width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  position: absolute;
  z-index: 999;
  top: 0;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 10%,
    transparent
  );
}

nav,
.otherLinks {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 20rem;
  margin-left: 2rem;
  list-style: none;
}

li {
  margin-right: 2rem;
}

.search {
  margin-right: 5rem;
}

a {
  text-decoration: none;
  color: whitesmoke;
  font-size: 1.1rem;
  font-size: 500;
}

a:hover {
  color: rgb(197, 197, 197);
}

.search {
  cursor: text;
}

.action button {
  padding: 0.3rem 0.6rem;
  /* background: whitesmoke; */
  border: none;
  outline: none;
  border-radius: 10px;
  background: red;
  color: white;
}

.menuIcon {
  position: absolute;
  top: 4%;
  right: 10%;
  z-index: 9999;
}

.mobileNavBar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1754;
  width: 250px;
  height: 100vh;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.mobileNavBar ul{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

.mobileNavBar ul li{
  margin: 1rem 0;
}

.mobileother{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mobileother .action{
  margin: 1rem 0;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active{
  transition: all 1s ease;
}

.mobile-nav-enter-from{
  transform: translate(-250px)
}

.mobile-nav-enter-to{
  transform: translate(0px)
}

.mobile-nav-leave-to{
  transform: translate(-250px)
}
</style>
