<script setup>

  const props = defineProps({
    percentage: {
      type: Number,
      default: 50
    },
    type: {
      type: String,
      default: 'primary'
    },
	})

</script>

<template>
  <div class="eit-progress eit-progress--30">
    <div 
      class="eit-progress__bar"
      :class="`eit-progress__bar--${props.type}`"
      :style="`width: ${props.percentage}%`"
    >
      {{ props.percentage }}%
    </div>
    <div 
      class="eit-progress__bar eit-progress__bar--transparent"
      :style="`width: ${100 - props.percentage}%`"
    >
      {{ 100 - props.percentage }}%
    </div>
  </div>
</template>

<style lang="scss">

.eit-progress {
  display: flex;
  @extend .eit-box-shadow--inset;
  @extend .eit-border--round-x3;
  @extend .eit-bg--color-soft;
  &--30 {
    height: 30px;
  }
  &__bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    @extend .eit-border--round-x3;
		@include transition('width 0.2s ease-in');

    &--transparent {
      background-color: transparent;
      @extend .eit-color--text-soft;
    }
    &--primary {
      @extend .eit-bg--primary;
      @extend .eit-color--white;
    }
    &--secondary {
      @extend .eit-bg--secondary;
      @extend .eit-color--white;
    }
    &--tertiary {
      @extend .eit-bg--tertiary;
      @extend .eit-color--white;
    }
    &--green {
      @extend .eit-bg--green;
      @extend .eit-color--white;
    }
    &--red {
      @extend .eit-bg--red;
      @extend .eit-color--white;
    }
    &--yellow {
      @extend .eit-bg--yellow;
      @extend .eit-color--white;
    }
    &--blue {
      @extend .eit-bg--blue;
      @extend .eit-color--white;
    }
  }
}

</style>