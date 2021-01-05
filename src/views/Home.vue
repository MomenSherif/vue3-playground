<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="posts.length" :posts="posts" />
    <!-- <div v-if="error">{{ error }}</div> -->
  </div>
</template>

<script>
import PostList from "../components/PostList";
import getPosts from "../composables/getPosts";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return {
      posts,
      error,
    };
  },
};
</script>
