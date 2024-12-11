<script setup>
import LoginLayout from '@/layouts/LoginLayout.vue';
import { ref } from 'vue';
import axios from 'axios';

// Variáveis reativas para o formulário
const name = ref('');
const password = ref('');

// Função para registrar um novo usuário
const handleRegister = async () => {
    try {
        // Chamada para a API de registro
        const response = await axios.post('http://localhost:3000/api/auth/register', {
            username: name.value,
            password: password.value,
        });

        // Exibir uma mensagem de sucesso
        alert('Usuário cadastrado com sucesso! Agora você pode fazer login.');

        // Limpar os campos após o sucesso
        name.value = '';
        password.value = '';
    } catch (error) {
        console.error('Erro ao registrar usuário:', error.response?.data?.error || 'Erro desconhecido');
        alert('Erro ao registrar usuário: ' + (error.response?.data?.error || 'Erro desconhecido'));
    }
};
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

                <RouterLink to="/login" id="btn-login"> ENTRAR </RouterLink>
            </div>

            <div class="dados-login">
                <div class="conj-info">
                    <h1>Crie sua conta</h1>
                    <p>Preencha seus dados</p>
                </div>

                <div class="input-login">
                    <div class="conj-input">
                        <i class="pi pi-user"></i>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Digite seu nome"
                            v-model="name"
                        />
                    </div>

                    <div class="conj-input">
                        <i class="pi pi-lock"></i>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Digite uma senha segura"
                            v-model="password"
                        />
                    </div>
                </div>

                <button
                    type="button"
                    class="btn-login-cadastro"
                    @click="handleRegister"
                >
                    CADASTRAR
                </button>
            </div>
        </section>
    </LoginLayout>
</template>

<style>
/* O mesmo estilo do exemplo anterior, mantido */
</style>
