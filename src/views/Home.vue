<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="posts.length" :posts="posts" />
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw Error("No data available 😭");
        }
        const data = await res.json();
        posts.value = data;
      } catch (err) {
        error.value = err.message;
      }
    };

    load();
    return {
      posts,
      error,
    };
  },
};
</script>
