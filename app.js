const app = Vue.createApp({
  data() {
    return {
      title: 'The Final Empire',
      age: 24,
    }
  },
  methods: {
    changeTitle() {
      this.title += '🐱‍👤'
    },
    changeTitle2(title) {
      this.title = title;
    }
  }
});

app.mount('#app');