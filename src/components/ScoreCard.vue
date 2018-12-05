<template>
  <div class="scorecard">
    <HeaderColumn/>
  </div>
</template>

<script>
import HeaderColumn from "@/components/HeaderColumn.vue";
export default {
  name: "ScoreCard",
  components: {
    HeaderColumn
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scorecard {
  display: flex;
  flex-direction: row;
}
</style>
