import webPluginInstall, { webPluginComponents } from 'webPluginComp';
// 组件属性面板注册
const files = require.context(
  '../../../../plugins/components/basic',
  true,
  /.vue$/,
);

// web组件列表
const webComMap = {
  rcCard: {
    i18nTitle: {
      'en-US': 'test',
      'zh-CN': '测试',
    },
    title: '测试',
    icon: 'line-chart',
    visible: true,
  },
};

// 所有组件列表
const componentsList = [...webPluginComponents];

const webPluginList = [];
componentsList.map(c => {
  if (webComMap[c.name]) {
    webComMap[c.name] = {
      ...webComMap[c.name],
      name: c.name,
      component: c,
    };
    webPluginList.push(webComMap[c.name]);
  } else {
    console.error(`+++++++++++${c.name} can not fount +++++++++++`);
  }
});

export { webPluginList, webPluginInstall };
