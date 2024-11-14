<script setup>

import LoginLayout from '@/layouts/LoginLayout.vue';

</script>

<template>
    <LoginLayout>
        <section>
        <div class="conj-login">
            <img src="../assets/logo.png" alt="Logo Aura Library">

            <div class="welcome">
                <h1>Bem-vindo</h1> 
                <h1>de volta!</h1>
                <p>Acesse sua conta agora</p>
                <p>mesmo.</p>
            </div>
            
        </div>

        <div class="dados-login">
            <div class="conj-info">
                <h1>Entre na sua conta</h1>
                <p>Preencha seus dados</p>
            </div>
           
            <div class="input-login">
                <div class="conj-input">
                    <i class="pi pi-user"></i>
                    <input type="email" name="email" id="email" placeholder="Digite seu e-mail">
                </div>

                <div class="conj-input">
                    <i class="pi pi-lock"></i>
                    <input type="password" name="password" id="password" placeholder="Digite sua senha">
                </div>
            </div>

            <span class="esqueci-cadastro"><RouterLink to="/cadastro">Cadastre-se</RouterLink></span>

            <button type="submit" class="btn-login-cadastro"> ENTRAR </button>

        </div>
    </section>
    </LoginLayout>
</template>

<style>

section{
    display: flex;
    width: 100%;
    justify-content: center;
    height: 100vh;

}

.conj-login {
    background-color: #4AA0EF;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 20px;
    width: 35%;
    padding: 2rem;
    text-align: center;
}

.conj-login img{
    height: 150px;
}

.conj-input{
    display: flex;
    align-items: center;
    position: relative;
}

.conj-input i{
    position: absolute;
    left: 25px; 
    top: 50%; 
    transform: translateY(-50%); 
    pointer-events: none; 
    color: #000000;
}

.welcome{
    text-align: left;
}

.dados-login {
    background-color: white;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem;
}

.dados-login h1 {
    font-size: 30px;

}

.dados-login p {
    color: gray;
    font-size: 20px;
    text-align: center;
}

.dados-login a{
    text-decoration: none;
    color: #000;
    display: flex;
    margin-top: -50px;
}

.input-login {
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: space-between;
    gap: 50px;
}

.input-login input {
    width: 100%;
    padding: 1rem;
    padding-left: 60px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    background-color: #d9d9d9;
}

.input-login input::placeholder {
    color: #00000042;
}


.btn-login-cadastro{
    background-color: #4AA0EF;
    border: none;
    border-radius: 50px;
    padding: 15px 50px 15px 50px;
    font-size: 15px;
    width: 200px;
    color: #ffff;
    cursor: pointer;
}

#btn-login{
    border: 3px solid #ffff;
    border-radius: 50px;
    padding: 15px 50px 15px 50px;
    font-size: 15px;
    width: 200px;
    color: #ffff;
    text-decoration: none;
    cursor: pointer;
}

</style>