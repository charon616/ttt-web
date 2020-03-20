import Vue from 'vue'

Vue.directive('bg', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = binding.value;
  }
})