<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" 
    class="tab-control-item" :class="{active: index === currentIndex}">
       <span @click="spanClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    spanClick(index) {
      this.currentIndex = index
    }
  }
};
</script>

<style  scoped>
  .tab-control {
    display: flex;
    text-align: center;
  }
  .tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item span {
    padding-bottom: 5px;
  }
  .active {
    color: var(--color-high);
    
  }
  .active span {
    border-bottom: solid var(--color-tint) 3px;
  }
</style>