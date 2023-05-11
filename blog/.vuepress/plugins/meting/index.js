"use strict";
const { path } = require('@vuepress/utils')
const vuepressMeting = (options = {}) => {
    return {
        name: 'vuepress-plugin-tip',
        define() {
            const {
                metingApi = 'https://music-api-meting-api-englchqedl.cn-hangzhou.fcapp.run/api',
                meting = {},
                aplayer = {},
                mobile = {},
                defaultCover = 'https://github.com/zzzzz167.png',
            } = options
            const { auto = '', server = '', type = '', mid = '' } = meting
            const {
                additionalAudios = [],
                mini = null,
                autoplay = false,
                theme = '#b7daff',
                loop = 'all',
                order = 'list',
                preload = 'auto',
                volume = 0.7,
                customAudioType,
                mutex = true,
                lrcType = 0,
                listFolded = true,
                listMaxHeight = "250px",
                storageName = 'vuepress-plugin-meting',
              } = aplayer
            const { cover = true, lrc = true } = mobile
            return {
                __METING_API__: metingApi,
                __METING_OPTIONS__: {
                  auto,
                  server,
                  type,
                  mid,
                },
                __APLAYER_OPTIONS__: {
                  additionalAudios,
                  mini,
                  autoplay,
                  theme,
                  loop,
                  order,
                  preload,
                  volume,
                  customAudioType,
                  mutex,
                  lrcType,
                  listFolded,
                  listMaxHeight,
                  storageName,
                },
                __MOBILE_OPTIONS__: {
                  cover,
                  lrc,
                },
                __DEFAULT_COVER__: defaultCover,
            }
        },
        clientConfigFile: path.resolve(__dirname, './lib/config.js'),
    }
}

module.exports = vuepressMeting;