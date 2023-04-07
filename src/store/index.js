import { createStore } from 'vuex'
import currencyModule from '@/store/modules/currency'
import authModule from '@/store/modules/auth'

const storeConfig = {
  modules: {
    currency: currencyModule,
    auth: authModule,
  },
}

export default createStore(storeConfig)
