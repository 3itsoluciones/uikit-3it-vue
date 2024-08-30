//Core
import ButtonComponent from '@/components/button/ButtonComponent.vue'
import BreadcrumbComponent from '@/components/layout/BreadcrumbComponent.vue'
import BadgeComponent from '@/components/badge/BadgeComponent.vue'
import TableComponent from '@/components/table/TableComponent.vue'
import PaginationComponent from '@/components/table/PaginationComponent.vue'
import DetailComponent from '@/components/detail/DetailComponent.vue'
import TabComponent from '@/components/tab/TabComponent.vue'
import HighlightComponent from '@/components/highlight/HighlightComponent.vue'
import DialogComponent from '@/components/dialog/DialogComponent.vue'
import PropsComponent from '@/components/props/PropsComponent.vue'
import ProgressBarComponent from '@/components/progress/ProgressBarComponent.vue'

//Message
import AlertComponent from '@/components/messages/AlertComponent.vue'
import ToastComponent from '@/components/messages/ToastComponent.vue'

//Form
import InputComponent from '@/components/form/InputComponent.vue'
import SelectComponent from '@/components/form/SelectComponent.vue'
import TextareaResizeComponent from '@/components/form/TextareaResizeComponent.vue'

//Loading
import LoadingComponent from '@/components/loading/LoadingComponent.vue'
import SkeletonComponent from '@/components/loading/SkeletonComponent.vue'

export default {
  install(app) {
    //Core
    app.component('ButtonComponent', ButtonComponent)
    app.component('BreadcrumbComponent', BreadcrumbComponent)
    app.component('BadgeComponent', BadgeComponent)
    app.component('TableComponent', TableComponent)
    app.component('PaginationComponent', PaginationComponent)
    app.component('DetailComponent', DetailComponent)
    app.component('TabComponent', TabComponent)
    app.component('HighlightComponent', HighlightComponent)
    app.component('DialogComponent', DialogComponent)
    app.component('PropsComponent', PropsComponent)
    app.component('ProgressBarComponent', ProgressBarComponent)

    //Message 
    app.component('AlertComponent', AlertComponent)
    app.component('ToastComponent', ToastComponent)
    
    //Form
    app.component('InputComponent', InputComponent)
    app.component('SelectComponent', SelectComponent)
    app.component('TextareaResizeComponent', TextareaResizeComponent)
    //Loading
    app.component('LoadingComponent', LoadingComponent)
    app.component('SkeletonComponent', SkeletonComponent)

  }
}