<template>
  <div class='loading-wrapper'>
    <img src="./loading.gif" >
</div>
</template>

<script>
export default {
  props:{
    content:{
      type: String,
      default: "正在加载，请等待。。。"
    }
  }
 
}

</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import '~common/stylus/variable';
  .loading-wrapper
    text-align center
</style>