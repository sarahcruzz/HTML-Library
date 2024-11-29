<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';


</script>

<template>
    <DefaultLayout>
        <div class="form-container">
        <h1>Cadastro de Livro</h1>
        <form action="#" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label for="titulo">Título</label>
                <input type="text" id="titulo" name="titulo" required>
            </div>
            <div class="form-group">
                <label for="isbn">ISBN</label>
                <input type="text" id="isbn" name="isbn" required>
            </div>
            <div class="form-group">
                <label for="genero">Gênero</label>
                <select id="genero" name="genero" required>
                    <option value="">Selecione o gênero</option>
                    <option value="ficcao">Ficção</option>
                    <option value="nao-ficcao">Não Ficção</option>
                    <option value="romance">Romance</option>
                    <option value="fantasia">Fantasia</option>
                    <option value="biografia">Biografia</option>
                </select>
            </div>
            <div class="form-group">
                <label for="imagem">Imagem do Livro</label>
                <input type="file" id="imagem" name="imagem" accept="image/*" required>
            </div>
            <div class="form-group">
                <label for="autor">Autor</label>
                <input type="text" id="autor" name="autor" required>
            </div>
            <div class="form-group">
                <label for="ano">Ano de Publicação</label>
                <input type="number" id="ano" name="ano" min="1000" max="9999" required>
            </div>
            <div class="form-group">
                <label for="descricao">Descrição</label>
                <textarea id="descricao" name="descricao" required></textarea>
            </div>
            <div class="form-group">
                <button type="submit">Confirmar</button>
            </div>
        </form>
    </div>
    </DefaultLayout>
</template>

<style scoped>
.form-container {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}
.form-container h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}
.form-group {
    margin-bottom: 15px;
}
.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}
.form-group input, 
.form-group select, 
.form-group textarea {
    width: 100%;
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
    padding: 3px;
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
</style>