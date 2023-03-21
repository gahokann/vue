<template lang="">
    <div class="index__profile">
        <div class="settings__items">
            <div class="settings__item">
                <h3 class="settings__item__title">ФИО</h3>
                <p class="settings__item__fio">Демошенков Сергей Михайлович</p>
                <a href="#" @click="changeFio.active = !changeFio.active" class="btn btn-orange">Изменить</a>
                <div class="form__settings" :class="changeFio">
                    <form action="" class="form settings">
                        <label for="firstname" class="form__label">Фамилия</label>
                        <input type="text" id="firstname" value="Демошенков" class="form__input change" placeholder="info@1snab.ru">
                        <label for="secondname" class="form__label">Имя</label>
                        <input type="text" id="secondname" value="Сергей" class="form__input change" placeholder="123456789...">
                        <label for="lastname" class="form__label">Отчество</label>
                        <input type="text" id="lastname" value="Михайлович" class="form__input change" placeholder="123456789...">
                        <button class="btn btn-orange btn__change">Изменить</button>
                    </form>
                </div>
            </div>
            <div class="settings__item">
                <h3 class="settings__item__title">Электронная Почта</h3>
                <p class="settings__item__fio">topsamper227@mail.ru</p>
                <a href="#" @click="changeEmail.active = !changeEmail.active" class="btn btn-orange">Изменить</a>
                <div class="form__settings" :class="changeEmail">
                    <form action="" class="form settings">
                        <label for="password" class="form__label">Введите пароль</label>
                        <input type="password" id="password" class="form__input change" placeholder="123456789...">
                        <label for="email" class="form__label">Почта</label>
                        <input type="email" id="email" class="form__input change" placeholder="1@snab.ru">
                        <button class="btn btn-orange btn__change">Изменить</button>
                    </form>
                </div>
            </div>
            <div class="settings__item">
                <h3 class="settings__item__title">Номер телефона</h3>
                <p class="settings__item__fio">+79778598026</p>
                <a href="#" @click="changePhone.active = !changePhone.active" class="btn btn-orange">Изменить</a>
                <div class="form__settings" :class="changePhone">
                    <form action="" class="form settings">
                        <label for="password2" class="form__label">Введите пароль</label>
                        <input type="password" id="password2" class="form__input change" placeholder="123456789...">
                        <label for="tel" class="form__label">Номер телефона</label>
                        <input type="text" id="email" class="form__input change" placeholder="1@snab.ru">
                        <button class="btn btn-orange btn__change">Изменить</button>
                    </form>
                </div>
            </div>
            <div class="settings__item">
                <h3 class="settings__item__title">Пароль</h3>
                <p class="settings__item__fio">*******</p>
                <a href="#" @click="changePassword.active = !changePassword.active" class="btn btn-orange">Изменить</a>
                <div class="form__settings" :class="changePassword">
                    <form action="" class="form settings">
                        <label for="lastpassword" class="form__label">Старый пароль</label>
                        <input type="password" id="lastpassword" class="form__input change" placeholder="123456789...">
                        <label for="newpassword" class="form__label">Новый пароль</label>
                        <input type="password" id="newpassword" class="form__input change" placeholder="123456789...">
                        <label for="repassword" class="form__label">Повторите пароль</label>
                        <input type="password" id="repassword" class="form__input change" placeholder="123456789...">
                        <button class="btn btn-orange btn__change">Изменить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            changeFio: {
                active: false,
            },
            changeEmail: {
                active: false,
            },
            changePhone: {
                active: false,
            },
            changePassword: {
                active: false,
            },
        }
    }
}
</script>
<style lang="">
    
</style>