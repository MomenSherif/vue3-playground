<template>
  <div class="backdrop">
    <div class="modal">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
      <ul v-if="instructions">
        <li v-for="ins in instructions" :key="ins">{{ ins }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["header", "text", "instructions"],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background-color: #fff;
  border-radius: 10px;
}
.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
</style>