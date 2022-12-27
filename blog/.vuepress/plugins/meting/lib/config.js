import { defineClientConfig } from "@vuepress/client";
import APlayer from './APlayer.vue'
import Meting from './Meting.vue'
import MetingGlobal from './MetingGlobal.vue'

export default defineClientConfig({
    enhance({ app }) {
        app.component('APlayer', APlayer)
        app.component('Meting', Meting)
    },
    rootComponents: __METING_OPTIONS__.auto !== '' || __METING_OPTIONS__.type !== '' ? [MetingGlobal] : undefined
})