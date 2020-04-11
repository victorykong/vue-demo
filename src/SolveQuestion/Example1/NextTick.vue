<template>
  <div>
    str:
    <span class="content">{{ str }}</span>
    <p>
      <button @click="changeStr">改变</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "NextTick",

  data() {
    return {
      str: "我是一个字符串"
    };
  },

  methods: {
    async changeStr() {
      const target = this.$el.querySelector(".content");
      const changeValue = "我被改变了";

      // 1.
      // this.str = changeValue;
      // console.log(target.textContent === changeValue); // false

      // 2.
      this.str = changeValue;

      // 内部的 this 将会自动绑定到当前组件实例上
      // this.$nextTick(function() {
      //   // 此时 dom 已经更新完毕
      //   console.log("nextTick log ==>", target.textContent === changeValue); // true
      // });

      // this.$nextTick(() => {
      //   console.log("nextTick log ==>", target.textContent === changeValue); // true
      // });

      // promise 形式
      // this.$nextTick()
      //   .then(() => {
      //     // throw new Error("故意抛出错误");
      //     console.log("nextTick log ==>", target.textContent === changeValue); // true
      //   })
      //   .catch(error => console.log(error));

      // async await
      await this.$nextTick();
      console.log("nextTick log ==>", target.textContent === changeValue); // true
    }
  }
};
</script>
