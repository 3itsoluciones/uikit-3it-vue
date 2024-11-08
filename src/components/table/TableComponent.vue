<script setup>
//Components
import BadgeComponent from '@/components/badge/BadgeComponent.vue'
import SkeletonComponent from '@/components/loading/SkeletonComponent.vue'
import AlertComponent from '@/components/messages/AlertComponent.vue'

//Props
const props = defineProps({
  //Data
  data: {
    type: Array,
    required: true
  },
  //Configuration
  columns: {
    type: Array,
    required: true
  },
  columnLink: {
    type: Number,
    required: false,
    default: 1
  },
  sort: {
    type: Object,
    required: false
  },
  //Loading
  loading: {
    type: Boolean,
    required: false
  },
  skeleton: {
    type: Object,
    required: false
  },
  //Actions
  actions: {
    type: Array,
    required: false,
    default: () => []
  },
  enabledActions: {
    type: Boolean,
    required: false,
    default: true
  },
})

//EMITS
const emit = defineEmits([
  'viewRecord',
  'editRecord',
  'deleteRecord',
  'downloadRecord',
  'updateSort',
  'enabledDisabledRecord'
])

/** Methods **/

//Handles emit
/* const handleViewRecord = (record) => {
  emit('viewRecord', record)
} */
/* const handleEditRecord = (record) => {
  emit('editRecord', record)
}
const handleDeleteRecord = (record) => {
  emit('deleteRecord', record)
}
const handleDownloadRecord = (record) => {
  emit('downloadRecord', record)
} */
const handleSortTable = (index) => {
  emit('updateSort', { index: index, asc: !props.sort.asc })
}
/* const handleEnabledDisabledRecord = (record) => {
  emit('enabledDisabledRecord', record)
} */

//Handles check
const handleCheckString = (value) => {
  return typeof value === 'string'
}
const handleCheckObject = (value) => {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}
const handleCheckArray = (value) => {
  return Array.isArray(value)
}
const handleCheckOthers = (value) => {
  if (value === null || value === undefined) return true
}
//Status
const handleRecordStatus = (row) => {
  return Object.keys(row).includes('status') ? (!row.status && 'disabled') : '' 
}
</script>

<template>
  <div class="row">
    <div class="col-12">
      <template v-if="loading">
        <SkeletonComponent
          type="table"
          :table="{ row: skeleton?.row, column: skeleton?.column }"
        />
      </template>

      <template v-if="!loading && !data?.length">
        <AlertComponent
          ref="alert"
          class="mb-3"
          type="info"
          icon="fa-solid fa-info"
          message="<strong>No hay resultados</strong> para tu búsqueda."
        />
      </template>

      <template v-if="!loading && data?.length">
        <table class="table eit-table eit-table-responsive">
          <thead>
            <tr>
              <th
                v-for="(key, index) in columns"
                :key="`column-${index}`"
                scope="col"
              >
                <a
                  @click="handleSortTable(index)"
                  href="javascript:"
                  class="d-flex justify-content-between"
                >
                  {{ key }}
                  <span
                    v-if="sort.index === index"
                    :key="`icono-${key}`"
                    class="d-flex ms-2 eit-color--text"
                  >
                    <span v-if="!sort.asc" :key="`down-${key}`">
                      <font-awesome-icon
                        icon="fa-solid fa-sort-down align-baseline"
                      />
                    </span>
                    <span v-if="sort.asc" :key="`up-${key}`">
                      <font-awesome-icon
                        icon="fa-solid fa-sort-up align-baseline"
                      />
                    </span>
                  </span>
                  <span v-else :key="`key-${key}`">
                    <font-awesome-icon icon="fa-solid fa-sort" />
                  </span>
                </a>
              </th>
              <th 
                v-if="enabledActions"
                scope="col" 
                class="text-center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(row, index) in data" 
              :key="`row-${index}`"
              :class="handleRecordStatus(row)"
            >
              <td v-for="(value, key) in row" :key="`value-${key}`">
                <strong class="pe-3 d-lg-none"
                  >{{ columns[Object.keys(row).indexOf(key)] }}:</strong
                >

                <template v-if="Object.keys(row)[columnLink] === key">
                  <template v-if="actions.find((action) => action.name === 'view')">
                    <a
                      @click="actions.find((action) => action.name === 'view' && action.handler(row))"
                      href="javascript:"
                      class="eit-table__link"
                    >
                      {{ value ? value : 'Sin datos' }}
                    </a>
                  </template>

                  <template v-else>
                    {{ value ? value : 'Sin datos' }}
                  </template>
                </template>

                <template v-if="Object.keys(row)[columnLink] !== key">
                  <template v-if="handleCheckArray(value)">
                    <div class="d-flex flex-wrap gap-1">
                      <span
                        v-for="(item, i) in value"
                        :key="`value-array-${i}`"
                        class="d-flex flex-wrap gap-1"
                      >
                        <BadgeComponent
                          :text="item.name ? item.name : 'Sin datos'"
                          :className="item.className"
                        />
                      </span>
                    </div>
                  </template>

                  <template v-if="key === 'status'">
                    <template v-if="value">
                      <BadgeComponent
                        text="Activo"
                        className="eit-badge__outline--secondary"
                      />
                    </template>
                    <template v-if="!value">
                      <BadgeComponent
                        text="Inactivo"
                        className="eit-badge__outline--gray"
                      />
                    </template>
                  </template>

                  <template v-if="handleCheckObject(value)">
                    <BadgeComponent
                      :text="value.name ? value.name : 'Sin datos'"
                      :className="value.className"
                    />
                  </template>

                  <template v-if="handleCheckString(value)">
                    <span class="eit-table__string">
                      {{ value ? value : 'Sin datos' }}
                    </span>
                  </template>

                  <template v-if="handleCheckOthers(value)">
                    <span class="eit-table__string">
                      Sin datos
                    </span>
                  </template>

                </template>
              </td>
              <td 
                v-if="enabledActions"
                class="text-center"
              >
              <div class="dropdown eit-dropdown d-none d-lg-block">
                <a
                  href="javascript:"
                  class="eit-btn-action"
                  data-bs-toggle="dropdown"
                >
                  <font-awesome-icon icon="fa-solid fa-ellipsis" />
                </a>
                <ul class="dropdown-menu dropdown-custom-menu">
                  <li v-for="action in actions" :key="action.name" class="mx-2">
                    <template v-if="action.booleanKey">
                      <a
                        @click="action.handler(row)"
                        class="dropdown-item dropdown-custom-menu-item"
                        href="javascript:"
                      >
                      {{ row[action.booleanKey] }}
                        <template v-if="!row[action.booleanKey]">
                          <font-awesome-icon
                            :icon="action.iconEnabled"
                            :class="action.iconClassEnabled"
                          />
                          {{ action.labelEnabled }}
                        </template>
                        <template v-if="row[action.booleanKey]">
                          <font-awesome-icon
                            :icon="action.iconDisabled"
                            :class="action.iconClassDisabled"
                          />
                          {{ action.labelDisabled }}
                        </template>
                      </a>
                    </template>
                    <template v-else>
                      <a
                        @click="action.handler(row)"
                        class="dropdown-item dropdown-custom-menu-item"
                        href="javascript:"
                      >
                        <font-awesome-icon
                          :icon="action.icon"
                          :class="action.iconClass"
                        />
                        {{ action.label }}
                      </a>
                    </template>
                  </li>
                </ul>
              </div>
