<template>
  <div>
    <keep-alive>
      <count />
    </keep-alive>
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
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },

  components: {
    count,
  },
};
</script>

<style scoped></style>
