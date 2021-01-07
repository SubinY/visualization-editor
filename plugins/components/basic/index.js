import RCCard from './card'

const webPluginComponents = [
  RCCard
]

const install = function(Vue, opts = {}) {
  webPluginComponents.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  webPluginComponents
}
export default {
  install
}
