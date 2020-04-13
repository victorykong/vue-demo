<template>
  <div>
    <!-- <p> -->
    <!-- 1. 在当前页面直接使用 v-model dom 组件 -->
    <!-- <input type="text" v-model="val1" /> -->
    <!-- </p> -->
    <!-- <p>
      <button @click="clear">clear</button>
    </!-->

    <!-- <hr /> -->

    <!-- <p> -->
    <!-- 2. 在当前页面直接使用 change input dom 组件 -->
    <!-- 2.1 change 要输入完 blur 之后才会触发 -->
    <!-- <input type="text" :value="val2" @change="changeVal2" /> -->

    <!-- 2.2 实时输入 -->
    <!-- 参数 e  -->
    <!-- <input type="text" :value="val2" @input="changeVal2" /> -->
    <!-- <input type="text" :value="val2" @input="e => changeVal2(e)" /> -->

    <!-- 传递自己的参数 -->
    <!-- <input
        type="text"
        :value="val2"
        @input="e => changeVal2('我是第一个参数，event 需主动传递', e)"
      /> -->

    <!-- e 都是 undefined -->
    <!-- <input type="text" :value="val2" @input="() => changeVal2()" /> -->
    <!-- <input type="text" :value="val2" @input="changeVal2()" /> -->

    <!-- 不触发, because return function, not call -->
    <!-- <input type="text" :value="val2" @input="() => changeVal2" /> -->

    <!-- 报错 -->
    <!-- <input type="text" :value="val2" @input="changeVal2(e)" /> -->
    <!-- </!  -->

    <!-- <hr /> -->

    <p>
      <!-- 3. 在父组件使用 v-model 会导致默认传递 value prop 和 input 事件 -->
      <!-- ***** 公用的 input 组件内部不可能有data，就像 React 永远是把数据交还给业务方 ***** -->

      <input type="text" @input="subInput" />
      <!-- <input type="text" @input="subInput2" /> -->
    </p>
  </div>
</template>

<script>
export default {
  name: "DomC",

  props: {
    // 指定 required 会报错，未显式传递
    value: {
      type: String
      //   required: true
    },
    input: {
      type: Function
      //   required: true
    }
  },
  data() {
    return {};
  },

  methods: {
    subInput(e) {
      console.log("input >>>>> 我被父组件的 v-model 触发了");

      this.$emit("input", e.target.value);
    },

    // subInput2(e) {
    //   console.log("input222 >>>>> 我被父组件的 v-model 触发了");

    //   this.$emit("input", e.target.value);
    // },

    clear() {
      this.val1 = "";
    },
    changeVal2(val, e) {
      console.log(val);

      if (e) {
        console.log(e);
      }
    }
  }
};
</script>
