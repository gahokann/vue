<template lang="">
    <div class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Редактирование заказа: #{{ orderNumber }}</h5>
                    <button @click="closeModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Название продукта</label>
                            <input type="text" v-bind:value=" titleOrder " class="form-control" id="name">
                        </div>
                        <div class="mb-3">
                            <label for="colv" class="form-label">Количество продукта</label>
                            <input type="number" v-bind:value=" quantityOrder " class="form-control" id="colv" min="0">
                        </div>
                        <div class="mb-3">
                            <label for="desc" class="form-label">Дополнительная информация</label>
                            <textarea type="text" v-bind:value=" informationOrder " class="form-control" id="desc" style="max-height: 500px"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button @click="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-primary">Сохранить</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        orderNumber: {
            type: Number,
        },
        titleOrder: {
            type: String,
        },
        quantityOrder: {
            type: Number,
        },
        informationOrder: {
            type: String,
        }
    },
    data() {
        return {
            title: '',
            quantity: '',
            information: '',
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        },

        setOrder() {
            this.title = this.titleOrder
        }
    },
}
</script>
<style lang="">
    
</style>