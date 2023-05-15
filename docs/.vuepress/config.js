module.exports = {
    title: 'Taskmate Manual',
    description: 'Taskmate manual',
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }]
    ],
}

// 配置导航栏
module.exports = {
    themeConfig: {
        logo: '/logo.jpg',
        search: true,
        searchMaxSuggestions: 3,
        nav: [
            { text: 'Home', link: '/', target: '_self'},
            { text: 'Introduction', link: '/Introduction/' },
            {
                text: 'Manual',
                items: [
                    { text: 'Student', link: '/User/Student/' },
                    { text: 'Teacher', link: '/User/Teacher/' },
                    { text: 'FAQ', link: '/User/FAQ/'}
                ]
            },
            { text: 'Version', link: '/Version/' },
        ],
        sidebar: 'auto'
    }
}
