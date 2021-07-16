<template>
  <!-- <div>
    <h3>Login</h3>
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="text" placeholder="login" v-model="email" />
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <button>Login</button>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
  </div> -->
  <teleport to="body">
    <div class="dialog" v-if="error" @close-dialog="clearError">
      <base-dialog>
        <template #header>
          <h1>Unable To login</h1>
        </template>

        <template #body>
          {{ error }}
        </template>

        <template #footer>
          <base-button @click="clearError" mode="close"> Close </base-button>
        </template>
      </base-dialog>
    </div>
  </teleport>
  <section>
    <div class="container">
      <div class="form-contain">
        <div class="header">
          <svg
            width="51"
            height="112"
            viewBox="0 0 51 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.6136 45.249C48.9792 44.4604 46.8852 44.0661 44.3316 44.0661C39.5817 44.0661 35.7206 46.0168 32.7482 49.9181C29.3875 54.2863 27.7123 60.5844 27.7123 68.8124C27.7123 75.2247 29.0402 80.4956 31.696 84.6044C34.3519 88.7133 37.835 90.7781 42.1456 90.7781C45.0874 90.7781 47.876 89.6367 50.5216 87.3644C50.2254 89.2736 49.7249 92.7806 49.0099 97.8959C48.5911 101.289 48.1927 104.827 47.8045 108.49C44.4746 110.492 40.2151 111.488 35.0158 111.488C25.5979 111.488 17.5487 106.539 10.8684 96.6404C3.62618 85.8599 0 71.8214 0 54.5249C0 38.5358 3.11544 25.6075 9.35659 15.7609C16.0063 5.26054 25.1995 0 36.9361 0C42.5746 0 46.6605 0.508427 49.1835 1.53563L50.6136 45.249Z"
              fill="#9E0505"
            />
          </svg>
        </div>

        <div class="title">Log In To ChillFlix</div>

        <form @submit.prevent="login">
          <div class="input1 inputs">
            <input
              type="email"
              id="email"
              name="email"
              class="input"
              autocomplete="off"
              v-model="email"
              @click="labelUpemail()"
              ref="email"
            />
            <label for="email" class="hello">Email</label>
          </div>

          <div class="input2 inputs">
            <input
              type="password"
              id="password"
              name="password"
              class="input"
              v-model="password"
              @click="labelUppassword()"
              ref="password"
            />
            <label for="password" class="hello">Password</label>
          </div>

          <input type="submit" class="submit" value="Login" />
          <p>
            Don't have an account?
            <router-link to="/signup">Sign Up now</router-link>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
      loading: false,
    };
  },
  methods: {
    ...mapActions(["signInAction"]),
    async login() {
      this.error = null;
      await this.signInAction({ email: this.email, password: this.password });
      this.error = this.$store.getters.getError;
      console.log(this.error);
      if (this.error) {
        //
      } else {
        this.$router.replace({ name: "home" });
      }
    },
    clearError() {
      console.log("cleared");
      this.error = null;
    },
    // computed: {
    //   errorMsg() {
    //     return this.$store.getters.getError;
    //   },
    // },
    labelUpFirstname() {
      this.$refs.firstName.nextElementSibling.classList.add("active");
    },
    labelUpLastname() {
      this.$refs.lastName.nextElementSibling.classList.add("active");
    },
    labelUpemail() {
      this.$refs.email.nextElementSibling.classList.add("active");
    },
    labelUppassword() {
      this.$refs.password.nextElementSibling.classList.add("active");
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  font-size: 18px;
}
section {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/netflixBackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

* {
  color: white;
}

.container {
  width: 50vw;
  min-width: 20rem;
  height: 80vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  border-radius: 20px;
  background-color: black;
  -webkit-box-shadow: 1px 1px 20px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 20px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 0.3rem;
}

.container .form-contain {
  width: 100%;
  height: 100%;
  padding: 0.9rem;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: -ms-grid;
  display: grid;
  place-items: center;
}

.container .form-contain .header {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  /* background-image: url("../assets/netflixN.jpg"); */
  background-size: 30%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

.container .form-contain .header h1 {
  margin: 0.5rem;
}

.container .form-contain form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 60%;
}

.container .form-contain form .input1,
.container .form-contain form .input2 {
  width: 100%;
  position: relative;
}

.container .form-contain form .input1 label,
.container .form-contain form .input2 label {
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-20%, -50%);
  transform: translate(-20%, -50%);
  left: 20%;
  font-size: 15px;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  cursor: text;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.container .form-contain form .input1 label.active,
.container .form-contain form .input2 label.active {
  font-size: 10px;
  top: 0%;
  left: 15%;
  opacity: 0.5;
}

.container .form-contain form input {
  padding: 5px 10px;
  width: 80%;
  margin: 0.8rem 0;
  outline: none;
  border: none;
  text-align: left;
  background: none;
  border-left: 5px solid #ff1313;
}

.container .form-contain form .submit {
  margin-bottom: 1.3rem;
  border: none;
  height: 30px;
  background-color: #ff1313;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 15px;
  /* padding: 0.5rem; */
  text-align: center;
  border: 1px solid red;
  cursor: pointer;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  font-size: 0.9rem;
  font-weight: 500;
}

.container .form-contain form .submit:hover {
  border: 1px solid red;
  background: none;
  color: white;
}

.container .form-contain form p {
  width: 120%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.container .form-contain form p a {
  text-decoration: none;
  color: red;
  padding: 0.4rem;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.title {
  font-size: 2.4rem;
}

.dialog {
  position: absolute;
  top: 0;
  left: 0;
}
@media screen and (max-width: 768px){
  .title{
    font-size: 1.3rem;
  }
}
</style>
