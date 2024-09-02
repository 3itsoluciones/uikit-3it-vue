<script setup>
//Props
const props = defineProps({
  type: {
    type: String,
    required: true
  },
  table: {
    type: Object,
    required: false,
    default() {
      return { row: 3, column: 7 }
    }
  }
})
</script>

<template>
  <template v-if="props.type === 'table'">
    <table class="table eit-table eit-table-responsive">
      <thead>
        <tr>
          <template v-for="column in props.table.column" :key="column">
            <th v-if="column === 1" class="eit-skeleton__table-first-td">
              <div
                class="eit-skeleton eit-skeleton__title"
                style="width: 80%"
              ></div>
            </th>
            <th v-if="column > 1">
              <div
                class="eit-skeleton eit-skeleton__title"
                style="width: 60%"
              ></div>
            </th>
          </template>
        </tr>
      </thead>
      <tbody>
        <template v-for="_row in props.table.row" :key="_row">
          <tr>
            <template v-for="column in props.table.column" :key="column">
              <td v-if="column === 1" class="eit-skeleton__table-first-td">
                <div
                  class="eit-skeleton eit-skeleton__text my-2"
                  style="width: 80%"
                ></div>
              </td>
              <td v-if="column > 1">
                <div
                  class="eit-skeleton eit-skeleton__text my-2"
                  style="width: 80%"
                ></div>
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </template>

  <template v-if="props.type === 'detail'">
    <div class="row">
      <div class="col-12">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <div class="eit-skeleton eit-skeleton__btn-square"></div>
          </div>
          <div class="flex-grow-1 ms-3">
            <div class="d-flex">
              <div class="flex-grow-1 ms-3">
                <div
                  class="eit-skeleton eit-skeleton__title my-2"
                  style="width: 40%"
                ></div>
                <div
                  class="eit-skeleton eit-skeleton__text my-2"
                  style="width: 30%"
                ></div>
              </div>
              <div class="flex-shrink-0">
                <div
                  class="eit-skeleton eit-skeleton__text my-2"
                  style="width: 30px"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row flex-grow-1">
      <div class="col-12 d-flex flex-column flex-grow-1">
        <div class="eit-slide__content flex-grow-1">
          <div class="mt-5">
            <div class="col-12">
              <h5 class="mb-3">
                <div
                  class="eit-skeleton eit-skeleton__title my-2"
                  style="width: 20%"
                ></div>
              </h5>
              <ul class="list-unstyled">
                <li class="mb-4">
                  <div
                    class="eit-skeleton eit-skeleton__text my-2"
                    style="width: 25%"
                  ></div>
                  <div
                    class="eit-skeleton eit-skeleton__text my-2"
                    style="width: 35%"
                  ></div>
                </li>
                <li class="mb-4">
                  <div
                    class="eit-skeleton eit-skeleton__text my-2"
                    style="width: 30%"
                  ></div>
                  <div
                    class="eit-skeleton eit-skeleton__text my-2"
                    style="width: 40%"
                  ></div>
                </li>
                <li class="mb-4">
                  <div
                    class="eit-skeleton eit-skeleton__text my-2"
                    style="width: 20%"
                  ></div>
                  <div
                    class="eit-skeleton eit-skeleton__text my-2"
                    style="width: 30%"
                  ></div>
                </li>
                <li class="mb-4">
                  <div
                    class="eit-skeleton eit-skeleton__text my-2"
                    style="width: 25%"
                  ></div>
                  <div
                    class="eit-skeleton eit-skeleton__text my-2"
                    style="width: 35%"
                  ></div>
                </li>
                <li class="mb-4">
                  <div
                    class="eit-skeleton eit-skeleton__text my-2"
                    style="width: 20%"
                  ></div>
                  <div
                    class="eit-skeleton eit-skeleton__text my-2"
                    style="width: 35%"
                  ></div>
                </li>
                <li class="mb-4">
                  <div
                    class="eit-skeleton eit-skeleton__text my-2"
                    style="width: 25%"
                  ></div>
                  <div
                    class="eit-skeleton eit-skeleton__text my-2"
                    style="width: 35%"
                  ></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<style lang="scss">
//Animation
@keyframes eit-skeleton-loading-color {
  0% {
    background-color: lch(from var(--eit-color-black) l c h / 0.1);
  }
  100% {
    background-color: lch(from var(--eit-color-black) l c h / 0.15);
  }
}
@keyframes eit-skeleton-loading-color-light {
  0% {
    background-color: lch(from var(--eit-color-black) l c h / 0.05);
  }
  100% {
    background-color: lch(from var(--eit-color-black) l c h / 0.13);
  }
}

.eit-skeleton {
  animation: eit-skeleton-loading-color-light 1s linear infinite alternate;
  &__table-first-td {
    @media (min-width: 992px) {
      width: 50px;
    }
  }
  &__title,
  &__text {
    width: 100%;
    margin-bottom: 5px;
    @include border-round(5px);
  }
  &__title {
    height: 15px;
    animation: eit-skeleton-loading-color 1s linear infinite alternate;
  }
  &__text {
    height: 10px;
  }
  &__btn-square {
    display: flex;
    height: 50px;
    width: 50px;
    @include border-round(3px);
  }
}
</style>