<!--                 <div class="dropdown eit-dropdown d-none d-lg-block">
                  <a
                    href="javascript:"
                    class="eit-btn-action"
                    data-bs-toggle="dropdown"
                  >
                    <font-awesome-icon icon="fa-solid fa-ellipsis" />
                  </a>
                  <ul class="dropdown-menu dropdown-custom-menu">
                    <li v-if="viewRecord" class="mx-2">
                      <a
                        @click="handleViewRecord(row)"
                        class="dropdown-item dropdown-custom-menu-item"
                        href="javascript:"
                      >
                        <font-awesome-icon
                          icon="fa-regular fa-eye"
                          class="eit-color--blue"
                        />
                        {{ viewRecord }}
                      </a>
                    </li>
                    <li v-if="editRecord" class="mx-2">
                      <a
                        @click="handleEditRecord(row)"
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
                    <li v-if="downloadRecord" class="mx-2">
                      <a
                        @click="handleDownloadRecord(row)"
                        class="dropdown-item dropdown-custom-menu-item"
                        href="javascript:"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-download"
                          class="eit-color--blue"
                        />
                        {{ downloadRecord }}
                      </a>
                    </li>

                    <li
                      v-if="deleteRecord || enabledDisabledRecord"
                      class="m-2"
                    >
                      <div class="eit-border--bottom eit-border--color"></div>
                    </li>
                    <li v-if="enabledDisabledRecord" class="mx-2">
                      <a
                        @click="handleEnabledDisabledRecord(row)"
                        class="dropdown-item dropdown-custom-menu-item"
                        href="javascript:"
                      >
                        <template v-if="!row.status">
                          <font-awesome-icon
                            icon="fa-regular fa-circle-check"
                            class="eit-color--green"
                          />
                          Habilitar
                        </template>
                        <template v-if="row.status">
                          <font-awesome-icon
                            icon="fa-solid fa-ban"
                            class="eit-color--red"
                          />
                          Deshabilitar
                        </template>
                      </a>
                    </li>
                    <li v-if="deleteRecord" class="mx-2">
                      <a
                        @click="handleDeleteRecord(index)"
                        class="dropdown-item dropdown-custom-menu-item"
                        href="javascript:"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-trash"
                          class="eit-color--red"
                        />
                        {{ deleteRecord }}
                      </a>
                    </li>
                  </ul>
                </div> -->
                <div
                  class="d-flex w-100 justify-content-between align-items-center d-lg-none text-end"
                >
                  <strong>Acciones:</strong>
                  <div class="d-flex flex-wrap gap-2 ms-3">
                    <template v-for="action in actions" :key="action.name">
                      <template v-if="action.booleanKey">
                        <template v-if="!row[action.booleanKey]">
                          <a
                            @click="action.handler(row)"
                            href="javascript:"
                            class="eit-btn eit-btn-outline--gray eit-btn--square"
                          >
                            <font-awesome-icon
                              :icon="action.iconEnabled"
                              :class="action.iconClassEnabled"
                            />
                          </a>
                        </template>
                        <template v-if="row[action.booleanKey]">
                          <a
                            @click="action.handler(row)"
                            href="javascript:"
                            class="eit-btn eit-btn-outline--gray eit-btn--square"
                          >
                            <font-awesome-icon
                              :icon="action.iconDisabled"
                              :class="action.iconClassDisabled"
                            />
                          </a>
                        </template>
                      </template>
                      <template v-else>
                        <a
                          @click="action.handler(row)"
                          href="javascript:"
                          class="eit-btn eit-btn-outline--gray eit-btn--square"
                        >
                          <font-awesome-icon
                            :icon="action.icon"
                            :class="action.iconClass"
                          />
                        </a>
                      </template>
                    </template>
                  </div>
