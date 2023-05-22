module.exports = {
    title: 'Taskmate Manual',
    description: 'an open source grading desktop application with synchronisation capabilities for Windows and MacOS',
    head: [
        ['link', { rel: 'icon', href: '/icon.ico' }]
    ],
}

// 配置导航栏
module.exports = {
    themeConfig: {
        logo: '/icon.ico',
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
                    // { text: 'FAQ', link: '/User/FAQ/'}
                ]
            },
            { text: 'Version', link: '/Version/' },
        ],
        sidebar: 'auto'
    }
}
