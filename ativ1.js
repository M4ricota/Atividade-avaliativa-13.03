/* auto avaliação :D
De começo me travei bastante, ainda não peguei muito o js. Usei como exemplo
 a atividade anterior para essa, até porque era a mais "facil" também.
 quando cheguei no function eu não soube mais oque fazer, então fui olhar algumas atividades anteriores como exemplo. 
 Achei como um exemplo bom o "Vetor array", pois nele usamos o for e arrays, mas mesmo assim ainda não consegui :/ 
 precisei da ajuda do meu namorado para fazer.
Ainda estou muito perdida em tudo, eu sei algumas coisas, mas na hora de aplicar eu não sei.
 */

 let totalAlunos = 9
 let nome, idade, trabalho, lingua;

const nomesSala = ['JasaMyHeart', 'Nana', 'danilão', 'Julia', 'Schiffel', 'Bruno', 'Kevin', 'Paulino', 'Adriano'];
const idadesSala = [17, 17, 17, 17, 17, 39, 17, 32, 25];
const profissao = ['namorado troféu', 'estudante', 'estudante', 'estudante', 'estudante', 'professor E.F', 'estudante', 'marido troféu', 'const. civil'];
const linguagem = ['Russo', 'Espanhol', 'Japones', 'Alemão', 'Português', 'Inglês', 'Inglês', 'Françes', 'Português'];

function SalaInfo(nome, idade, profissao, linguagem) {
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
    this.linguagem = linguagem
}

for(let i = 0;i<totalAlunos;i++){
    nome = nomesSala[i] 
    idade = idadesSala[i]
    trabalho = profissao[i]
    lingua = linguagem[i]

    console.log(`${nome}, ${idade} anos, sou ${trabalho} e nasci em ${2024-idade}, falo ${lingua}\n`);
}




