// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const asideMenuConfig = [{
  name: '首页',
  path: '/dashboard',
  icon: 'home2',
}, {
  name: '自主学习',
  path: '/builder',
  icon: 'cascades',
}, {
  name: '视频',
  path: '/task',
  icon: 'repair',
}, {
  name: '讨论专区',
  path: 'https://github.com/alibaba/ice/issues/new',
  icon: 'question2',
  external: true,
  newWindow: true,
}, ];

const headerMenuConfig = asideMenuConfig;

export default headerMenuConfig;