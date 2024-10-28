<script setup>
//Components
import SkeletonComponent from '@/components/loading/SkeletonComponent.vue'

//Props
const props = defineProps({
  //Data
  record: {
    type: Object,
    default: () => ({})
  },
  //Configuration
  slide: {
    type: Boolean,
    required: true,
    default: false
  },
  slideSmall: {
    type: Boolean,
    required: false,
    default: false
  },
  //Loading
  loading: {
    type: Boolean,
    required: false,
    default: true
  },
  //Actions
  dropdown: {
    type: Boolean,
    required: false,
    default: true
  },
  editRecord: {
    type: String,
    default: null
  },
  deleteRecord: {
    type: String,
    default: null
  },
  downloadRecord: {
    type: String,
    default: null
  },
  enabledDisabledRecord: {
    type: Boolean,
    default: false
  }
})

//Emits
const emit = defineEmits([
  'emitslide',
  'enabledDisabledRecord',
  'editRecord',
  'deleteRecord',
  'downloadRecord'
])

/** Methods **/

//Handles
const handleCloseSlide = () => {
  emit('emitslide')
}
const handleEnabledDisabledRecord = () => {
  emit('enabledDisabledRecord', props.record)
}
const handleEditRecord = () => {
  emit('editRecord', props.record)
}
const handleDeleteRecord = () => {
  emit('deleteRecord', props.record)
}
const handleDownloadRecord = () => {
  emit('downloadRecord', props.record)
}
</script>

<template>
  <section
    class="eit-slide d-flex flex-column"
    :class="[slide && 'eit-slide--right', slideSmall && 'eit-slide--small']"
  >
    <template v-if="props.loading">
      <SkeletonComponent type="detail" />
    </template>

    <template v-if="!props.loading">
      <div class="row">
        <div class="col-12">
          <div class="d-flex">
            <div class="flex-shrink-0">
              <button
                class="eit-btn eit-btn--gray eit-btn--square"
                @click="handleCloseSlide"
              >
                <font-awesome-icon
                  icon="fa-solid fa-angle-right"
                  class="eit-font__size--x5 d-none d-lg-block"
                />
                <font-awesome-icon
                  icon="fa-solid fa-angle-down"
                  class="eit-font__size--x5 d-lg-none"
                />
              </button>
            </div>
            <div class="flex-grow-1">
              <div class="d-flex">
                <div class="flex-grow-1 d-flex flex-column ms-3">
                  <h4 class="eit-font--primary mb-0">
                    <strong>
                      <slot name="title"></slot>
                    </strong>
                  </h4>
                  <p class="eit-color--text mb-0">
                    <slot name="subtitle"></slot>
                  </p>
                </div>
                <div class="flex-shrink-0">
                  <template v-if="props.dropdown">
                    <div class="dropdown eit-dropdown d-none d-lg-block">
                      <a
                        href="javascript:"
                        class="eit-btn-action"
                        data-bs-toggle="dropdown"
                      >
                        <font-awesome-icon icon="fa-solid fa-ellipsis" />
                      </a>
                      <ul class="dropdown-menu dropdown-custom-menu">
                        <li v-if="props.editRecord" class="mx-2">
                          <a
                            @click="handleEditRecord"
                            class="dropdown-item dropdown-custom-menu-item"
                            href="javascript:"
                          >
                            <font-awesome-icon
                              icon="fa-solid fa-square-pen"
                              class="eit-color--yellow"
                            />
                            {{ editRecord }}
                          </a>
                        </li>
                        <li v-if="props.downloadRecord" class="mx-2">
                          <a
                            @click="handleDownloadRecord"
                            class="dropdown-item dropdown-custom-menu-item"
                            href="javascript:"
                          >
                            <font-awesome-icon
                              icon="fa-solid fa-download"
                              class="eit-color--blue"
                            />
                            {{ props.downloadRecord }}
                          </a>
                        </li>
                        <li
                          v-if="deleteRecord || enabledDisabledRecord"
                          class="m-2"
                        >
                          <div
                            class="eit-border--bottom eit-border--color"
                          ></div>
                        </li>
                        <li v-if="props.enabledDisabledRecord" class="mx-2">
                          <a
                            @click="handleEnabledDisabledRecord"
                            class="dropdown-item dropdown-custom-menu-item"
                            href="javascript:"
                          >
                            <template v-if="!props.record.status">
                              <font-awesome-icon
                                icon="fa-regular fa-circle-check"
                                class="eit-color--green"
                              />
                              Habilitar
                            </template>
                            <template v-if="props.record.status">
                              <font-awesome-icon
                                icon="fa-solid fa-ban"
                                class="eit-color--red"
                              />
                              Deshabilitar
                            </template>
                          </a>
                        </li>
                        <li v-if="props.deleteRecord" class="mx-2">
                          <a
                            @click="handleDeleteRecord"
                            class="dropdown-item dropdown-custom-menu-item eit-color--red"
                            href="javascript:"
                          >
                            <font-awesome-icon
                              icon="fa-solid fa-trash"
                              class="eit-color--red"
                            />
                            {{ props.deleteRecord }}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row flex-grow-1">
        <div class="col-12 d-flex flex-column flex-grow-1">
          <div class="eit-slide__content flex-grow-1">
            <slot name="component"></slot>
          </div>
        </div>
      </div>
      <slot name="footer"></slot>
    </template>
  </section>
</template>

<style lang="scss">
  @use '@/assets/scss/core' as *;

  .eit-slide {
    position: fixed;
    padding: 25px;
    @extend .eit-bg--color;
    @extend .eit-box-shadow--center;
    @include transition(
      'opacity 0.3s ease-in-out, right 0.3s ease-in-out, bottom 0.3s ease-in-out'
    );
    @media (max-width: 991px) {
      visibility: hidden;
      left: 0;
      right: 0;
      margin: 0 4%;
      bottom: -10px;
      opacity: 0;
      height: calc(100vh - 100px);
      @include border-round(10px 10px 0 0);
    }
    @media (min-width: 992px) {
      top: 0;
      right: -40%;
      width: 40%;
      height: 100vh;
      opacity: 0;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      right: -60%;
      width: 60%;
    }
    @media (min-width: 1200px) and (max-width: 1919px) {
      right: -50%;
      width: 50%;
    }
    @media (min-width: 1920px) {
      right: -40%;
      width: 40%;
    }

    &__content {
      height: 0;
      overflow-y: auto;
      @extend .eit-scroll--custom;
    }
    &--right {
      visibility: visible;
      z-index: 999;
      @media (max-width: 991px) {
        opacity: 1;
        bottom: 0;
      }
      @media (min-width: 992px) {
        opacity: 1;
        right: 0;
      }
    }
    &--small {
      @media (min-width: 992px) {
        width: 400px;
      }
    }
  }
</style>
