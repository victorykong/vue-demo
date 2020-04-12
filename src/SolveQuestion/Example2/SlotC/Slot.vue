<template>
  <div>
    <!-- 1. 普通插槽 -->
    <a :href="url">
      <!-- 需要插入内容的地方 -->
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "SlotSub",
  props: {
    url: {
      type: String
    },
    otherUrl: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>
