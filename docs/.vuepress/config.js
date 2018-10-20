module.exports = {
  title: 'Algorithm Book',
  description: 'My Algorithm Notes',
  ga: 'UA-124632979-2',
  base: '/LintCode',
  themeConfig: {
    head: [
      [{ serviceWorker: true }],
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: '排序算法', link: '/sort/' },
      { text: '二分法', link: '/binarysearch/' },
    ],
    sidebar: [
      '/',
      '/sort/',
      '/binarysearch/'
    ],
    lastUpdated: '最后更新时间',
    serviceWorker: {
      updatePopup: true
    },
    repo: 'https://github.com/Kexin-Li/LintCode',
    repoLabel: 'Github',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '在 Github 上编辑此页面'
  }
}