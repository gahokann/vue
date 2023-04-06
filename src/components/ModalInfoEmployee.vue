<template lang="">
    <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Сотрудник</h5>
                    <button @click="closeModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body sotr">
                    <img src="../assets/img/1.jpg" alt="" class="moodal__sotr__img">
                    <div>
                        <h5 class="modal__sotr__fio">{{ `${firstName} ${secondName} ${lastName}` }}</h5>
                        <p class="modal__sotr__role">{{ roleName }}</p>
                        <p class="modal__sotr__email">{{ email }}</p>
                        <p class="modal__sotr__tel">{{ phone }}</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button @click="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
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
        firstName: {
            type: String,
        },
        secondName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        roleName: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        }
    }
}
</script>
<style lang="">
    
</style>