<!--                   <div class="d-flex flex-wrap gap-2 ms-3">
                    <a
                      v-if="viewRecord"
                      @click="handleViewRecord(row)"
                      href="javascript:"
                      class="eit-btn eit-btn-outline--gray eit-btn--square"
                    >
                      <font-awesome-icon
                        icon="fa-regular fa-eye"
                        class="eit-color--blue"
                      />
                    </a>
                    <a
                      v-if="editRecord"
                      @click="handleEditRecord(row)"
                      href="javascript:"
                      class="eit-btn eit-btn-outline--gray eit-btn--square"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-square-pen"
                        class="eit-color--yellow"
                      />
                    </a>
                    <a
                      v-if="downloadRecord"
                      @click="handleDownloadRecord(row)"
                      href="javascript:"
                      class="eit-btn eit-btn-outline--gray eit-btn--square"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-download"
                        class="eit-color--blue"
                      />
                    </a>
                    <template v-if="enabledDisabledRecord">
                      <template v-if="!row.status">
                        <a
                          @click="handleEnabledDisabledRecord(row)"
                          href="javascript:"
                          v-tippy="{ content: 'Habilitar', theme: 'main' }"
                          class="eit-btn eit-btn-outline--gray eit-btn--square"
                        >
                          <font-awesome-icon
                            icon="fa-regular fa-circle-check"
                            class="eit-color--green"
                          />
                        </a>
                      </template>

                      <template v-if="row.status">
                        <a
                          @click="handleEnabledDisabledRecord(row)"
                          href="javascript:"
                          v-tippy="{ content: 'Deshabilitar', theme: 'main' }"
                          class="eit-btn eit-btn-outline--gray eit-btn--square"
                        >
                          <font-awesome-icon
                            icon="fa-solid fa-ban"
                            class="eit-color--red"
                          />
                        </a>
                      </template>
                    </template>
                    <a
                      v-if="deleteRecord"
                      @click="handleDeleteRecord(index)"
                      href="javascript:"
                      class="eit-btn eit-btn-outline--gray eit-btn--square"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-trash"
                        class="eit-color--red"
                      />
                    </a>
                  </div> -->
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <slot name="paginator"></slot>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
  @use '@/assets/scss/core' as *;

  .eit-table {
    @extend .eit-font__size--x1;
    &__link {
      text-decoration: none;
      padding: 2px 10px;
      display: -webkit-inline-box;
      line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      @extend .eit-bg--color-soft;
      @extend .eit-color--text-soft;
      @extend .eit-font__weight--900;
      @include border-round(5px);
      @include transition('color 0.2s ease-in-out');
      @media (min-width: 992px) {
        max-width: 300px;
      }
      &:hover {
        @extend .eit-color--primary;
        @extend .eit-bg--color-mute;
      }
    }
    &__string {
      display: -webkit-inline-box;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      @media (min-width: 992px) {
        max-width: 300px;
      }
    }
    thead {
      tr {
        &:first-child {
          th {
            &:first-child {
              @include border-round(3px 0 0 3px);
            }
            &:last-child {
              @include border-round(0 3px 3px 0);
            }
          }
        }
        th {
          border: 0;
          @extend .eit-font__weight--900;
          @extend .eit-color--text-soft;
          @extend .eit-bg--color-soft;
          @include transition('color 0.2s ease-in');
          a {
            text-decoration: none;
            @extend .eit-color--text-soft;
            @extend .eit-font__weight--900;
            &:hover {
              @extend .eit-color--text;
            }
          }
        }
      }
    }
    tbody {
      tr {
        td {
          vertical-align: middle;
          background: transparent;
          @include transition('color 0.2s ease-in');
          @extend .eit-border--color;
          @extend .eit-color--text;
        }
      }
      tr.disabled {
        @extend .eit-bg--color-soft;
        @extend .eit-color--text-soft;
        @include transition('color 0.2s ease-in');
      }
    }
    @media only screen and (max-width: 991px) {
      &-responsive {
        thead,
        tbody,
        th,
        tr,
        td {
          display: block;
        }
        thead tr {
          position: absolute;
          top: -9999px;
          left: -9999px;
        }
        tbody {
          tr {
            td {
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }
</style>
