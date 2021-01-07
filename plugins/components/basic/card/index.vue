<template>
  <div>
    <a-switch default-checked @change="onChange" />
    {{text}}
    {{imgSrc}}
    <!-- <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch> -->
  </div>
</template>

<script>
// import { Switch } from 'element-ui';
// import Switch from 'ant-design-vue/lib/switch';
// import 'ant-design-vue/lib/switch/style';
import PropTypes from '@luban-h5/plugin-common-props';
export default {
  name: 'rcCard',
  components: {
    // elSwitch: Switch
  },
  props: {
    text: PropTypes.string(),
    imgSrc: {
      type: String,
      default: '',
      visible: true,
      editor: {
        type: 'test',
        label: '测试',
        props: {}
      },
    },
  },
  data() {
    return {
      value: true,
    };
  },
  watch: {
  },
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
  },
};
</script>

<style lang='scss'>
</style>
