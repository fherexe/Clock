function clock () { 
    const areaDoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date();
    const horas = horaAgora.getHours ();
    const minutos = horaAgora.getMinutes ();
    const segundos = horaAgora.getSeconds ();
    const formatoHoras = horas.toString ().padStart (2, "0"); //const formatoHors = 12
    const formatoMinutos = minutos.toString ().padStart (2, "0");
    const formatoSegundos = segundos.toString ().padStart (2, "0");
         //.padStart ("0"); definir que o valor vai começar com 0

    areaDoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`

    const frase = document.querySelector('.frase');
``
    dia = new Array ("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-Feira", "Sexta-Feira", "Sábado");

    mes = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

    //Array guardar varias informações, equivalente a uma váriavel, variedade, arranjo. Um dado que armazena varios elementos, estrutura de dados.

    hoje = new Date();

    frase.innerHTML = 
    `${dia[hoje.getDay()]}, 
     ${hoje.getDate().toString().padStart(2, 0)} de 
     ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}
    ` 
    //Aspas `` libera o uso de placeholders ${}

    if (6 <=  parseInt(formatoHoras, 10) <19){ 
        document.querySelector("main").setAttribute("class","morning-box");
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
    }

    if (12 <= parseInt(formatoHoras, 10) <19){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1592281175375-a73f0a55127f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1504&q=80')";
        document.querySelector("main").setAttribute("class","afternoon-box");
    }

    if (19 <= parseInt(formatoHoras, 10) <6){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1506606401543-2e73709cebb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
        document.querySelector("main").setAttribute("class","night-box");
    }
}

setInterval(clock, 1000);


//Operadores lógicos não  estão funcionando pois o dado que estão tentando ler é de uma string