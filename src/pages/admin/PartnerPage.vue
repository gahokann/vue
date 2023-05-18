<template lang="">
    <div class="index__profile">
        <div class="user__table__admin allOrderPage">
            <div class="search__div">
                <input
                    class="form-control me-2"
                    style="padding-right: 40px"
                    id="inputSearch"
                    name="search"
                    placeholder="Поиск"
                    aria-label="Поиск"
                    v-model="searchText"
                />
            </div>
            <div class="index__profile__orders__info">
                <div class="index__profile__order__title">
                    <p>Партнеры</p>
                </div>
                <div class="group__link__table">
                    <a
                        @click="
                            isModalPartnerAdd.active = !isModalPartnerAdd.active
                        "
                        class="btn btn-orange"
                        >Добавить партнера</a
                    >
                    <a @click="setPartnersAll()" class="spinner__link">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-arrow-clockwise"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                            />
                            <path
                                d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
            <TableContentContainer :status="getloadStatusAdmin">
                <template #content>
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
                            <tr
                                v-for="partner in search"
                                :key="partner.id"
                            >
                                <td scope="row" data-label="#">
                                    {{ partner.id }}
                                </td>
                                <td data-label="Название компании">
                                    {{ partner.title }}
                                </td>
                                <td data-label="Дата регистрации">
                                    {{ partner.created_at }}
                                </td>
                                <td
                                    class="description__partner"
                                    data-label="Описание компании"
                                >
                                    {{ partner.description }}
                                </td>
                                <td data-label="" class="btn__table__partner">
                                    <a
                                        href="#"
                                        @click="pDelete(partner.id)"
                                        class="btn btn-danger ms-3"
                                        >Удалить</a
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </template>
            </TableContentContainer>

            <ModalAddPartnerVue
                :class="isModalPartnerAdd"
                @toast="isToasts.active = true"
                @close="isModalPartnerAdd.active = false"
            ></ModalAddPartnerVue>
        </div>
        <ToastMessage
            :class="isToasts"
            class="toast__message"
            @close="isToasts.active = false"
            :title="toastTitle"
            :description="getStatus"
        ></ToastMessage>
    </div>
</template>
<script>
import ModalAddPartnerVue from "@/components/ModalAddPartner.vue";
import ToastMessage from "@/components/ToastMessage.vue";
import TableContentContainer from "@/components/TableContentContainer.vue";
import { mapActions, mapGetters } from "vuex";
export default {
    components: {
        ModalAddPartnerVue,
        ToastMessage,
        TableContentContainer,
    },

    data() {
        return {
            isModalPartnerAdd: {
                active: false,
            },
            isToasts: {
                active: false,
            },
            toastTitle: "Добавление партнёра",
            searchText: '',
        };
    },
    computed: {
        ...mapGetters(["getPartners", "getStatus", "getloadStatusAdmin"]),
        search() {
            return this.$searchTable(this.getPartners, this.searchText)
        }
    },

    methods: {
        ...mapActions(["setPartnersAll", "partnerDel"]),

        pDelete(id) {
            this.partnerDel(id);
            setTimeout(() => {
                this.isToasts.active = true;
            }, 1500);
        },
    },

    created() {
        this.setPartnersAll();
    },
};
</script>
<style lang=""></style>
