<template lang="">
    <div class="linear-loader red">
        <div></div>
        <div></div>
    </div>
</template>
<script>

export default {};
</script>
<style lang="css">
.linear-loader {
  overflow: hidden;
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  z-index: -1;
}
.linear-loader div:nth-child(1) {
  position: absolute;
  left: 0;
  transform: translateX(-100%);
  height: 100%;
  width: 30%;
  background-color: #fafafa;
  animation: anim1 3s cubic-bezier(0.49, 0.7, 0.7, 0.35) infinite, anim2 2s ease-in-out infinite;
}
.linear-loader div:nth-child(2) {
  content: "";
  left: 0;
  transform: translateX(-100%);
  position: absolute;
  height: 100%;
  width: 30%;
  background-color: #fafafa;
  animation: anim1 3s cubic-bezier(0.49, 0.7, 0.7, 0.35) infinite, anim2 3.5s ease-in-out infinite;
  animation-delay: 1.3s;
}

.linear-loader.red {
  background-color: rgba(248, 140, 33, 0.2);
}
.linear-loader.red div:nth-child(1) {
  background-color: #F88C21;
}
.linear-loader.red div:nth-child(2) {
  background-color: #F88C21;
}

@keyframes anim1 {
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  55% {
    left: 100%;
    transform: translateX(0%);
  }
  100% {
    left: 100%;
    transform: translateX(0%);
  }
}
@keyframes anim2 {
  0% {
    width: 30%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 30%;
  }
}
</style>

