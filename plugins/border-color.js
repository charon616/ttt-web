import Vue from 'vue'

Vue.directive('border', {
  bind(el, binding, vnode) {
    el.style.borderColor = binding.value;
  }
})