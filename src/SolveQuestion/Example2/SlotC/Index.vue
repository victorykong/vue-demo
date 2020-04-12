<template>
  <div>
    <!-- 1. 使用普通插槽 -->
    <SlotSub url="https://victorykong.cn">
      欢迎来到我的主页
    </SlotSub>

    <hr />

    <!-- 1.1 包含任何 html 模板 或者是自己的组件 -->
    <SlotSub url="https://victorykong.cn">
      <SayHello />
      <div>
        欢迎来到我的主页
      </div>
    </SlotSub>

    <hr />

    <!-- 2. 作用域插槽 -->
    <!-- otherUrl is undefined, 原因是因为这个 otherUrl 是传递给 SlotSub 的，而不是在 Index 中定义的-->
    <!-- <SlotSub otherUrl="https://victorykong.cn">
      This otherUrl is: {{ otherUrl }}
    </SlotSub> -->

    <!-- 2.1 父组件中定义的data 可以正常访问 -->
    <SlotSub :url="url"> This url is: {{ url }} </SlotSub>

    <hr />

    <!-- 3. 插槽的默认内容 -->
    <SlotDefault>我不想要默认内容啦</SlotDefault>

    <hr />

    <!-- 4. 具名插槽：指定渲染的位置（不按照顺序写都可以） -->
    <!-- v2.6 的写法 -->
    <HaveNameSlot>
      <template v-slot:object>
        {{ { name: "victorykong~~" } }}
      </template>
      <template v-slot:array>
        {{ [888] }}
      </template>
      <template v-slot:string>
        我被修改了
      </template>
      <template v-slot: default>
        {{ false }}
      </template>
    </HaveNameSlot>

    <!-- v2 -->
    <!-- 4.1 写在 template 上，用字符串 -->
    <!-- <HaveNameSlot>
      <template slot="object">
        {{ { name: "victorykong~~" } }}
      </template>
      <template slot="array">
        {{ [888] }}
      </template>
      <template slot="string">
        我被修改了
      </template>
      <template slot="default">
        {{ false }}
      </template>
    </HaveNameSlot> -->

    <!-- 4.2 写在普通元素上，从这个普通元素开始被插入 -->
    <!-- <HaveNameSlot>
      <span slot="object">
        {{ { name: "victorykong~~" } }}
      </span>
      <span slot="array">
        {{ [888] }}
      </span>
      <span slot="string">
        我被修改了
      </span>
      <span slot="default">
        {{ false }}
      </span>
    </HaveNameSlot> -->

    <hr />

    <!-- 5.作用域插槽 -->
    <!-- 我们要访问 default 模块的 slot 传递出来的插槽 props slotScope. 点出来 -->
    <!-- <ScopeSlot v-slot:default="slotScope">
      {{ slotScope.array[1] }}
    </ScopeSlot> -->

    <!-- v2 写法 -->
    <!-- <ScopeSlot>
      <template slot="default" slot-scope="slotScope">
        {{ slotScope.array[1] }}
      </template>
    </ScopeSlot> -->

    <ScopeSlot>
      <template slot="default" slot-scope="{ array }">
        {{ array[1] }}
      </template>
    </ScopeSlot>
  </div>
</template>

<script>
import SlotSub from "./Slot";
import SayHello from "./SayHello";
import SlotDefault from "./SlotDefault";
import HaveNameSlot from "./HaveNameSlot";
import ScopeSlot from "./ScopeSlot";

export default {
  name: "SlotIndex",
  data() {
    return {
      url: "https://victorykong.cn"
    };
  },

  components: {
    SlotSub,
    SayHello,
    SlotDefault,
    HaveNameSlot,
    ScopeSlot
  }
};
</script>
