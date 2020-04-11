<template>
  <div class="container">
    mixin1
  </div>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "Mixin1",

  mixins: [mixin],

  created() {
    // 调用 mixin 中的方法
    this.hello();
  },

  mounted() {
    console.log("Slow ==> mounted from self!");
  },

  methods: {
    hello() {
      console.log("hello from self!"); // 优先输出
    }
  }
};
</script>

<style scoped>
.container {
  border: 1px solid red;
}
</style>
