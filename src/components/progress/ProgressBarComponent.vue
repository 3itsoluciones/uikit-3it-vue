<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    percentage: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'primary'
    },
    loading: {
      type: Boolean,
      default: true
    },
	})

  const controlParseFloat = computed(() => {
    return parseFloat(props.percentage)
  })

  const controlRestPercentaje = computed(() => {
    return controlParseFloat.value === 0 ? 0 : 100 - controlParseFloat.value
  })

</script>

<template>
  <div class="eit-progress eit-progress--30">
    <div 
      class="eit-progress__bar"
      :class="`eit-progress__bar--${props.type}`"
      :style="`width: ${props.percentage}%`"
    >
      <template v-if="controlParseFloat !== 0">
        <template v-if="props.percentage > 5">
          {{ props.percentage }}%
        </template>  
      </template>      
    </div>
    <div 
      class="eit-progress__bar eit-progress__bar--transparent"
      :style="`width: ${controlRestPercentaje === 0 ? 100 : controlRestPercentaje}%`"
    >
      <template v-if="!props.loading">
        <template v-if="controlRestPercentaje === 0 || controlRestPercentaje > 5">
          {{ controlRestPercentaje }}%
        </template>      
      </template>
      <template v-if="props.loading">
        <span>
          <span class="spinner-border spinner-border-sm"></span> 
          Cargando...
        </span>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
  @use '@/assets/scss/core' as *;

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
      @include transition('width 0.5s ease-in');

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