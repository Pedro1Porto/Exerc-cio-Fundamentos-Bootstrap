const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputTel = document.getElementById('tel');

inputNome.addEventListener('input', function(event) {
    let valor = event.target.value.toLowerCase(); //peguei valor e deixo em tudo minusculo
    valor = valor.replace(/\b\w/g, char => char.toUpperCase()); //transformei o valor que deixei em minusculo, agora eu quero que a primeira letra de cada palavra fique maiuscula, então uso o replace, onde eu busco por cada palavra usando a regex \b para inicio de palavra e \w para qualquer caractere(porem nao ira ser aleatoriamente, pois deixei hieraquicamente depois do incio d palavra), e para cada char encontrado, eu transformo ele em maiusculo usando o toUpperCase
    event.target.value = valor; //agora c valor trasnformado para cada primeira letra de palavra for Maiuscula, devolvo este valor cuma funcao para E, o parametro da funcao...
})

inputTel.addEventListener('input', function(event) {
    let valor = event.target.value.replace(/\D/g, ''); //pegando valor do input, uso replace para substituir tudo que nao fur numero, para '', um campo vazi.. o usuario nao conseguira escrever algum caracter que nao seja numero. \D = não é digito, g = global, para toda string. Juntando os dois, é toda string global que nao for digito, convertido em espaço vazio
    valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) ($2)-($3)'); //agora quero formatar o numero, entao uso replace novamente, onde busco por 2 digitos, depois 5 digitos e depois 4 digitos, e para cada um desses grupos de digitos, eu coloco uma formatação diferente usando os parenteses e o traço. O $1, $2 e $3 representam os grupos de digitos encontrados na regex
    event.target.value = valor;
})

inputEmail.addEventListener('input', function(event){
    let valor = event.target.value;
    valor = valor.replace(/\s/g, ''); //transformo toda string global, onde tem espaço, em '', ou seja, um campo vazio. O usuario nao conseguira escrever espaços no email
    if (valor.endsWith('.')) {
        valor = valor + 'com'; //se o valor terminar com '.', adiciono 'com' no final, completando o '.com'
    }
    event.target.value = valor;
})