<template>
  <div class="home">home</div>
  <p ref="p">{{ name }} is {{ age }} years old!</p>
  <button @click="handleClick">Click</button>
</template>

<script>
import { ref, renderList } from "vue";

export default {
  name: "Home",
  setup() {
    const name = "Momen";
    const age = 24;

    const p = ref(null);

    const handleClick = () => {
      console.log(p, p.value);
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
