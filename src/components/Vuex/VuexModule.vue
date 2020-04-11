<template>
  <div>
    <!-- <p>
      root
      <span>count: {{ rootCount }}</span>
      <button @click="rootIncrement">改变 root count</button>
    </p> -->
    <hr />
    <p>
      store1
      <span>count: {{ store1Count }}</span>
      <!-- <button @click="increment1">改变 store1 count</button> -->
    </p>

    <hr />
    <!-- 
    <p>
      store2
      <span>count: {{ store2Count }}</span>
      <button @click="increment2">改变 store2 count</button>
    </p> -->

    <p>
      <!-- 通过 this 的方式访问 store -->
      <button @click="thisToStore">store</button>
    </p>

    <p>
      {{ data }}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    data: {
      type: Number,
      default: 0,
    },
  },
  created() {
    console.log(this.$store);
  },
  computed: {
    ...mapState({
      rootCount: (state) => state.count,
      store1Count: (state) => state.store1.count,
      store2Count: (state) => state.store2.count,
    }),
  },

  methods: {
    // ...mapMutations({
    //   rootIncrement: "increment",
    // }),
    // ...mapMutations("store1", {
    //   increment1: "increment",
    // }),
    // ...mapMutations("store2", {
    //   increment2: "increment",
    // }),

    thisToStore() {
      this.$store.commit("store1/increment");
    },
  },
};
</script>

<style scoped>
span {
  border: 1px solid red;
  padding: 10px;
}
</style>
