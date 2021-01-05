<template>
  <div class="home">home</div>
  <p ref="p">{{ name }} is {{ age }} years old!</p>
  <button @click="handleClick">Click</button>
  <button @click="age++">age +</button>
  <input type="text" v-model="name" />
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    const name = ref("Momen");
    const age = ref(24);

    const p = ref(null);

    const handleClick = () => {
      name.value = "luigi";
    };

    return {
      name,
      age,
      handleClick,
      p,
    };
  },
};
</script>
