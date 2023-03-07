<template lang="">
    <main class="main">
        <div class="main__info">
            <h1 class="main__info__title">Для компаний</h1>
        </div>
        <div class="main__items">
            <nav-profile />
            <div class="main__item company">
                <div class="form__block company">
                    <img src="../../assets/img/logo.png" alt="" class="form__img">
                    <h3 class="form__title">Подтверждение компании</h3>
                    <form action="" class="form">
                        <label for="name" class="form__label">Название компании</label>
                        <input type="text" id="name" class="form__input" placeholder="ООО 'ПСК'">
                        
                        <label for="activity" class="form__label">Деятельность компании</label>
                        <input type="text" id="activity" class="form__input" placeholder="Компания занимается...">

                        <label for="web" class="form__label">Интернет портал компании</label>
                        <input type="text" id="web" class="form__input" placeholder="www.1snab.ru">
                        <button class="btn btn-orange auth__btn">Подтвердить</button>
                    </form>
                </div>
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