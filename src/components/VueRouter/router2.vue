<template>
  <div>
    router2
  </div>
</template>

<script>
export default {
  destroyed() {
    console.log("router2 destroyed");
  },

  /**
   * keep-alive 会触发的钩子
   */
  activated() {
    console.log("router2 activated");
  },
  deactivated() {
    console.log("router2 deactivated");
  }
};
</script>

<style scoped></style>
