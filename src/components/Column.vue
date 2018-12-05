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
      <input
        type="number"
        min="0"
        v-if="direction === 'up'"
        :disabled="!numbers[1]"
        @blur="addToArr($event.target.value, numbers, 0)"
      >
      
      <input type="number" min="0" v-else @blur="addToArr($event.target.value, numbers, 0)">
    </div>

    <!-- 2 -->
    <div class="cell">
      <input
        type="number"
        min="0"
        v-if="direction === 'down'"
        :disabled="!numbers[0]"
        @blur="addToArr($event.target.value, numbers, 1)"
      >
      
      <input
        type="number"
        min="0"
        v-else-if="direction === 'up'"
        :disabled="!numbers[2]"
        @blur="addToArr($event.target.value, numbers, 1)"
      >
      
      <input type="number" min="0" v-else @blur="addToArr($event.target.value, numbers, 1)">
    </div>

    <!-- 3 -->
    <div class="cell">
      <input
        type="number"
        min="0"
        v-if="direction === 'down'"
        :disabled="!numbers[1]"
        @blur="addToArr($event.target.value, numbers, 2)"
      >
      
      <input
        type="number"
        min="0"
        v-else-if="direction === 'up'"
        :disabled="!numbers[3]"
        @blur="addToArr($event.target.value, numbers, 2)"
      >
      
      <input type="number" min="0" v-else @blur="addToArr($event.target.value, numbers, 2)">
    </div>
    <!-- 4 -->
    <div class="cell">
      <input
        type="number"
        min="0"
        v-if="direction === 'down'"
        :disabled="!numbers[2]"
        @blur="addToArr($event.target.value, numbers, 3)"
      >
      
      <input
        type="number"
        min="0"
        v-else-if="direction === 'up'"
        :disabled="!numbers[4]"
        @blur="addToArr($event.target.value, numbers, 3)"
      >
      
      <input type="number" min="0" v-else @blur="addToArr($event.target.value, numbers, 3)">
    </div>

    <!-- 5 -->
    <div class="cell">
      <input
        type="number"
        min="0"
        v-if="direction === 'down'"
        :disabled="!numbers[3]"
        @blur="addToArr($event.target.value, numbers, 4)"
      >
      
      <input
        type="number"
        min="0"
        v-else-if="direction === 'up'"
        :disabled="!numbers[5]"
        @blur="addToArr($event.target.value, numbers, 4)"
      >
      
      <input type="number" min="0" v-else @blur="addToArr($event.target.value, numbers, 4)">
    </div>

    <!-- 6 -->
    <div class="cell">
      <input
        type="number"
        min="0"
        v-if="direction === 'down'"
        :disabled="!numbers[4]"
        @blur="addToArr($event.target.value, numbers, 5)"
      >
      
      <input
        type="number"
        min="0"
        v-else-if="direction === 'up'"
        :disabled="!minMax[0]"
        @blur="addToArr($event.target.value, numbers, 5)"
      >
      
      <input type="number" min="0" v-else @blur="addToArr($event.target.value, numbers, 5)">
    </div>

    <!-- Number Total -->
    <div class="cell">
      <span>{{totalNum()}}</span>
    </div>

    <!-- Min -->
    <div class="cell">
      <input
        type="number"
        min="0"
        v-if="direction === 'down'"
        :disabled="!numbers[5]"
        @blur="addToArr($event.target.value, minMax, 0)"
      >
      
      <input
        type="number"
        min="0"
        v-else-if="direction === 'up'"
        :disabled="!minMax[1]"
        @blur="addToArr($event.target.value, minMax, 0)"
      >
      
      <input type="number" min="0" v-else @blur="addToArr($event.target.value, minMax, 0)">
    </div>

    <!-- Max -->
    <div class="cell">
      <input
        type="number"
        min="0"
        v-if="direction === 'down'"
        :disabled="!minMax[0]"
        @blur="addToArr($event.target.value, minMax, 1)"
      >
      
      <input
        type="number"
        min="0"
        v-else-if="direction === 'up'"
        :disabled="!bigStuff[0]"
        @blur="addToArr($event.target.value, minMax, 1)"
      >
      
      <input type="number" min="0" v-else @blur="addToArr($event.target.value, minMax, 1)">
    </div>

    <!-- Min Max Total -->
    <div class="cell">
      <span>{{totalMinMax()}}</span>
    </div>

    <!-- Straight -->
    <div class="cell">
      <input
        type="number"
        min="0"
        v-if="direction === 'down'"
        :disabled="!minMax[1]"
        @blur="addToArr($event.target.value, bigStuff, 0)"
      >
      
      <input
        type="number"
        min="0"
        v-else-if="direction === 'up'"
        :disabled="!bigStuff[1]"
        @blur="addToArr($event.target.value, bigStuff, 0)"
      >
      
      <input type="number" min="0" v-else @blur="addToArr($event.target.value, bigStuff, 0)">
    </div>

    <!-- Full House -->
    <div class="cell">
      <input
        type="number"
        min="0"
        v-if="direction === 'down'"
        :disabled="!bigStuff[0]"
        @blur="addToArr($event.target.value, bigStuff, 1)"
      >
      
      <input
        type="number"
        min="0"
        v-else-if="direction === 'up'"
        :disabled="!bigStuff[2]"
        @blur="addToArr($event.target.value, bigStuff, 1)"
      >
      
      <input type="number" min="0" v-else @blur="addToArr($event.target.value, bigStuff, 1)">
    </div>

    <!-- Four -->
    <div class="cell">
      <input
        type="number"
        min="0"
        v-if="direction === 'down'"
        :disabled="!bigStuff[1]"
        @blur="addToArr($event.target.value, bigStuff, 2)"
      >
      
      <input
        type="number"
        min="0"
        v-else-if="direction === 'up'"
        :disabled="!bigStuff[3]"
        @blur="addToArr($event.target.value, bigStuff, 2)"
      >
      
      <input type="number" min="0" v-else @blur="addToArr($event.target.value, bigStuff, 2)">
    </div>

    <!-- Yahtzee -->
    <div class="cell">
      <input
        type="number"
        min="0"
        v-if="direction === 'down'"
        :disabled="!bigStuff[2]"
        @blur="addToArr($event.target.value, bigStuff, 3)"
      >
      
      <input type="number" min="0" v-else @blur="addToArr($event.target.value, bigStuff, 3)">
    </div>

    <div class="cell">
      <span>{{totalBigStuff(bigStuff)}}</span>
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
    addToArr(num, arr, index) {
      num = +num;
      this.$set(arr, index, num);
    },
    totalNum() {
      let counter = 0;
      for (let num of this.numbers) {
        counter += num;
      }

      return counter >= 60 ? counter + 30 : counter;
    },
    totalMinMax() {
      let multiplier = this.numbers[0] || 1;
      let max = this.minMax[0] || 0;
      let min = this.minMax[1] || 0;

      return (max - min) * multiplier;
    },
    totalBigStuff() {
      const straight = this.bigStuff[0] || 0;
      const full = this.bigStuff[1] ? this.bigStuff[1] + 30 : 0;
      const four = this.bigStuff[2] ? this.bigStuff[2] + 40 : 0;
      const yahtzee = this.bigStuff[3] ? this.bigStuff[3] + 50 : 0;

      return straight + full + four + yahtzee;
    }
  }
};
</script>

<style scoped lang="scss">
.col {
  .cell {
    input {
      width: 40px;
      text-align: center;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}
</style>
