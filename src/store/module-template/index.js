import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'


const myCustomModule = {
    namespaced: true,
    actions,
    getters,
    state,
    mutations
}

export default myCustomModule