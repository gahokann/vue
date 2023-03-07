<template lang="">
    <main class="main">
        <div class="main__info">
            <h1 class="main__info__title">Активные заказы</h1>
        </div>
        <div class="main__items">
            <nav-profile />
            <div class="main__item order">
                <table class="table main__item__table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Название</th>
                            <th scope="col">Статус заказа</th>
                            <th scope="col">Сумма заказа</th>
                            <th scope="col">Дата заказа</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Диски</td>
                            <td>Оформлен</td>
                            <td>1750 руб.</td>
                            <td>17.10.2022</td>
                            <td><a href="#" class="header__nav__link btn btn-orange">Открыть заказ</a></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Диски</td>
                            <td>Оформлен</td>
                            <td>1750 руб.</td>
                            <td>17.10.2022</td>
                            <td><a href="#" class="header__nav__link btn btn-orange">Открыть заказ</a></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Диски</td>
                            <td>Оформлен</td>
                            <td>1750 руб.</td>
                            <td>17.10.2022</td>
                            <td><a href="#" class="header__nav__link btn btn-orange">Открыть заказ</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </main>
</template>
<script>
import NavProfile from '@/components/NavProfile.vue';
export default {
    components: {
        NavProfile,
    }
}
</script>
<style lang="">
    
</style>