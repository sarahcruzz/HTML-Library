<script setup>

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
                    <input type="text" name="name" id="name" placeholder="Digite seu nome">
                </div>

                <div class="conj-input">
                    <i class="pi pi-lock"></i>
                    <input type="password" name="password" id="password" placeholder="Digite uma senha segura">
                </div>
                
            </div>

            <button type="submit" class="btn-login-cadastro"> CADASTRAR </button>

        </div>
    </section>
    </LoginLayout>
</template>