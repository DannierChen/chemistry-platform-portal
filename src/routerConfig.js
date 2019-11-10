// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Setting from './pages/Setting';
import Dashboard from './pages/Dashboard';
import Builder from './pages/Builder';
import ArticleList from './pages/ArticleList';
import ArticleDetail from './pages/ArticleDetail';
import VideoList from './pages/VideoList';
import VideoDetail from './pages/Video';

import ExperimentDetail from './pages/ExperimentDetail';
import ExperimentList from './pages/ExperimentList';

const routerConfig = [
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/builder',
    component: Builder,
  },
  {
    path: '/experiment/list',
    component: ExperimentList,
  },
  {
    path: '/setting',
    component: Setting,
  },
  {
    path: '/video/list',
    component: VideoList,
  },
  {
    path: '/video/detail/:videoId',
    component: VideoDetail,
  },
  {
    path: '/article/list',
    component: ArticleList,
  },
  {
    path: '/article/detail/:articleId',
    component: ArticleDetail,
  },
  {
    path: '/experiment/list',
    component: ExperimentList,
  },
  {
    path: '/experiment/detail/:experimentId',
    component: ExperimentDetail,
  },
  // {
  //   path: '/discuz/list',
  //   component: DiscuzList,
  // }
];

export default routerConfig;
