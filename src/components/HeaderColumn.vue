<template>
  <div class="col">
    <div class="cell">
      <span>JAMB</span>
    </div>
    <div class="cell">
      <span>1</span>
    </div>
    <div class="cell">
      <span>2</span>
    </div>
    <div class="cell">
      <span>3</span>
    </div>
    <div class="cell">
      <span>4</span>
    </div>
    <div class="cell">
      <span>5</span>
    </div>
    <div class="cell">
      <span>6</span>
    </div>
    <div class="cell">
      <span>Total</span>
    </div>
    <div class="cell">
      <span>Min</span>
    </div>
    <div class="cell">
      <span>Max</span>
    </div>
    <div class="cell">
      <span>Total</span>
    </div>
    <div class="cell">
      <span>S</span>
    </div>
    <div class="cell">
      <span>F</span>
    </div>
    <div class="cell">
      <span>P</span>
    </div>
    <div class="cell">
      <span>Y</span>
    </div>
    <div class="cell">
      <span>Total</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderColumn"
};
</script>

<style lang="scss">
.col {
  display: flex;
  flex-direction: column;

  .cell {
    border: 1px solid #000;
    text-align: center;
    padding: 5px;
  }
}
</style>
