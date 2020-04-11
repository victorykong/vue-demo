<template>
  <div>
    <p ref="domP">
      普通的 dom el
    </p>
    <Sub ref="subC" />

    <p>
      <button @click="getRef">获取ref</button>
    </p>
    <p>
      <button @click="cleanInnerIptValue">clean</button>
    </p>
  </div>
</template>

<script>
import Sub from "./Sub";

export default {
  name: "RefC",
  data() {
    return {};
  },

  // created() {
  //   console.log(this.$refs.domP); // undefined - 在初始渲染的时候你不能访问它们 - 它们还不存在！
  // },

  // mounted() {
  //   console.log(this.$refs.domP); // get!
  // },

  methods: {
    getRef() {
      // console.dir(this.$refs.domP);

      console.log(this.$refs.subC); // $refs 可以再次获取到内部的ref

      this.$refs.subC.getMessage(); // 用 ref 的方式调用内部实例的方法
    },

    cleanInnerIptValue() {
      this.$refs.subC.$refs.domIpt.value = "";
    }
  },

  components: {
    Sub
  }
};
</script>
