<template>
  <div>
    <p>
      {{ c.dog.name }}
    </p>
    <button @click="changeValue">点我</button>
  </div>
</template>

<script>
export default {
  name: "WatchC",

  data() {
    return {
      a: 1,
      b: 2,
      c: {
        name: "victorykong",
        dog: {
          name: "wawa",
          age: 18
        }
      },
      d: 4,
      e: {
        f: {
          g: 5
        }
      }
    };
  },

  watch: {
    a(val, oldVal) {
      console.log(val, oldVal);
    },
    b: "watchB", // 监听的方法名
    // c 的所有属性均会被监听，类似于深监听(拷贝)
    c: {
      handler: "watchC",
      deep: false // 默认不是深监听，但是会触发页面渲染哦！！！！！！！
    },
    d: {
      handler: "watchD",
      immediate: true // watchD 会立即执行一次
    },
    ["c.dog.age"](val, oldVal) {
      console.log(val, oldVal);
    }
  },

  methods: {
    changeValue() {
      // this.a = 2;
      // this.b = 3;

      // 1.直接改c
      // this.c = {};
      // 2. 改深层次一点的值
      // this.c.dog.name = "wawawa~~~"; // 如果 deep 为 false则无法监听到

      this.c.dog.age = 0;
    },

    watchB(val, oldVal) {
      console.log(val, oldVal);
    },

    watchC(val, oldVal) {
      console.log(val, oldVal);
    },

    watchD(val, oldVal) {
      console.log("我被立马打印了");
      console.log(val, oldVal); // 第一次 oldVal 打印为 undefined
    }
  }
};
</script>
