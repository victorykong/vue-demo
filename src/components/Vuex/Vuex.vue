<template>
  <div>
    <p>count: {{ count }}</p>
    <p>{{ otherVal }}</p>
    <p>{{ todos }}</p>
    <!-- <p>{{ doneTodos }}</p> -->
    <p>
      <button @click="addTodos">触发mutations</button>
    </p>

    <p>
      {{ person }}
    </p>
    <p>
      <button @click="addObjName">为 store 中的对象添加属性</button>
    </p>

    <p>
      <button @click="incrementAsync2">异步修改 count</button>
    </p>
  </div>
</template>

<script>
// 不需要使用到辅助函数, this.$store 会反应 vuex 中所有的信息
import { mapState, mapGetters, mapActions } from "vuex";

import { ADD_TODO, ADD_NAME } from "../../vuex/mutations-type";

export default {
  updated() {
    console.log("updated");
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  // },

  // computed: mapState({
  //   count: (state) => state.count,
  // }),

  // computed: mapState(["count"]), // 相当于挂载到 props 上, 可以通过 this.count 获取

  // 避免使用不了其它的 computed 属性
  computed: {
    otherVal() {
      return "我不是store的";
    },
    // doneTodos() {
    //   return this.$store.getters.doneTodos;
    // },
    ...mapState(["count", "todos", "person"]),
    ...mapGetters(["doneTodos"]),
  },

  methods: {
    // ...mapMutations({
    //   addTodos: ADD_TODO, // 相当于 this.addTodos => this.$store.commit('ADD_TODO')
    // }),

    addTodos() {
      this.$store.commit(ADD_TODO, {
        newTodos: { id: 3, text: "...", done: false },
      });
    },

    addObjName() {
      // this.$store.commit(ADD_NAME, { name: "victorykong" });
      this.$store.commit(ADD_NAME, { name: "victorykong" });
    },

    ...mapActions(["incrementAsync2"]),

    // incrementAsync() {
    //   this.$store.dispatch("incrementAsync");
    // },
  },
};
</script>

<style scoped></style>>
