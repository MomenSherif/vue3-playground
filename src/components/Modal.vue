<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot>Default content if slot is not provided</slot>
      <div class="actions">
        <slot name="links" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["header", "text", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style >
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

.modal.sale {
  background-color: crimson;
  color: #fff;
}

.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}

.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}

.modal.sale h1,
.modal.sale .actions,
.modal.sale .actions a {
  color: #fff;
}
</style>