import { ADD_TODO, ADD_NAME } from "./mutations-type";

// import Vue from "vue";

export default {
  state: {
    count: 0,
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
    person: {
      age: 18,
    },
  },

  getters: {
    /**
     * 使得不用在多个组件间去写这段逻辑
     */
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
  },

  /**
   * 必须是同步的
   */
  mutations: {
    increment(state) {
      state.count++;
    },
    [ADD_TODO](state, payload) {
      /**
       * 以下两种情况都会触发 component updated
       */
      // state.todos.push(payload.newTodos);
      state.todos = [...state.todos, payload.newTodos]; // 个人更倾向
    },

    [ADD_NAME](state, payload) {
      /**
       * 以下注意:
       * (1)最好提前在你的 store 中初始化好所有所需属性。
       * (2)对象添加属性: Vue.set(obj, 'newProp', 123)  ||  {...}
       */
      // state.person.name = payload.name;

      const key = Object.keys(payload)[0];
      const value = Object.values(payload)[0];
      // Vue.set(state.person, ...Object.keys(payload), ...Object.values(payload));

      // 推荐:
      state.person = {
        ...state.person,
        [key]: value,
      };
    },
  },
};
