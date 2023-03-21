<template lang="">
    <div class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Добавление партнера</h5>
                    <button @click="closeModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Название компании</label>
                            <input type="text" class="form-control" id="name">
                        </div>
                        <div class="mb-3">
                            <label for="desc" class="form-label">Информация (кратко)</label>
                            <textarea type="text" class="form-control" id="desc" style="max-height: 200px"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label">Логотип компании</label>
                            <input type="file" class="form-control" id="name">
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
    methods: {
        closeModal() {
            this.$emit('close')
        }
    },
    props: {
        orderNumber: {
            type: Number,
        }
    }
}
</script>
<style lang="">
    
</style>