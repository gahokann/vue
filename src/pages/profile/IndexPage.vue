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
                <div class="index__profile__dostup">
                    <h3 class="profile__dostup__title">Ваш уровень доступа: Пользователь</h3>
                    <p class="profile__dostup__text">Вы имеете стандартные уровни функций. Сделать заказы невозможно</p>
                </div>
            </div>
        </div>
        <div class="index__profile__orders">
            <div class="index__profile__orders__info">
                <h3 class="index__profile__order__title">Активные заказы</h3>
                <a href="#" class='btn btn-orange'>Сделать заказ</a>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Товар</th>
                        <th scope="col">Статус заказа</th>
                        <th scope="col">Дата заказа</th>
                        <th scope="col">Сотрудник</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Диски</td>
                        <td>Оформлен</td>
                        <td>15.02.2022, 15:30</td>
                        <td>Демошенков С.М.</td>
                        <td><a href="#" class='btn btn-orange'>Открыть</a></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Диски</td>
                        <td>Оформлен</td>
                        <td>15.02.2022, 15:30</td>
                        <td>Демошенков С.М.</td>
                        <td><a href="#" class='btn btn-orange'>Открыть</a></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Диски</td>
                        <td>Оформлен</td>
                        <td>15.02.2022, 15:30</td>
                        <td>Демошенков С.М.</td>
                        <td><a href="#" class='btn btn-orange'>Открыть</a></td>
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