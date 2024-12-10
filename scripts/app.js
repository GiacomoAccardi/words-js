let docSession = false;
// la variabile docSession è un booleano, essa rappresenta lo stato della sessione di un documento. Se è "false" allora non c'è un documento su cui si sta lavorando e se è "true", si.

//definisco un messaggio di benvenuto
let welcomeMsg = "Benvenuto, qui non c'è nulla! Perchè non crei un nuovo documento?";

//Definisco dove il messaggio deve essere visualizzato
const appWrapper = document.getElementById('app-wrap');

//il messaggio di benvenuto deve essere disponibile nella home solo se un documento non è presente, quindi:
checkWlcMsg();

//cliccando su "Nuovo" voglio che la sessione del documento venga impostata su true.
const newDocButton = document.getElementById('new-doc-bt');

newDocButton.addEventListener('click', function(){
    docSession = true;
    checkWlcMsg();
    createNewDoc();
});


//functions

//Questa funzione controlla la variabile docSession e stampa o meno il messaggio di benvenuto 
function checkWlcMsg(){
    if(docSession === false){
        //inserisco l'html col messaggio all'interno dello spot
        appWrapper.innerHTML = `<p>${welcomeMsg}</p>`; 
        document.querySelector('#tool-bar').classList.add('hidden');
    } else {
        appWrapper.innerHTML = ``; 
        document.querySelector('#tool-bar').classList.remove('hidden');
    }
}
//funzione che genera il foglio sulla quale scrivere
function createNewDoc(){
    document.getElementById('app-wrap').innerHTML = `<div class="paper"><textarea class="full-size-textarea"></textarea></div>`;
}


