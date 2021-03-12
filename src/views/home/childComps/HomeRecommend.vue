<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item" >
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="recommend-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      } 
    }
  }
};
</script>

<style  scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 14px;
  }
  .recommend-item, .recommend-text{
    flex: 1;
    /* margin-left: 8px; */
  }
  .recommend img {
    width: 80px;
    margin-bottom: 5px;
  }
</style>