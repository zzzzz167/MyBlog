const { gungnirTheme } = require("vuepress-theme-gungnir");
const { viteBundler } = require("@vuepress/bundler-vite");
const vuepressCursorEffects = require('./plugins/cursor-effects');
const vuepressMeting = require('./plugins/meting');

module.exports = {
    base: "/",
    head: [
        ['script', { src: "/js/duration.js" }],
        ['link', { rel: "icon", type: "image/png", href: "/favicon.png" }],
        ['link', { rel: "mask-icon", href: "/favicon.png", color: "#d64541" }],
        ["meta", { name: "theme-color", content: "#d64541" }],
    ],
    title: "Xiao's Blog",
    description: "小指针的博客,一个简单且有趣的人.",
    lang: "zh-CN",
    bundler: viteBundler({
        viteOptions: {
            ssr: {
                noExternal: ['@moefy-canvas/theme-popper'],
            },
            build: {
                chunkSizeWarningLimit: 1500,
            }
        }
    }),
    theme: gungnirTheme({
        navbarTitle: "Xiao's Blog",
        personalInfo: {
            name: "Xiao Zhizhen",
            avatar: "/img/avatar.jpg",
            description: "生活与热爱缺一不可",
            sns: {
                github: "zzzzz167",
                twitter: "xiaozhizhen",
                email: "2742400566@qq.com",
                rss: "/rss.xml",
                bilibili: {
                    icon: "ri-bilibili-line",
                    link: "https://space.bilibili.com/38066672"
                }
            }
        },
        searchText: "搜搜看",
        hitokoto: true,
        homeHeaderImages: [
            // 图 1
            {
                "path": "/img/home-bg/1.jpeg",
                "mask": "rgba(40, 57, 101, .4)"
            },
            // 图 2
            {
                "path": "/img/home-bg/2.jpeg",
                "mask": "rgb(251, 170, 152, .2)"
            },
            // 图 3
            {
                "path": "/img/home-bg/3.png",
                "mask": "rgb(251, 170, 152, .2)"
            },
            // 图 4
            {
                "path": "/img/home-bg/4.png",
                "mask": "rgba(40, 57, 101, .4)"
            }
        ],
        navbar: [
            {
                text: "Home",
                link: "/",
                icon: "fa-fort-awesome"
            },
            {
                text: "Tags",
                link: "/tags/",
                icon: "fa-tag"
            },
            {
                text: "Links",
                link: "/links/",
                icon: "fa-satellite-dish"
            },
            {
                text: "About",
                link: "/AboutMe/",
                icon: "fa-paw"
            },
            {
                text: "Portfolio",
                link: "https://github.com/zzzzz167?tab=repositories",
                icon: "oi-rocket"
            }
        ],
        footer: `
            &copy; <a href="https://github.com/zzzzz167" target="_blank">晓栀</a> 2018-2022
            <br>
            Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
            <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
            <div style="font-size: 0.85rem">
                <span id="timeDate">载入天数...</span>
                <span id="times">载入时分秒...</span>
            </div>
            <span>Hello,World!</span>
            `,
        themePlugins: {
            rss: {
                siteURL: "https://blog.ailliom.xyz",  // 网站链接 （必须）
                title: "Xiao's Blog",  // 网站标题（可选，默认：`themeConfig.title`）
                description: "小指针的博客,一个简单且有趣的人.",  // 网站描述（可选，默认：""）
                copyright: "晓栀 2018-2022",  // 版权信息（可选，默认：""）
                count: 20,  // 需要在生成的 RSS 文件上显示多少篇文章（可选，默认：20）
                filter: (page) => true  // 文章筛选函数（可选，默认：(page) => true）
            },
            katex: true,
            mermaid: true,
            chartjs: true,
            mdPlus: {
                all: true // 全部启用（默认：false）
            }
        }
    }),
    plugins: [
        vuepressCursorEffects({
            size: 3,
            shape: "star"
        }),
        vuepressMeting({
            meting: {
                server:"netease",
                type:"playlist",
                mid:"2919993727",
            },
            aplayer: {
                listFolded: true,
                order:"random"
            }
        }),
    ]
};