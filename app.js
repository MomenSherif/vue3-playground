const app = Vue.createApp({
  data() {
    return {
      url: 'https://www.google.com',
      books: [
        { title: '📘', author: '🐱‍👤', isFav: true },
        { title: '📗', author: '🐱‍🐉', isFav: false },
        { title: '📕', author: '🐱‍🚀', isFav: true },
      ],
    }
  },
  methods: {

  }
});

app.mount('#app');