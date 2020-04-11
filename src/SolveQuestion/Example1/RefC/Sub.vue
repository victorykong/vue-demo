<template>
  <div>
    <p ref="domP">
      {{ msg }}
    </p>
    <p>
      {{ message }}
    </p>
    <p>
      <input type="text" ref="domIpt" />
    </p>
  </div>
</template>

<script>
export default {
  name: "Sub",

  props: {
    msg: {
      default: "父组件传递"
    }
  },
  data() {
    return {
      message: "欢迎参观~~"
    };
  },

  methods: {
    getMessage() {
      console.log(this.message);
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
