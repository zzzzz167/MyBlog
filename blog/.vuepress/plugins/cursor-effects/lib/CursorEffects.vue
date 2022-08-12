<template>
  <canvas id="moefy-canvas"></canvas>
</template>

<script>
import { Popper, PopperShape } from "@moefy-canvas/theme-popper";

export default {
  name: "CursorEffects",
  mounted() {
    if (EFFECTS_SHAPE == "star") {
      const popper = new Popper(
        {
          shape: PopperShape.Star,
          size: EFFECTS_SIZE,
        },
        { opacity: 1, zIndex: EFFECTS_Z_INDEX }
      );
      popper.mount(document.getElementById("moefy-canvas"));
    }else{
      const popper = new Popper(
        {
          shape: PopperShape.Circle,
          size: EFFECTS_SIZE,
        },
        { opacity: 1, zIndex: EFFECTS_Z_INDEX }
      );
      popper.mount(document.getElementById("moefy-canvas"));
    }
  }
};
</script>