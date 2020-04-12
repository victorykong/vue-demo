<template>
  <div class="contanier">
    <!-- 专门放字符串的 -->
    <p>
      <slot name="string">我是默认的字符串</slot>
    </p>
    <!-- 默认专门放 bool 值的 -->
    <p>
      <slot>{{ true }} </slot>
    </p>

    <!-- 专门放数组的 -->
    <p>
      <slot name="array">{{ [1, 2, 3] }}</slot>
    </p>

    <!-- 专门放对象的 -->
    <p>
      <slot name="object"> {{ { name: "zs" } }}</slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "HaveNameSlot"
};
</script>

<style scoped>
.contanier {
  border: 1px dashed chocolate;
}
</style>
