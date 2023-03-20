<template lang="">
    <div class="index__profile">
        <div class="user__table__admin allOrderPage">
            <div class="search__div">
                <input class="form-control me-2" style="padding-right: 40px" id="inputSearch" name="search" placeholder="Поиск" aria-label="Поиск">
                <button class="btn btn__search" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
                </button>
            </div>
            <div class="index__profile__orders__info">
                <h3 class="index__profile__order__title">Партнеры</h3>
                <a @click="isModalPartnerAdd.active = !isModalPartnerAdd.active" class='btn btn-orange'>Добавить партнера</a>
            </div>
            <table class="table PartnerPageTable">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название компании</th>
                        <th scope="col">Дата регистрации</th>
                        <th scope="col">Описание компании</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row" data-label="#">1</td>
                        <td data-label="Название компании">ООО "ПСК"</td>
                        <td data-label="Дата регистрации">15.02.2022, 15:30</td>
                        <td class="description__partner" data-label="Описание компании">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo nihil, atque labore eum doloribus delectus? Deserunt voluptates esse laboriosam aspernatur officia? Sequi nobis inventore nihil at eveniet animi labore nulla?</td>
                        <td data-label="" class="btn__table__partner">
                            <a href="#" class='btn btn-danger ms-3'>Удалить</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <ModalAddPartnerVue :class="isModalPartnerAdd" @close="isModalPartnerAdd.active = false" ></ModalAddPartnerVue>
        </div>
    </div>
</template>
<script>
import ModalAddPartnerVue from '@/components/ModalAddPartner.vue';
export default {

    components: {
        ModalAddPartnerVue
    },

    data() {
        return {
            isModalPartnerAdd: {
                active: false,
            },
        }
    }
    
}
</script>
<style lang="">
    
</style>