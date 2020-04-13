<template>
  <div>
    <!-- dom  -->
    <DomC v-model="domCValue" />
  </div>
</template>

<script>
import DomC from "./DomC";
export default {
  name: "VModalC",
  data() {
    return {
      domCValue: ""
    };
  },

  methods: {},

  components: {
    DomC
  }
};
</script>
