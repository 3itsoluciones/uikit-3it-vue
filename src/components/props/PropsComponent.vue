<script setup>
//Components
import BadgeComponent from '@/components/badge/BadgeComponent.vue'

//Props
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="row">
    <div class="col">
      <h2
        class="eit-font__size--x4 eit-color--text eit-font__weight--300 eit-border--bottom eit-border--color mb-3"
      >
        <strong class="eit-font__weight--900">Props</strong>
      </h2>

      <div class="eit-table--overflow">
        <table class="table eit-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="item in props.data" :key="item.name">
              <tr>
                <td>
                  <BadgeComponent
                    :text="item.name"
                    className="eit-badge__outline--gray"
                  />
                </td>
                <td>
                  <code>
                    {{ item.type }}
                  </code>
                </td>
                <td>
                  <code>
                    {{ item.default }}
                  </code>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>