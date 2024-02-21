let nota1 = Number(prompt("Insira a primeira nota:"));
let nota2 = Number(prompt("Insira a segunda nota:"));
let nota3 = Number(prompt("Insira a terceira nota:"));
let nota4 = Number(prompt("Insira a quarta nota:"));
let aprovacao = "";
// LEMBRE DE CONVERTER OS TIPOS DE DADOS
// Tipagem dinâmica dos infernos

try {
    if (nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10 ||
        nota4 < 0 || nota4 > 10) {
        alert("Por favor insira números entre 0 e 10");
        throw new Error("Um número menor que 0 ou maior que 10 foi inserido");
    }
    else {
        let soma = (nota1 + nota2 + nota3 + nota4);
        let media = (soma / 4);

        switch (media) {
            case media < 5:
                aprovacao = "foi reprovado";
            
            case media > 6:
                aprovacao = "foi aprovado";
    
            case media >= 5 && media <= 6:
                aprovacao = "está em recuperação"
        }

        alert(`O aluno ${aprovacao}.`);
    }
}
catch (Error) {
    console.error(Error);
}
