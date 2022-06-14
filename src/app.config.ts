export default {
  pages: ['pages/detail/index', 'pages/user-center/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#000000',
    selectedColor: '#000000',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/detail/index',
        text: '明细',
      },
      {
        pagePath: 'pages/user-center/index',
        text: '我的',
      },
    ],
  },
  usingComponents: {},
}
