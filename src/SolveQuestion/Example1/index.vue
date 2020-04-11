<template>
  <div>
    <p>number：{{ num }}</p>
    <p>str：{{ str }}</p>
    <p>bool：{{ bool }}</p>
    <p>arr：{{ arr }}</p>
    <p>obj：{{ obj }}</p>

    <div>
      <button @click="changeObj">测试</button>

      <button @click="changeObj2">继续测试</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Example1",

  data() {
    return {
      num: 1,
      str: "1",
      bool: false,
      arr: [1],
      obj: {
        name: "zs"
      }
    };
  },

  /**
   * Observer
   */
  methods: {
    // changeNum() {
    //   this.num = this.num + 1;
    //   console.log(this.num);
    // }
    // changeStr() {
    //   this.str = "2";
    //   console.log(this.str);
    // }
    // changeBool() {
    //   this.bool = !this.bool;
    //   console.log(this.bool);
    // }
    // changeArr() {
    //   this.arr.push(2); // 因为你修改了 data 中已经被数据追踪的 arr
    //   this.arr = 1; // ok
    //   this.arr = this.arr.map(x => x + 1); // return new arr
    //   this.arr = [...this.arr, 2];
    //   console.log(this.arr);
    // }

    changeObj() {
      //   this.obj.name = "ls"; // ok
      //    ok
      //   this.obj = { name: "ls" };
      //   this.obj = { ...this.obj, name: "ls" };

      //   this.obj.age = 18; // { age:18, (Observer) name:'zs' }
      // 如果说你想给对象动态添加一个属性并拥有 data 的数据追踪，就必须使用 set
      //   this.$set(this.obj, "age", 18);

      // delete
      //   delete this.obj.name;
      //   this.$delete(this.obj, "name");


      console.log(this.obj);
    },

    changeObj2() {
      console.log(this.obj);
    }
  }
};
</script>

<style scoped>
p {
  border-bottom: 1px solid red;
}
</style>
