<template lang="">
    <div class="index__profile">
        <div class="form__block">
            <img src="../../assets/img/logo.png" alt="" class="form__img">
            <h3 class="form__title company">Оформление заказа</h3>
            <form action="" class="form ">
                <label for="name" class="form__label">Название товара</label>
                <input type="text" id="name" class="form__input" placeholder="Диски отрезные">

                <label for="number" class="form__label">Количество товара</label>
                <input type="number" id="number" class="form__input" placeholder="0" min="0">

                <label for="date" class="form__label">Предварительная дата доставки</label>
                <input type="date" id="date" class="form__input" placeholder="01.01.2023" />

                <label for="text" class="form__label">Дополнительная информация</label>
                <textarea type="number" id="text" class="form__input textarea" placeholder="..." />

                <label for="file" class="form__label">Изображение</label>
                <input type="file" class="form-control" id="name">
                <p class="form__input-comment">Не обязательно</p>

                <button class="btn btn-orange auth__btn">Подтвердить</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>