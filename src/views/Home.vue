<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        id: 1,
        title: "Welcome to the blog",
        body:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis neque aperiam amet. Possimus earum tenetur odio facere unde nobis fuga suscipit. Dolorum neque veniam error dicta repellat deserunt nostrum aliquam culpa quo, fugit quae blanditiis officia molestiae earum corporis incidunt necessitatibus autem harum dolores illum ad! Suscipit maiores similique recusandae accusamus. Minima vero nam iure nisi, totam eius veniam et odit a ipsum soluta nulla asperiores ducimus illum, harum porro explicabo. Nesciunt quod sit aliquam rem laudantium, quibusdam accusantium optio. Repellendus quisquam veritatis nulla dolores. Nihil alias animi ut, doloremque provident sint in asperiores repudiandae dicta velit, fugiat minima ipsum!",
      },
      {
        id: 2,
        title: "Top 5 CSS tips",
        body:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis neque aperiam amet. Possimus earum tenetur odio facere unde nobis fuga suscipit. Dolorum neque veniam error dicta repellat deserunt nostrum aliquam culpa quo, fugit quae blanditiis officia molestiae earum corporis incidunt necessitatibus autem harum dolores illum ad! Suscipit maiores similique recusandae accusamus. Minima vero nam iure nisi, totam eius veniam et odit a ipsum soluta nulla asperiores ducimus illum, harum porro explicabo. Nesciunt quod sit aliquam rem laudantium, quibusdam accusantium optio. Repellendus quisquam veritatis nulla dolores. Nihil alias animi ut, doloremque provident sint in asperiores repudiandae dicta velit, fugiat minima ipsum!",
      },
    ]);

    const showPosts = ref(true);
    return { posts, showPosts };
  },
};
</script>
