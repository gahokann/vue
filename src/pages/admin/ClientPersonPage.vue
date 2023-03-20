<template lang="">
    <div class="index__profile">
        <div class="index__profile__items">
            <div class="index__profile__item">
                <img src="../../assets/img/1.jpg" class="index__profile__item__logo" alt="">
                <p class="index__profile__name">Сергей</p>
                <p class="index__profile__level">Пользователь</p>
                <p class="index__profile__company">ООО "ПСК"</p>
            </div>
                <div class="index__profile__item">
                    <h3 class="index__profile__fio">Демошенков Сергей Михайлович</h3>
                    <p class="index__profile__email">topsamper227@mail.ru</p>
                    <p class="index__profile__phone">+79778598026</p>
            </div>
        </div>
        <div class="index__profile__orders">
            <div class="index__profile__orders__info">
                <h3 class="index__profile__order__title">Заказы пользователя</h3>
            </div>
            <table class="table orderPageTable">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Товар</th>
                        <th scope="col">Статус заказа</th>
                        <th scope="col">Дата заказа</th>
                        <th scope="col">Сотрудник</th>
                        <th scope="col">Компания</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row" data-label="#">1</td>
                        <td data-label="Товар">Диски</td>
                        <td data-label="Статус заказа">Оформлен</td>
                        <td data-label="Дата доставки">15.02.2022, 15:30</td>
                        <td data-label="Сотрудник">Демошенков С.М.</td>
                        <td data-label="Компания">ООО "ПСК"</td>
                        <td data-label=""><a href="#" class='btn btn-orange'>Открыть</a></td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="#">1</td>
                        <td data-label="Товар">Диски</td>
                        <td data-label="Статус заказа">Оформлен</td>
                        <td data-label="Дата доставки">15.02.2022, 15:30</td>
                        <td data-label="Сотрудник">Демошенков С.М.</td>
                        <td data-label="Компания">ООО "ПСК"</td>
                        <td data-label=""><a href="#" class='btn btn-orange'>Открыть</a></td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="#">1</td>
                        <td data-label="Товар">Диски</td>
                        <td data-label="Статус заказа">Оформлен</td>
                        <td data-label="Дата доставки">15.02.2022, 15:30</td>
                        <td data-label="Сотрудник">Демошенков С.М.</td>
                        <td data-label="Компания">ООО "ПСК"</td>
                        
                        <td data-label=""><a href="#" class='btn btn-orange'>Открыть</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>