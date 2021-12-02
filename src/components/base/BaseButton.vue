<template>
  <div class="about">
    <button class="btn btn__neon"><slot> </slot></button>
  </div>
</template>

<style  lang="scss">
.btn {
  @include headline6();
  font-size: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-position: 0 -100% !important;
  &:hover {
    background-position: 0 -33% !important;
  }
  &__neon {
    text-align: center;
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(204, 0, 0, 0.8);
    height: 84px;
    width: 200px;
    background: url("../../assets/btn-neon-rectangular.png") 0 0/200px;
  }
}
</style>