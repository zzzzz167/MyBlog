<template>
  <Meting
    id="aplayer-fixed"
    :auto="auto"
    :server="server"
    :type="type"
    :mid="mid"
    :additional-audios="additionalAudios"
    :fixed="true"
    :mini="mini"
    :autoplay="autoplay"
    :theme="theme"
    :loop="loop"
    :order="order"
    :preload="preload"
    :volume="volume"
    :mutex="mutex"
    :lrc-type="lrcType"
    :list-folded="listFolded"
    :list-max-height="listMaxHeight"
    :storage-name="storageName"
  />
</template>

<script>
import Meting from './Meting.vue'

export default {
  name: 'MetingGlobal',

    components:{
        Meting
    },

  data() {
    return {
      ...__METING_OPTIONS__,
      ...__APLAYER_OPTIONS__,
    }
  },
}
</script>
