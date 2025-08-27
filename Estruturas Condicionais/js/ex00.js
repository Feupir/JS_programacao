var nome, idade

nome = prompt("Qual o seu nome?")
idade = parseInt(prompt("Qual a sua idade?"))

if (idade >= 18) {
    alert("Você está apto a tentar tirar a CNH, " + nome + "!")
} else {
    alert("Você não está apto a tirar a CNH, " + nome + "!")
}