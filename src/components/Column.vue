<template>
  <div class="col">
    <!-- Header -->
    <div class="cell">
      <font-awesome-icon v-if="direction === 'up'|| direction === 'neutral'" icon="arrow-up"/>
      <font-awesome-icon v-if="direction === 'down'|| direction === 'neutral'" icon="arrow-down"/>
      <span v-if="direction === 'call'">Call</span>
    </div>

    <!-- 1 -->
    <div class="cell">
      <input type="text">
    </div>

    <!-- 2 -->
    <div class="cell">
      <input type="text">
    </div>

    <!-- 3 -->
    <div class="cell">
      <input type="text">
    </div>
    <!-- 4 -->
    <div class="cell">
      <input type="text">
    </div>

    <!-- 5 -->
    <div class="cell">
      <input type="text">
    </div>

    <!-- 6 -->
    <div class="cell">
      <input type="text">
    </div>

    <div class="cell">
      <span>{{total([1,2,3,4,5,6])}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Column",
  props: ["direction"],
  data() {
    return {
      numbers: [],
      minMax: [],
      bigStuff: []
    };
  },
  methods: {
    total(arr) {
      let counter = 0;
      for (let num of arr) {
        counter += num;
      }

      return counter;
    }
  }
};
</script>

<style>
</style>
