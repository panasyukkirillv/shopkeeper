<template>
  <div class="loader"></div>
</template>

<style scoped lang="scss">

.loader {
  width: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: loaderAnimation 1s infinite linear alternate;
  background: $color-primary-600;
}

@keyframes loaderAnimation {
  0%  {box-shadow: 20px 0 rgba(37, 99, 235, 1), -20px 0 rgba(37, 99, 235, .1); background: rgba(37, 99, 235, 1) }
  33% {box-shadow: 20px 0 rgba(37, 99, 235, 1), -20px 0 rgba(37, 99, 235, .1); background: rgba(37, 99, 235, .1)}
  66% {box-shadow: 20px 0 rgba(37, 99, 235, .1),-20px 0 rgba(37, 99, 235, 1);  background: rgba(37, 99, 235, .1)}
  100%{box-shadow: 20px 0 rgba(37, 99, 235, .1),-20px 0 rgba(37, 99, 235, 1);  background: rgba(37, 99, 235, 1) }
}

</style>
