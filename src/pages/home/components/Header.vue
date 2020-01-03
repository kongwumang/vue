<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe606;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe6aa;</span>输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市<span class="iconfont arrow">&#xe638;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
  display flex
  line-height:$headerHeight
  background:$bgColor
  color: #fff
  .header-left
    width  .64rem
    padding-right: .2rem
    .back-icon
      line-height  .86rem
      text-align  center
      font-size  .4rem
  .header-input
    .back-icon
      text-align center
      font-size .4rem
    flex 1
    line-height  .62rem
    margin: .12rem 0
    padding-left: .19rem
    background  #fff
    border-radius  .05rem
    color  #ccc
  .header-right
    width  1rem
    padding-left  .125rem
    padding-right  .15rem
    line-height  .86rem
    text-align center
    font-size .29rem
</style>
