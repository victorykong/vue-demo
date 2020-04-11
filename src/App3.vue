<template>
  <!-- 演示mixin -->
  <!-- <Mixin /> -->

  <!-- data 熟悉 -->
  <!-- <Example1 /> -->

  <!-- NextTick -->
  <!-- <NextTick /> -->

  <!-- 过滤器 -->
  <!-- <FilterC /> -->

  <!-- data -->
  <!-- <DataC /> -->

  <!-- props -->
  <!-- <PropsC /> -->

  <!-- computed -->
  <!-- <ComputedC /> -->

  <!-- watch -->
  <!-- <WatchC /> -->

  <!-- ref -->
  <RefC />
</template>

<script>
// import Mixin from "./SolveQuestion/Mixin";
// import Example1 from "./SolveQuestion/Example1";
// import NextTick from "./SolveQuestion/Example1/NextTick";
// import FilterC from "./SolveQuestion/Example1/FilterC";
// import DataC from "./SolveQuestion/Example1/DataC";
// import PropsC from "./SolveQuestion/Example1/Props/Father";

// import ComputedC from "./SolveQuestion/Example1/Computed/ComputedC";
// import WatchC from "./SolveQuestion/Example1/WatchC";

import RefC from "./SolveQuestion/Example1/RefC/RefC";
export default {
  name: "SolveQuestion",

  components: {
    // Mixin,
    // Example1,
    // NextTick,
    // FilterC,
    // DataC,
    // PropsC,
    // ComputedC,
    // WatchC,
    RefC
  }
};
</script>

<style scoped></style>
