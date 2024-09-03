import * as Components from './components'
import * as Composables from './composables'
import * as Utils from './utils'

interface App {
  component(key: string, component: any): void;
}

interface Installable {
  install(app: App): void;
}

interface IndexExports extends Installable {
  Composables: typeof Composables;
  Utils: typeof Utils;
}

const indexExports: IndexExports = {
  install(app: App) {
    Object.keys(Components).forEach((key) => {
      app.component(key, Components[key]);
    });
  },
  Composables,
  Utils
};

export default indexExports;
