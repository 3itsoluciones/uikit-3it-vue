<script setup>

//Props
const props = defineProps({
  className: {
    type: String,
    required: true
  },
  text: {
    type: [String, Number],
    required: true,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
});
</script>

<template>
  <span 
    :key="`badge-${props.text}`"
    :class="`eit-badge ${props.className}`"
  >
    <template v-if="props.icon">
      <font-awesome-icon :icon="props.icon" class="me-1"/>
    </template>
    <span v-html="props.text"></span>
  </span>
</template>

<style lang="scss">

//Badge
.eit-badge {
	opacity: 0.8;
	padding: 2px 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
	@include border-round(5px);
  @extend .eit-font__weight--500;
	&__solid {
    &--primary, &--secondary, &--tertiary, &--green, &--red, &--yellow, &--blue {
			color: var(--eit-color-white);
      text-shadow: 0 0 5px lch(from var(--eit-color-black) l c h / .2)
    }
    //Theme
    &--gray {
      @extend .eit-color--text;
      @extend .eit-bg--color-mute;
      @include transition('color 0.2s ease-in');
    }

    //Corporate
    &--primary {
      @extend .eit-bg--primary;
    }
    &--secondary {
      @extend .eit-bg--secondary;
    }
    &--tertiary {
      @extend .eit-bg--tertiary;
    }

    //Others
		&--green {
      @extend .eit-bg--green;
		}
		&--red {
      @extend .eit-bg--red;
		}
    &--yellow {
      @extend .eit-bg--yellow;
		}
		&--blue {
      @extend .eit-bg--blue;
		}
	}
	&__outline {
    &--gray, &--primary, &--secondary, &--tertiary, &--green, &--red, &--yellow, &--blue {
      @extend .eit-color--text;
      @extend .eit-border--all;
    }
    //Theme
    &--gray {
      @extend .eit-border--color;
      @extend .eit-bg--color-soft;
      @include transition('color 0.2s ease-in');
    }
    //Corporate
    &--primary {
      border-color: lch(from var(--eit-color-primary) l c h / .4);
      background-color: lch(from var(--eit-color-primary) l c h / .1);
    }
    &--secondary {
      border-color: lch(from var(--eit-color-secondary) l c h / .4);
      background-color: lch(from var(--eit-color-secondary) l c h / .1);
    }
    &--tertiary {
      border-color: lch(from var(--eit-color-tertiary) l c h / .4);
      background-color: lch(from var(--eit-color-tertiary) l c h / .1);
    }

    //Others
		&--green {
      border-color: lch(from var(--eit-color-green) l c h / .4);
      background-color: lch(from var(--eit-color-green) l c h / .1);
		}
		&--red {
      border-color: lch(from var(--eit-color-red) l c h / .4);
      background-color: lch(from var(--eit-color-red) l c h / .1);
		}
    &--yellow {
      border-color: lch(from var(--eit-color-yellow) l c h / .4);
      background-color: lch(from var(--eit-color-yellow) l c h / .1);
		}
		&--blue {
      border-color: lch(from var(--eit-color-blue) l c h / .4);
      background-color: lch(from var(--eit-color-blue) l c h / .1);
		}
	}
}

</style>