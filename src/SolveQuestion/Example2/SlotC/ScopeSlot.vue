<template>
  <div>
    <!-- 插槽 props，让父级可以访问内部 -->
    <slot :array="array">
      {{ array[0] }}
    </slot>
  </div>
</template>

<script>
export default {
  name: "ScopeSlot",

  data() {
    return {
      array: [1, 2, 3]
    };
  }
};
</script>
