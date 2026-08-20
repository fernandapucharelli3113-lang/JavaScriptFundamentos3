const respostaApi = [{"id":1, "nome":"Vinicius"},{"id":2, "nome":"go"},
]; 
const usuarios = JSON.parse(respostaApi);

usuarios.forEach(aluno => console.log(aluno.nome));