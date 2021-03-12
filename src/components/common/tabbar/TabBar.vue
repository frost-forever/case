<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style  scoped>
#tab-bar {
  display: flex;
  background-color: #ffff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(107, 105, 105, 0.5);
  z-index: 11;
}
</style>