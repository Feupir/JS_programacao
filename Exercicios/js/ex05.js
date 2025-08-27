var n1,n2,n3,n4,freq
n1 = parseFloat(prompt("Digite a primeira nota: "))
n2 = parseFloat(prompt("Digite a segunda nota: "))
n3 = parseFloat(prompt("Digite a terceira nota: "))
n4 = parseFloat(prompt("Digite a quarta nota: "))
freq = parseFloat(prompt("Digite o percentual de frequência: "))

if ((n1 + n2 + n3 + n4) / 4 >= 7 && freq >= 75) {
    alert("Aprovado com média " + (n1 + n2 + n3 + n4) / 4)
} else {
    alert("Reprovado com média " + (n1 + n2 + n3 + n4) / 4)
}
