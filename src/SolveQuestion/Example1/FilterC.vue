<template>
  <div>
    <!-- 使用过滤器过滤 message -->
    <p>str: {{ message | filterTodos | againHandle }}</p>
    <!-- 每一次渲染都将会经过这两个过滤器 -->

    <p>
      <button @click="setNewStr">测试</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "FilterC",
  data() {
    return {
      message: "转反被要需我"
    };
  },

  filters: {
    filterTodos(message) {
      // console.log(message);

      // 将处理好的返回回去
      return message
        .split("")
        .reverse()
        .join("");
    },

    againHandle(filterResult) {
      // 将第一个过滤器的结果作为第二个过滤的参数
      // console.log(filterResult);
      return filterResult.substring(1);
    }
  },

  methods: {
    setNewStr() {
      this.message = "我被改变了";
    }
  }
};
</script>
