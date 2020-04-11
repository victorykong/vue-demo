<template>
  <div>
    <p>
      {{ message }}
    </p>

    <!-- 出现了就不对 所以要限制必传!! -->
    <p v-if="!message">
      不应该出现
    </p>
  </div>
</template>

<script>
export default {
  name: "Sub",

  // easy 接收
  //   props: ["message"],

  props: {
    message: {
      type: String, // 指定类型否则报错提示
      default: "我是默认值",
      required: true, // 是否必传 ==> Missing required prop: "message"
      // val: props 传递的值
      validator(val) {
        const Limit = 8;
        const isSuccess = val.length <= Limit;
        return isSuccess;

        // return false; // 并不会导致不会渲染，而是界面提示
      }
    }
  },

  data() {
    return {};
  }
};
</script>

<style scoped>
.err-style {
  color: red;
}
</style>
