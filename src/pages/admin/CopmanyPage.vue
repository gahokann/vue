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
                    <p>Компании</p>
                </div>
                <a
                    @click="setCompanyAll()"
                    class="spinner__link"
                >
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
            <TableContentContainer :status="getloadStatusAdmin">
                <template #content>
                    <table
                        class="table companyTablePage spinner userPageTableAdmin"
                    >
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Название компании</th>
                                <th scope="col">Дата регистрации</th>
                                <th scope="col">Представитель</th>
                                <th scope="col">ИНН</th>
                                <th scope="col">Номер телефона</th>
                                <th scope="col">Статус компании</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="company in search"
                                :key="company.id"
                            >
                                <td scope="row" data-label="#">
                                    {{ company.id }}
                                </td>
                                <td data-label="Название компании">
                                    {{ company.name }}
                                </td>
                                <td data-label="Дата регистрации">
                                    {{ company.created_at }}
                                </td>
                                <td data-label="Представитель">
                                    {{ `${company.user_firstName} ${company.user_secondName[0]}.${company.user_lastName[0]}.` }}
                                </td>
                                <td data-label="ИНН">
                                    {{ company.inn }}
                                </td>
                                <td data-label="Номер телефона">
                                    {{ company.phone_number }}
                                </td>
                                <td data-label="Статус компании">
                                    {{ company.status_name }}
                                </td>
                                <td data-label="" class="btn__table__partner">
                                    <a
                                        @click="
                                            setModalid(company),
                                                (isModalInfoCompany.active =
                                                    !isModalInfoCompany.active)
                                        "
                                        class="btn btn-orange"
                                        >Просмотреть</a
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </template>
            </TableContentContainer>

            <ToastMessage
                :class="isToasts"
                class="toast__message"
                @close="isToasts.active = false"
                :title="toastTitle"
                :description="getStatus"
            ></ToastMessage>
            <ModalInfoCompany
                :class="isModalInfoCompany"
                @toast="isToasts.active = true"
                @close="isModalInfoCompany.active = false"
                :cid="company.id"
                :nameCompany="company.name"
                :dataReg="company.created_at"
                :first_name="company.user_firstName"
                :second_name="company.user_secondName"
                :last_name="company.user_lastName"
                :phone="company.phone_number"
                :inn="company.inn"
                :status="company.status_name"
                :status_id="company.status_id"
                :portal="company.link_web"
                :job="company.description"
            ></ModalInfoCompany>
        </div>
    </div>
</template>
<script>
import ModalInfoCompany from "@/components/ModalInfoCompany.vue";
import ToastMessage from "@/components/ToastMessage.vue";
import TableContentContainer from "@/components/TableContentContainer.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    components: {
        ModalInfoCompany,
        ToastMessage,
        TableContentContainer,
    },

    computed: {
        ...mapGetters(["getCompanies", "getStatus", "getloadStatusAdmin"]),
        search() {
            return this.$searchTable(this.getCompanies, this.searchText)
        }
    },
    data() {
        return {
            isModalInfoCompany: {
                active: false,
            },
            isToasts: {
                active: false,
            },
            company: [],
            phone: "+78885552222",
            toastTitle: "Изменение статуса",
            searchText: '',
        };
    },
    methods: {
        ...mapActions(["setCompanyAll"]),

        setModalid(id) {
            this.company = id;
        },
    },
    created() {
        this.setCompanyAll();
    },
};
</script>
