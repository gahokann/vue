<template lang="">
    <div class="index__profile">
        <div class="user__table__admin allOrderPage">
            <div class="index__profile__orders__info">
                <div class="index__profile__order__title">
                    <p>Заказ: # {{ getOrderUser.id }}</p>
                </div>
            </div>
            <TableContentContainer :status="getLoadOrder">
                <template #content>
                    <div class="order__block">
                        <nav class="order__block__nav">
                            <a
                                href="#"
                                class="order__block__nav__link"
                                @click="navOrder('mainActive')"
                                >Главная</a
                            >
                            <a
                                href="#"
                                class="order__block__nav__link"
                                @click="navOrder('messageActive')"
                                >Сообщения</a
                            >
                            <a
                                href="#"
                                class="order__block__nav__link"
                                v-if="getUser.role_id > 1"
                                @click="navOrder('emplActive')"
                                >Для сотрудников</a
                            >
                        </nav>
                        <div class="order__block__info__items">
                            <div class="order__block__info__item">
                                <h3 class="info__item__title">
                                    {{ getOrderUser.title }}
                                </h3>
                                <p class="info__item__date">
                                    {{ getOrderUser.created_at }}
                                </p>
                                <p
                                    @click="
                                        setCompany(getOrderUser.company),
                                            (isModalInfoCompany.active =
                                                !isModalInfoCompany.active)
                                    "
                                    class="order__block__info__company"
                                >
                                    Компания:
                                    {{ getOrderUser.company_name }}
                                </p>
                            </div>
                            <div class="order__block__info__item">
                                <div class="sotr">
                                    <h4 class="info__item__sotr">Сотрудник</h4>
                                    <div class="info__item__fio">
                                        <p
                                            v-if="
                                                getOrderUser.employee_id != null
                                            "
                                            @click="
                                                setPerson(
                                                    getOrderUser.employee
                                                ),
                                                    (isModalInfoEmployeeOpen.active =
                                                        !isModalInfoEmployeeOpen.active)
                                            "
                                        >
                                            {{
                                                `${getOrderUser.employee.firstName} ${getOrderUser.employee.secondName} ${getOrderUser.employee.lastName}`
                                            }}
                                        </p>
                                        <p
                                            class="no_empl"
                                            v-if="
                                                getOrderUser.employee_id == null
                                            "
                                        >
                                            Сотрудник не назначен
                                        </p>
                                    </div>
                                </div>
                                <img
                                    v-if="getOrderUser.employee_id != null"
                                    @click="
                                        setPerson(getOrderUser.employee),
                                            (isModalInfoEmployeeOpen.active =
                                                !isModalInfoEmployeeOpen.active)
                                    "
                                    :src="
                                        $url_photo + getOrderUser.employee.photo
                                    "
                                    alt=""
                                    class="info__item__img"
                                />
                                <a
                                    @click="
                                        setOrder(getOrderUser),
                                            (isModalChangeOpen.active =
                                                !isModalChangeOpen.active)
                                    "
                                    class="btn__settings__order"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-gear"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
                                        />
                                        <path
                                            d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div
                            class="order__block__info"
                            v-if="orderBlock.mainActive"
                        >
                            <!-- <p class="order__block__info__column">
                                Заказчик:
                                {{
                                    `${getOrderUser.user_firstName} ${getOrderUser.user_secondName} ${getOrderUser.user_lastName}`
                                }}
                            </p>
                            <p class="order__block__info__column">
                                Количество продукта:
                                {{ getOrderUser.quantity }}штук
                            </p>
                            <p class="order__block__info__datePred">
                                Предварительная дата доставки:
                                {{ getOrderUser.first_deleviryDate }}
                            </p>
                            <p v-if="getOrderUser.last_deleviryDate != null" class="order__block__info__date">
                                Дата доставки:
                                {{ getOrderUser.last_deleviryDate }}
                            </p>
                            <p v-if="getOrderUser.information != null" class="order__block__info__description">
                                Информация: 
                                {{ getOrderUser.information }}
                            </p>
                            <p class="order__block__info__img">
                                <img :src="$url_photo + getOrderUser.photo" alt="" v-if="getOrderUser.photo != null">
                            </p> -->
                            <div
                                class="d-flex align-items-center mt-3"
                                style="column-gap: 25px"
                            >
                                <img
                                    :src="$url_photo + getOrderUser.user_photo"
                                    alt=""
                                    class="info__item__img"
                                />
                                <div class="sotr">
                                    <h4 class="info__item__sotr">Заказчик</h4>
                                    <div class="info__item__fio">
                                        <p>
                                            {{
                                                `${getOrderUser.user_firstName} ${getOrderUser.user_secondName} ${getOrderUser.user_lastName}`
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="order__block__info__info">
                                <p class="order__block__info__info__date">
                                    Желаемая дата отгрузки:
                                    {{ getOrderUser.first_deleviryDate }}
                                </p>
                                <div>
                                    <p
                                        v-if="
                                            getOrderUser.last_deleviryDate !=
                                            null
                                        "
                                        class="order__block__info__info__datelast"
                                    >
                                        Дата отгрузки:
                                        {{ getOrderUser.last_deleviryDate }}
                                    </p>
                                    <p
                                        v-else
                                        class="order__block__info__info__datelast"
                                    >
                                        Дата отгрузки: Не назначена
                                    </p>
                                </div>
                                <p class="order__block__info__info__quantity">
                                    Количество товара:
                                    {{ getOrderUser.quantity }}
                                </p>
                                <p class="order__block__info__info__status">
                                    Статус заказа:
                                    {{ getOrderUser.status_name }}
                                </p>
                                <div>
                                    <p
                                        class="order__block__info__info__in"
                                        v-if="getOrderUser.information != null"
                                    >
                                        Информация:
                                        {{ getOrderUser.information }}
                                    </p>
                                    <p
                                        class="order__block__info__info__in"
                                        v-else
                                    >
                                        Информация: отсутствует
                                    </p>
                                </div>
                                <div
                                    v-if="getOrderUser.photo != null"
                                    class="d-flex justify-content-center"
                                >
                                    <img
                                        :src="$url_photo + getOrderUser.photo"
                                        alt=""
                                        class="order_block__info__info__img"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            class="order__block__info"
                            v-if="orderBlock.messageActive"
                        >
                        
                        <div class="content__recipe__item comment mt-5">
    <div class="card-footer card__pos py-3 border-0">
        <div class="d-flex flex-start w-100">
            <img class="rounded-circle shadow-1-strong me-3 navbar__logo" :src="$url_photo + getUser.photo" alt="avatar" width="40"
                height="40" />
            <div class="form-outline w-100 textarea-block__comment">
                <textarea name="text" class="form-control comment__textarea" id="textAreaExample" placeholder="Введите коммантарий"
                    rows="4" style="background: #fff;"></textarea>

                <div class="d-flex justify-content-end mt-4">
                    <button type="submit" class="btn btn-primary btn-comment">Ответить</button>
                </div>
            </div>

        </div>
        <div class="float-end mt-2 pt-1">
        </div>

    </div>
    <div class="card" v-for="message in getOrderUser.messages" :key="message.id" style="margin-bottom: 15px">
        <div class="card-body">
            <div class="d-flex flex-start justify-content-between align-items-center">
                <div style="align-items: center" class="d-flex aling-items-center">
                    <img class="rounded-circle shadow-1-strong me-3 navbar__logo" :src="$url_photo + message.user.photo" alt="avatar" />
                    <div>
                        <h6 class="fw-bold mb-1" style="color: #F88C21">{{ `${message.user.first_name} ${message.user.second_name[0]}.${message.user.last_name[0]}`}}</h6>
                        <p class="text-muted small mb-0"> 2020-01-01</p>
                    </div>
                </div>
            </div>
            <p class="mt-3 pb-2"> {{ message.text }} </p>
        </div>
    </div>

</div>

                        </div>
                        <div
                            class="order__block__info"
                            v-if="orderBlock.emplActive"
                        >
                            <h3 class="order__block__admin__title">
                                Состояние заказа:
                            </h3>
                            <div
                                class="order__block__admin__block"
                                v-if="getOrderUser.employee_id === null"
                            >
                                <p class="admin__block__title">
                                    Сотрудник не назначен
                                </p>
                                <button
                                    v-if="
                                        getOrderUser.user_id != getUser.id &&
                                        getOrderUser.employee_id == null
                                    "
                                    class="btn btn-outline-success btn-sm"
                                    @click="workOrder(getOrderUser.id)"
                                >
                                    Принять заказ в работу
                                </button>
                            </div>
                            <div
                                class="order__block__admin__block"
                                v-if="getOrderUser.employee_id != null"
                            >
                                <p class="admin__block__title">
                                    Сотрудник назначен
                                </p>
                                <button
                                    class="btn btn-outline-danger"
                                    v-if="
                                        getOrderUser.employee_id != null &&
                                        isChief
                                    "
                                    @click="workRemoveOrder(getOrderUser.id)"
                                >
                                    Снять сотрудника с заказа
                                </button>
                            </div>
                            <div class="order__block__admin__block second">
                                <p class="admin__block__title">
                                    Изменение статуса заказа.
                                </p>
                                <p class="admin__block__title status">
                                    Статус заказа:
                                    {{ getOrderUser.status_name }}
                                </p>
                                <select
                                    @change="onChange($event, getOrderUser.id)"
                                    class="form-select admin__select__block"
                                >
                                    <option selected>
                                        Выберите статус для заказа
                                    </option>
                                    <option
                                        v-for="status in getOrderUser.statuses"
                                        :key="status.id"
                                        :value="status.id"
                                    >
                                        {{ status.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </template>
            </TableContentContainer>

            <ModalChangeOrder
                :class="isModalChangeOpen"
                @close="isModalChangeOpen.active = false"
                :orderNumber="order.id"
                :titleOrder="order.title"
                :quantityOrder="order.quantity"
                :informationOrder="order.information"
            ></ModalChangeOrder>

            <ModalInfoEmployee
                :class="isModalInfoEmployeeOpen"
                @close="isModalInfoEmployeeOpen.active = false"
                :firstName="person.firstName"
                :secondName="person.secondName"
                :lastName="person.lastName"
                :roleName="person.role"
                :email="person.email"
                :phone="person.phone"
                :photo="person.photo"
            ></ModalInfoEmployee>

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

            <ToastMessage
                :class="isToasts"
                class="toast__message"
                @close="isToasts.active = false"
                :title="toastTitle"
                :description="getStatus"
            ></ToastMessage>
        </div>
    </div>
</template>
<script>
import ModalChangeOrder from "@/components/ModalChangeOrder.vue";
import ModalInfoEmployee from "@/components/ModalInfoEmployee.vue";
import ModalInfoCompany from "@/components/ModalInfoCompany.vue";
import ToastMessage from "@/components/ToastMessage.vue";
import TableContentContainer from "@/components/TableContentContainer.vue";
import { mapActions, mapGetters } from "vuex";
export default {
    components: {
        ModalChangeOrder,
        ModalInfoEmployee,
        ModalInfoCompany,
        ToastMessage,
        TableContentContainer,
    },
    created() {
        this.setOrderUser(this.orderId);
    },
    data() {
        return {
            isModalChangeOpen: {
                active: false,
            },
            isModalInfoEmployeeOpen: {
                active: false,
            },
            orderNumber: 111,
            person: [],
            company: [],
            orderId: this.$route.params.id,
            isModalInfoCompany: {
                active: false,
            },
            isToasts: {
                active: false,
            },
            toastTitle: "Изменение статуса",
            phone: "+78885552222",
            order: [],
            orderBlock: {
                mainActive: true,
                messageActive: false,
                emplActive: false,
            },
        };
    },
    computed: {
        ...mapGetters([
            "getOrderUser",
            "getLoadOrder",
            "getUser",
            "getStatus",
            "isEmployee",
            "getUser",
            "isChief",
        ]),
    },
    methods: {
        ...mapActions([
            "setOrderUser",
            "orderWorkChange",
            "orderWorkRemove",
            "changeOrderStatus",
        ]),

        navOrder(nav) {
            if (nav == "mainActive") {
                this.orderBlock.mainActive = true;
                this.orderBlock.messageActive = false;
                this.orderBlock.emplActive = false;
                return;
            }
            if (nav == "messageActive") {
                this.orderBlock.mainActive = false;
                this.orderBlock.messageActive = true;
                this.orderBlock.emplActive = false;
                return;
            }
            if (nav == "emplActive" && this.getUser.role_id > 1) {
                this.orderBlock.mainActive = false;
                this.orderBlock.messageActive = false;
                this.orderBlock.emplActive = true;
                return;
            }
        },

        setPerson(employee) {
            this.person = employee;
        },

        setCompany(company) {
            this.company = company;
        },

        setOrder(order) {
            this.order = order;
        },

        workOrder(orderID) {
            this.orderWorkChange(orderID);
            setTimeout(() => {
                this.isToasts.active = true;
            }, 1500);
        },

        workRemoveOrder(orderID) {
            this.orderWorkRemove(orderID);
            setTimeout(() => {
                this.isToasts.active = true;
            }, 1500);
        },

        onChange(event, orderID) {
            let value = event.target.value;
            this.changeOrderStatus({
                orderID: orderID,
                status: value,
            });
            setTimeout(() => {
                this.isToasts.active = true;
            }, 1500);
        },
    },
};
</script>
<style lang=""></style>
