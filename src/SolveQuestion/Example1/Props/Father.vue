<template>
  <Sub :message="message" />
</template>

<script>
import Sub from "./Sub";

export default {
  name: "Father",

  data() {
    return {
      message: "来自父元素的文本"
    };
  },

  components: {
    Sub
  }
};
</script>
