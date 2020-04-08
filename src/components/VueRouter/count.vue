<template>
  <div>
    {{ count }}
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },

  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>

<style scoped></style>
