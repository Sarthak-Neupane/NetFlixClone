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
      <router-link to="/home">
      <div class="logo">
        <svg
          width="100"
          height="50"
          viewBox="0 0 322 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M110.664 1.06767L109.436 40.8353C109.202 49.403 108.934 61.0677 108.614 75.8383H90.9268L88.7819 1.06767H110.664Z"
            fill="#E50914"
          />
          <path
            d="M35.8155 34.9147C34.6565 34.3059 33.1775 33.9971 31.3699 33.9971C28.0054 33.9971 25.2724 35.5059 23.1707 38.5147C20.7922 41.8853 19.6073 46.7471 19.6073 53.0912C19.6073 58.0412 20.55 62.1 22.4268 65.2676C24.3037 68.4441 26.7686 70.0235 29.8217 70.0235C31.9061 70.0235 33.8781 69.1412 35.7463 67.3853C35.5387 68.8588 35.1754 71.5588 34.6738 75.5029C34.3797 78.1235 34.0943 80.8412 33.8262 83.6735C31.4737 85.2176 28.4552 85.9853 24.7794 85.9853C18.1196 85.9853 12.42 82.1647 7.68895 74.5324C2.5601 66.2118 0 55.3853 0 42.0529C0 29.7177 2.2055 19.7559 6.61649 12.15C11.3215 4.05 17.8256 0 26.1286 0C30.1244 0 33.0132 0.397056 34.7949 1.18235L35.8155 34.9147Z"
            fill="#E50914"
          />
          <path
            d="M85.8758 1.06767C85.5125 9.37944 85.0455 22.9235 84.4487 41.6824C84.2757 50.603 83.9817 63.0265 83.5579 78.9441H67.4016L67.0556 61.9059C66.6751 62.1088 65.9053 62.6029 64.7463 63.3794C63.3711 64.3235 62.4025 65.0824 61.8316 65.6647L60.1883 59.4265C59.851 58.0765 59.2888 56.1618 58.5104 53.7L58.199 78.9441H40.3648L39.4481 41.6824C39.2578 31.9853 38.7821 18.4412 38.021 1.06767H60.2575L58.7699 49.0324C60.3094 49.2706 61.7884 49.3324 63.2068 49.2353C64.115 49.2 65.3431 49.0677 66.8826 48.8294L65.2653 1.06767H85.8758Z"
            fill="#E50914"
          />
          <path
            d="M145.969 57.2294C145.761 58.447 145.372 60.7323 144.801 64.1029C144.507 66.0794 144.256 68.3823 144.049 71.0294H115.516C115.412 63.8912 115.144 52.147 114.729 35.7794C114.452 27.3971 113.959 15.8294 113.25 1.07648H135.132L133.333 59.1C135.374 59.1 138.427 58.7823 142.509 58.147C143.348 58.0147 144.499 57.7147 145.969 57.2294Z"
            fill="#E50914"
          />
          <path
            d="M180.176 52.8176C179.968 53.9382 179.579 56.0471 179.008 59.1529C178.714 60.9706 178.463 63.097 178.256 65.5323H149.723C149.619 58.9588 149.351 48.1324 148.936 33.0529C148.659 25.3324 148.166 14.6735 147.457 1.07648H169.339L167.54 54.5382C169.581 54.5382 172.634 54.247 176.716 53.6559C177.546 53.5412 178.705 53.2588 180.176 52.8176Z"
            fill="#E50914"
          />
          <path
            d="M214.573 1.06764L213.284 29.7176C212.506 29.5323 210.854 29.2765 208.337 28.9412C206.823 28.8529 205.033 28.7912 202.975 28.7559L202.438 43.4206C204.601 43.4823 207.948 43.2529 212.462 42.7412C212.255 44.1088 211.926 46.3588 211.485 49.4823C211.252 51.3353 211.001 53.5676 210.724 56.1794C210.136 55.9941 208.778 55.7206 206.659 55.3588C205.085 55.1735 203.528 55.1118 201.997 55.1735L201.746 71.0206H184.059L183.082 35.3118C182.909 27.1147 182.442 15.697 181.663 1.05881H214.573V1.06764Z"
            fill="#E50914"
          />
          <path
            d="M249.627 61.0853C249.42 62.3824 249.03 64.8353 248.46 68.4353C248.165 70.5441 247.915 73.0147 247.707 75.8383H219.174C219.07 68.2147 218.802 55.65 218.387 38.1618C218.11 29.2059 217.617 16.8441 216.908 1.06767H238.79L236.991 63.0794C239.032 63.0794 242.085 62.7353 246.168 62.0559C247.007 61.9324 248.157 61.6059 249.627 61.0853Z"
            fill="#E50914"
          />
          <path
            d="M321.353 1.0853C320.514 3.81177 318.378 10.3853 314.953 20.8235C312.998 26.5941 310.075 34.8441 306.192 45.5647L317.669 83.6912H303.009L297.015 66.8559C294.412 73.6676 292.336 79.2794 290.805 83.6912H277.909C279.025 80.8235 281.473 74.0647 285.252 63.4147C286.723 59.1088 288.383 54.2029 290.234 48.6794C288.85 44.8059 286.61 38.3029 283.523 29.1618C280.158 18.8735 277.183 9.51177 274.597 1.09413H296.288C296.565 2.60295 297.153 5.54119 298.053 9.91766C298.598 12.4235 299.281 15.1324 300.103 18.0353C300.63 16.4912 301.469 13.8618 302.628 10.1294C303.303 7.8 304.081 4.79119 304.963 1.09413H321.353V1.0853Z"
            fill="#E50914"
          />
          <path
            d="M273.533 1.06764L272.296 42.4853C272.063 51.4059 271.786 63.5559 271.475 78.9353H253.709L251.556 1.05881H273.533V1.06764Z"
            fill="#E50914"
          />
        </svg>
      </div>
      </router-link>
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
        <li @click="toggleMobileNav"><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li @click="toggleMobileNav"><router-link :to="{ name: 'movies' }">Movies</router-link></li>
        <li @click="toggleMobileNav"><router-link :to="{ name: 'tv' }">TV</router-link></li>
        <li @click="toggleMobileNav"><router-link :to="{ name: 'mylist' }">My List</router-link></li>
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

a.router-link-active {
  color: red;
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

.mobileNavBar ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

.mobileNavBar ul li {
  margin: 1rem 0;
}

.mobileother {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mobileother .action {
  margin: 1rem 0;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter-from {
  transform: translate(-250px);
}

.mobile-nav-enter-to {
  transform: translate(0px);
}

.mobile-nav-leave-to {
  transform: translate(-250px);
}
</style>
