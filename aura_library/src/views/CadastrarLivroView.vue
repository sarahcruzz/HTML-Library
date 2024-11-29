<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';


</script>

<template>
    <DefaultLayout>
    <div class="form-container">
        <h1>Cadastro de Livro</h1>
        <form action="#">
            <div class="form-group">

                <div class="lab-input">
                    <label for="titulo">Título</label>
                    <input type="text" id="titulo" name="titulo" required>
                </div>

                <div class="lab-input">
                    <label for="isbn">ISBN</label>
                    <input type="text" id="isbn" name="isbn" required>
                </div>

                <div class="lab-input">
                    <label for="genero">Gênero</label>
                    <input type="text" id="genero" name="genero" required>
                </div>
            </div>
            <div class="form-group">

                <div class="lab-input">
                    <label for="imagem">Imagem do Livro</label>
                    <input type="file" id="imagem" name="imagem" accept="image/*" required>
                </div>

                <div class="lab-input">
                    <label for="autor">Autor</label>
                    <input type="text" id="autor" name="autor" required>
                </div>

                <div class="lab-input">
                    <label for="ano">Ano de Publicação</label>
                    <input type="number" id="ano" name="ano" min="1000" max="9999" required>
                </div>

            </div>
            <div class="form-group1">
                <div class="lab-input">
                    <label for="descricao">Descrição</label>
                    <textarea id="descricao" name="descricao" required></textarea>
                </div>
                
                <button type="submit">Confirmar</button>
            </div>
        </form>
    </div>
    </DefaultLayout>
</template>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    padding: 40px 120px;
    border-radius: 8px;
    width: 100%;
}
.form-container h1 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 24px;
    color: #333;
}
.form-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.form-group1{
    display: flex;
    justify-content: space-between;
    align-items: end;
}

.form-group1 button{
    width: 120px;
    height: 40px;
    font-size: 15px;
    border: none;
    color: #fff;
    border-radius: 10px;
    background-color: #12a356;
    cursor: pointer;
}

.form-group1 textarea{
    max-width: 500px;
    min-width: 500px;
    max-height: 150px;
    min-height: 150px;
} 

.form-group label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}
.form-group input, 
.form-group select, 
.form-group textarea {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}
.form-group textarea {
    resize: none;
    height: 100px;
}
.form-group input[type="file"] {
    padding: 10px;
}
.form-group button {
    width: 100%;
    padding: 10px;
    background-color: #5cb85c;
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
}
.form-group button:hover {
    background-color: #4cae4c;
}

.lab-input{
    display: flex;
    flex-direction: column;
}
</style>