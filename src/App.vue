<template>
  <div>
    <div class="menu">
      <p>
        <router-link to="router1">router1</router-link>
      </p>
      <p>
        <router-link to="router2">router2</router-link>
      </p>
    </div>

    <hr />

    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-around;
}
</style>
