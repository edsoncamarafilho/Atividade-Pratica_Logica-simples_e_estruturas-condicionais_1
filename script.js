// ATIVIDADES LÓGICA SIMPLES

//1)Crie uma variável JavaScript e coloque nela o valor de sua idade. Mostre no html usando o document.write() o dado contido na variável junto da frase "Minha idade é x anos", sendo "x" o valor armazenado na sua variável.

const age = 16
document.write (`Minha idade é ${age} anos <br/><br/>`)

//2) Crie três variáveis JavaScript, em duas delas atribua os valores que você quiser e na outra atribua o valor da soma das duas primeiras variáveis. Apresente valor da soma no documento html junto da  frase "A resultado da soma de x e y é z", sendo x o valor armazenado na primeira variável, y o valor armazenado segunda variável e z o valor armazenado na terceira variável

const number1 = 10
const number2 = 6
const soma = number1 + number2

document.write(`O resultado da soma de ${number1} e ${number2} é ${soma} <br/><br/>`)

/* 3. Crie três variáveis, na primeira variável coloque o total de uma compra, por exemplo 149.90. Na segunda variável coloque a quantidade de parcelas, por exemplo 2. Na terceira variável coloque o valor da parcela. Apresente no documento html as seguintes
 informações:
 "O valor total da compra foi R$_,_"
 "Forma de pagamento: _x de R$_,_"? */

const total = 149.90
const parcelas = 5
const pagamento = total / parcelas

document.write (`O valor total da compra foi de R$${total.toString().replace('.',',')} <br/>`)
document.write (`Forma de pagamento: 5x de R$${pagamento} <br/><br/>`)

/*4. Crie duas variáveis. Na primeira coloque um total de minutos e
defina um valor para ela (por exemplo, minutos = 120). Na segunda

coloque o total em segundos destes minutos armazenados na
primeira variável. Apresente no documento html a seguinte
informação: "_ minutos equivale à _ segundos!"*/

const minutos = 120
const segundos = minutos * 60

document.write (`${minutos} minutos equivale à ${segundos} segundos! <br/><br/>`)

/*5. Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
Calcule a média das notas e armazene na quinta variável criada.
Apresente no documento html a seguinte informação:
"O aluno _____ ficou com média _,_" */

const aluno = 'Edson'
const nota1 = 9
const nota2 = 8.5
const nota3 = 7.2
const media = (nota1 + nota2 + nota3) / 3

document.write (`O aluno ${aluno} ficou com média ${media.toFixed(1)} <br/><br/>`)

/*6. Desenvolva um algoritmo que armazene o valor 10 em uma variável
A e o valor 20 em uma variável B. A seguir (utilizando apenas
atribuições entre variáveis) troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final,
escrever os valores que ficaram armazenados nas variáveis. */

let A = 10
let B = 20
let troca = A

A = B
B = troca

document.write(`O valor de a é: ${A} <br/>`)
document.write(`O valor de b é: ${B} <br/><br/>`)

/*7. Desenvolva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e
escrever o percentual que cada um representa em relação ao total
de eleitores.*/

const totalLeitores = 100
const brancos = 20
const nulos = 10
const validos = (total - brancos - nulos)

const percentualBranco = ((brancos / total) *100).toFixed(2)
const percentualNulos = ((nulos / total)*100).toFixed(2)
const percentualValidos = ((validos / total)*100).toFixed(2)

document.write(`O percentual de Brancos é ${percentualBranco}%<br>`)
document.write(`O percentual de Nulos é ${percentualValidos}%<br>`)
document.write(`O percentual de validos é ${percentualNulos}%<br><br>`)


// 8. Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

const numero1 = 1
const numero2 = 2

if (numero1 === numero2){
    document.write('Os números são iguais <br><br>')
} else if (numero1 > numero2) {
    document.write ('O primeiro é maior <br><br>')
} else {
    document.write('Segundo maior <br><br>')
}


/* 9. As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const maças = 20
if(maças >= 12) {
     document.write(`Valor R$ ${(maças*0.25).toFixed(2).replace('.', ',')}<br/><br/>`)
    } else { 
        document.write(`Valor R$ ${(maças*0.30).toFixed(2).replace('.', ',')} <br/><br/>`)
    }


    // 10. Escreva um algoritmo que tenha como valores de entradas o nome
    // e idade do usuário e imprima no terminal o nome, a idade e o ano
    // de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
    // em 2000”.
    // OBS: Pegue o ano atual como base


    const nomeEntrada = 'Edson'
    const idadeEntrada = 17
    
    const anoNascimento = (2023 - idadeEntrada)

    document.write(`Nome:${nomeEntrada}, Idade: ${idadeEntrada} e nasceu em ${anoNascimento} <br><br>`)


    // //    11. Crie um algoritmo que armazene um número inteiro positivo, e gere
    // // um alerta com as seguintes mensagens:
    // // a. “Número é par!”, se o valor armazenado for par;
    // // b. “Número é impar!”, se o valor armazenado for ímpar  

    const numeroInteiro = 5

    if (numeroInteiro %2 === 0) {
        document.write ('O Numero é par')
    } else {
        document.write ('O Numero é impar <br><br>')
    }

    // 12. Escreva um algoritmo que armazene o ano atual e o ano de
    // nascimento de uma pessoa. Escrever uma mensagem no console
    // qque diga se ela poderá ou não votar este ano (nã é          necessário
    // considerar o mês em que a pessoa nasceu).


    const anoAtual = 2023
    const anoDeNascimento = 2007

    const calculoVotar = (anoAtual - anoDeNascimento)

    if (calculoVotar >= 16) {
        document.write ('Pode votar!')
    } else {
        document.write ('Você não pode votar!')
    }
