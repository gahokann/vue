<template lang="">
    <div class="index__profile">
        <div class="form__block">
            <img src="../../assets/img/logo.png" alt="" class="form__img">
            <h3 class="form__title company">Подтверждение компании</h3>
            <form action="" class="form ">
                <label for="name" class="form__label">Название компании</label>
                <input type="text" id="name" class="form__input" placeholder="ООО 'ПСК'">
                
                <label for="job" class="form__label">Деятельность компании</label>
                <input type="text" id="job" class="form__input" placeholder="Компания занимается...">

                <label for="portal" class="form__label">Интернет портал</label>
                <input type="text" id="portal" class="form__input" placeholder="https://1snab.ru">
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