<template>
  <div>
    <p>data: {{ name }}</p>
    <p>计算属性: {{ cacheName }}</p>

    <p>
      <button @click="setNameToGetCacheName">改变</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "ComputedC",

  data() {
    return {
      name: "zs"
    };
  },

  computed: {
    cacheName() {
      console.log("我的依赖项改变了，所以我重新计算啦");
      return this.name + "$$$";
    }
  },

  methods: {
    setNameToGetCacheName() {
      this.name = "我被改变了"; // 触发 computed 的 cacheName 重新计算
    }
  }
};
</script>
