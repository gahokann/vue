<template lang="">
    <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Компания: {{ title }}</h5>
                    <button @click="closeModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                        <p class="modal__company__name"><span class="bold">Название компании</span>: ООО "ПСК"</p>
                        <p class="modal__company__date"><span class="bold">Дата регистрации</span>: 15.02.2022, 15:30</p>
                        <p class="modal__company__fio"><span class="bold">Представитель компании</span>{{ `: Демошенков Сергей Михайлович` }}</p>
                        <p class="modal__company__fio"><span class="bold">Номер телефона</span>{{ `: +79778598026` }}</p>
                        <p class="modal__company__status"><span class="bold">Статус</span>: Ожидает рассмотрения</p>
                        <p class="modal__company__portal"><span class="bold">Интернет-портал</span>: www.infosnto.ru</p>
                        <p class="modal__company__desc"><span class="bold">Деятельность компании</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque a quam deleniti impedit enim? In cupiditate fugit temporibus est totam earum? Magni facere quo officiis eveniet ex commodi sit doloremque.</p>
                        <div class="btns__company__status">
                            <button class="btn btn-success">Одобрить</button>
                            <button class="btn btn-danger" style="margin-left: 10px">Одобрить</button>
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
        nameCompany: {
            type: String,
        },
        dateReg: {
            type: Date,
        }
    }
}
</script>
<style lang="">
    
</style>