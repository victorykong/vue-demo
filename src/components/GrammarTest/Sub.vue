<template>
  <div>
    {{ propValue }}
  </div>
</template>

<script>
export default {
  name: "Sub",
  props: ["propValue"],


  //   watch: {
  //     propValue(newProps, oldProps) {
  //       console.log(newProps); // 2
  //       console.log(oldProps); // 1
  //     },
  //   },
};
</script>

<style scoped></style>
