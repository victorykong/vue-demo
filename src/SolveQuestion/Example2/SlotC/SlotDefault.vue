<template>
  <div>
    <!-- <slot>我是默认显示的内容</slot> -->

    <slot>
      <div>我是默认内容</div>
      <SayHello />
    </slot>
  </div>
</template>

<script>
import SayHello from "./SayHello";
export default {
  name: "SlotDefault",
  components: {
    SayHello
  }
};
</script>
