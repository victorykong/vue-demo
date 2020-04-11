/**
 * 有重复的将会进行合并，当然组件的优先
 */

export default {
  // name: "mixin", // 一般不需要指定

  created() {
    console.log("created from mixin!");
  },

  // 钩子将会合并为一个数组依次调用，顺序：mixin => 组件
  mounted() {
    console.log("Fast ==> mounted from mixin!");
  },

  methods: {
    hello: function() {
      console.log("hello from mixin!");
    }
  }
};
