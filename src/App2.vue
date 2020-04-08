<template>
  <div id="app">
    <VuexModule />
    <!-- <VuexCom /> -->
    <!-- <GrammarTest /> -->
    <!-- <p>
      <input type="text" v-model="iptValue" />
      <button @click="addValue">加入</button>
    </p>

    <ul>
      <li
        is="List"
        v-for="(todo, index) of todos"
        :key="todo.id"
        :title="todo.title"
        @remove="todos.splice(index, 1)"
      ></li>
    </ul> -->
  </div>
</template>

<script>
// import GrammarTest from "./components/GrammarTest/GrammarTest";
// import List from "./components/List/List";

// import VuexCom from "./components/Vuex/Vuex";
import VuexModule from "./components/Vuex/VuexModule";

export default {
  name: "App",
  data() {
    return {
      // 文本框
      // iptValue: "",
      // 数据
      // todos: [
      //   {
      //     id: 1,
      //     title: "Do the dishes",
      //   },
      //   {
      //     id: 2,
      //     title: "Take out the trash",
      //   },
      //   {
      //     id: 3,
      //     title: "Mow the lawn",
      //   },
      // ],
      // nextId: 3,
    };
  },
  methods: {
    // 追加
    // addValue() {
    //   this.todos.push({
    //     id: ++this.nextId,
    //     title: this.iptValue,
    //   });
    //   this.iptValue = "";
    // },
  },

  components: {
    // GrammarTest,
    // List,
    // VuexCom,
    VuexModule,
  },
};
</script>

<style></style>
