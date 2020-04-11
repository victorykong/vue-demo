<template>
  <div>
    <p>
      <!-- {{ $data.$authorName }} -->

      {{ $data.$_authorName }}
    </p>
    <p>
      <button @click="_getName">点我</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "DataC",
  data() {
    return {
      // 1. 直接使用 _ 开头会导致报错无法运行
      // 2. $ 开头在模板中需要使用 $data.$xxx 访问
      //   $authorName: "victorykong",

      // 3. 私有属性名建议使用 $_ 开头(更建议是使用这种，因为 Vue 内部有大量 $ 开头的属性避免冲突)
      $_authorName: "victorykong"
    };
  },

  methods: {
    _getName() {
      //   console.log(this.$authorName); // undefined
      //   console.log(this.$data.$authorName); // victorykong
      //   console.log(this.$_authorName); // undefined
      //   console.log(this.$data.$_authorName); // victorykong
    }
  }
};
</script>
