<template>
  <div>
    <input type="text" v-model="val" />

    <!-- 这个 disabled 属性将不会渲染进DOM（undefined null false） -->
    <!-- html attribute 一般使用 :attr="" | v-bind:attr="" -->
    <!-- <button v-bind:id="'id'">按钮</button>
    <button :id="'id'">按钮</button> -->

    <!-- <a v-bind:href="'https://baidu.com'">点我</a> -->

    <!-- 注册事件 -->
    <p>
      <button @click="logHelloworld">打印 helloworld</button>
    </p>

    <p>
      <!-- 一段文本：{{
        this.reverseMsg
          .split("")
          .reverse()
          .join("")
      }} -->
      一段文本：{{ reverseMsg }}
    </p>

    <p>时间作为计算属性：{{ now }}</p>

    <!-- 样式切换 -->
    <p>
      <span :class="isDanger && 'text-danger'">文本文本文本文本</span>
      <button @click="toggleClass">切换样式</button>
    </p>

    <!-- 列表渲染 -->
    <ul>
      数组：
      <li v-for="(item, index) of items" :key="index">
        index: {{ index }} - value:{{ item.message }}
      </li>
    </ul>
    <ul>
      对象：
      <li v-for="(value, key, index) in object" :key="key">
        伪数组: {{ index }} - {{ key }} - {{ value }}
      </li>
    </ul>

    <!-- 验证是否会渲染 -->
    <p>arr str: {{ arrStr[0] }}</p>
    <p>
      <button @click="changeArr">改变数组</button>
    </p>

    <!-- 更新检测 -->
    <p>直接改变一个数组的长度： {{ arrTest.length }}</p>
    <p>动态为对象添加一个属性： {{ objTest.newVal }}</p>
    <p>
      <button @click="changeArr2">操作数组</button>
      <button @click="changeObj">操作对象</button>
    </p>

    <!-- 拿到 props -->
    <p>
      <Sub :propValue="subValue" />

      <button @click="changeSubValue">改变</button>
    </p>
  </div>
</template>

<script>
import Sub from "./Sub";
export default {
  components: {
    Sub,
  },
  name: "GrammarTest",
  data() {
    return {
      val: "text",
      msg: "被反转的文本",
      isDanger: false,
      items: [{ message: "Foo" }, { message: "Bar" }],
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      arrStr: [1, 2, 3, 4],
      arrTest: [0],
      objTest: {
        name: "zs",
      },

      subValue: 1,
    };
  },
  methods: {
    changeSubValue() {
      this.subValue = 2;
    },
    logHelloworld() {
      //   console.log(this); // 方法中拿 Vue 实例
      console.log("hello world");
    },
    toggleClass() {
      this.isDanger = !this.isDanger;
    },
    changeArr() {
      // 变异方法 (mutation method)
      this.arrStr.unshift(this.arrStr[0] - 1); // 会渲染和 react 的行为不一致
      // this.arrStr = [ 0,...this.arrStr] // react
    },
    changeArr2() {
      // this.arrTest.length = 100;

      this.arrTest = Array.from({ length: 100 }); // 只要引用改变即可触发更新
    },
    changeObj() {
      // this.objTest.newVal = "newVal";

      this.objTest = {
        // 也可以触发更新
        ...this.objTest,
        newVal: "新添加的",
      };
      // this.$set(this.objTest, "newVal", "新添加的"); // 将会触发更新
    },
  },
  // 计算属性: 减轻模板的复杂度
  computed: {
    reverseMsg() {
      return this.msg
        .split("")
        .reverse()
        .join("");
    },
    // 计算属性会缓存
    now() {
      return Date.now();
    },
  },

  watch: {
    // 如果 this.val 改变了, 那么这个函数将会执行
    val(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
    },
  },

  // 生命周期
  beforeCreate() {
    console.log("beforeCreate", this.val || "拿不到数据");
  },
  created() {
    console.log("created 可以访问数据了:", this.val);
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated", this.val);
  },

  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style scoped>
.text-danger {
  color: red;
}
</style>
