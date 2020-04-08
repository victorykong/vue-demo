<template>
  <li>{{ title }} <button @click="$emit('remove')">移除</button></li>
</template>

<script>
export default {
  name: "List",
  props: ["title"],
  data() {
    return {};
  },
};
</script>

<style scoped></style>
