// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const asideMenuConfig = [
  {
    name: '自主学习',
    icon: 'cascades',
    children: [
      {
        name: '拓展阅读',
        path: '/article/list',
      },
      {
        name: '视频专区',
        path: '/video/list',
      }
    ]
  },
  {
    name: '实验设计',
    path: '/experiment/list',
    icon: 'repair',
  },
  {
    name: '讨论专区',
    path: '/discuz/list',
    icon: 'question2',
    external: true,
    newWindow: true,
  }
];

const headerMenuConfig = asideMenuConfig;

export default headerMenuConfig;