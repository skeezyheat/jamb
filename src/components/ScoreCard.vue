<template>
  <div class="container">
    <div class="scorecard">
      <HeaderColumn/>
      <Column direction="down"/>
      <Column direction="neutral"/>
      <Column direction="up"/>
      <Column direction="call"/>
    </div>
  </div>
</template>

<script>
import HeaderColumn from "@/components/HeaderColumn.vue";
import Column from "@/components/Column.vue";
export default {
  name: "ScoreCard",
  components: {
    HeaderColumn,
    Column
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  .scorecard {
    display: flex;
    flex-direction: row;
    max-width: 310px;
    margin: 0 auto;
  }
}
</style>
