<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>
  <button @click="handleRedirect">Redirect</button>
  <button @click="handleGoBack">Go back</button>
  <button @click="handleGoForward">Go forward</button>
  <router-view />
</template>

<script>
export default {
  name: "App",
  methods: {
    handleRedirect() {
      this.$router.push({
        name: "Home",
      });
    },
    handleGoBack() {
      this.$router.go(-1);
    },
    handleGoForward() {
      this.$router.go(1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
