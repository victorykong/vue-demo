<template>
  <div>
    <count />
  </div>
</template>

<script>
import count from "./count.vue";

export default {
  destroyed() {
    console.log("router1 destroyed");
  },

  /**
   * keep-alive 会触发的钩子
   */
  activated() {
    console.log("router1 activated");
  },
  deactivated() {
    console.log("router1 deactivated");
  },

  components: {
    count
  }
};
</script>

<style scoped></style>
