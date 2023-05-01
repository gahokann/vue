export default {
    // ! PLUGINS SEARCH TABLE!
    install(Vue) {
        Vue.prototype.$searchTable = (array, searchText) => {
            return array.filter((elem) => {
                for(let key in elem) {
                    if(String(elem[key]).toLowerCase().indexOf(searchText.toLowerCase()) !== -1){
                        return true
                    }
                }
                return false
            })
        }
    }
}