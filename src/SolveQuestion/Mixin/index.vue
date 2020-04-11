<template>
  <div>
    <Mixin1 />
    <hr />
    <Mixin2 />
  </div>
</template>

<script>
import Mixin1 from "./Mixin1";

export default {
  name: "Mixin",

  components: {
    Mixin1
  }
};
</script>

<style scoped></style>
