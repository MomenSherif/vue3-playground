<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja sawg for half price!</p>
    </Modal>
  </div>
  <button @click="toggleModal">open modal</button>
</template>

<script>
import Modal from "./components/Modal";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "Hello, World! 🌍",
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  display: inline-block;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}
</style>
