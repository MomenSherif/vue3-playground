<template>
  <div class="backdrop">
    <div class="modal">
      <p>modal content</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
}
</script>

<style>
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

</style>