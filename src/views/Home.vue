<template>
  <div class="home">home</div>
  <p>{{ name }} is {{ age }} years old!</p>
  <button @click="handleClick">Click</button>
</template>

<script>
export default {
  name: "Home",
  setup() {
    const name = "Momen";
    const age = 24;

    const handleClick = () => {
      console.log("Clicked me ");
    };

    return {
      name,
      age,
      handleClick,
    };
  },
};
</script>
