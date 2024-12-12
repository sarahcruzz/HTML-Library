<script setup>
import LoginLayout from '@/layouts/LoginLayout.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// Variáveis reativas para username e password
const username = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
            username: username.value,
            password: password.value,
        });

        // Armazena o token no localStorage
        localStorage.setItem('token', response.data.token);

        // Exibe um alerta de sucesso
        alert('Login bem-sucedido!');

        // Redireciona para a rota /home
        router.push('/home');
    } catch (error) {
        console.error('Erro no login:', error.response?.data?.error || 'Erro desconhecido');

        // Mostra o erro em um alerta
        alert('Erro ao fazer login: ' + (error.response?.data?.error || 'Erro desconhecido'));
    }
};

</script>

<template>
    <LoginLayout>
        <section>
            <div class="conj-login">
                <img src="../assets/logo.png" alt="Logo Aura Library" />

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
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Digite seu usuário"
                            v-model="username"
                        />
                    </div>

                    <div class="conj-input">
                        <i class="pi pi-lock"></i>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Digite sua senha"
                            v-model="password"
                        />
                    </div>
                </div>

                <span class="esqueci-cadastro">
                    <RouterLink to="/cadastro">Cadastre-se</RouterLink>
                </span>

                <button type="button" class="btn-login-cadastro" @click="handleLogin">ENTRAR</button>
            </div>
        </section>
    </LoginLayout>
</template>

<style>

section {
    display: flex;
    width: 100%;
    justify-content: center;
    height: 100vh;
}

.conj-login {
    background-color: #44749d;
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

.conj-login img {
    height: 150px;
}

.conj-input {
    display: flex;
    align-items: center;
    position: relative;
}

.conj-input i {
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: #000000;
}

.welcome {
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

.dados-login a {
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

.btn-login-cadastro {
    background-color: #44749d;
    border: none;
    border-radius: 50px;
    padding: 15px 50px;
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
