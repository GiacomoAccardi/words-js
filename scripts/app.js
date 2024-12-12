let docSession = false;
// la variabile docSession è un booleano, essa rappresenta lo stato della sessione di un documento. Se è "false" allora non c'è un documento su cui si sta lavorando e se è "true", si.

//definisco un messaggio di benvenuto
let welcomeMsg = "Benvenuto, qui non c'è nulla! Perchè non crei un nuovo documento?";

//Definisco dove il messaggio deve essere visualizzato
const appWrapper = document.getElementById('app-wrap');

//il messaggio di benvenuto deve essere disponibile nella home solo se un documento non è presente, quindi:
checkSession();

//cliccando su "Nuovo" voglio che la sessione del documento venga impostata su true.
const newDocButton = document.getElementById('new-doc-bt');

newDocButton.addEventListener('click', createNewDoc);

//associo il tasto "SIZE" nella toolbar allo script
const fsBtn = document.querySelector('#f-size');
//associo il tasto "BOLD" nella toolbar allo script
const boldBtn = document.querySelector('#f-bold');
//associo il tasto "italic" nella toolbar allo script
const italicBtn = document.querySelector('#f-italic');
//associo il tasto "underline" nella toolbar allo script
const uLineBtn = document.querySelector('#f-underline');
//associo il tasto "align" nella toolbar allo script
const alignBtn = document.querySelector('#f-align');

//associo al sotto menu degli strumenti una variabile
const toolSubMenu = document.querySelector('#tool-submenu');

//size-sub menu
const sizeMenu = document.querySelector('#size-menu');
//align-sub menu
const alignMenu = document.querySelector('#align-menu');

//rendo funzionante il tasto size
fsBtn.addEventListener('click', () =>{
    //console.log('hai clicckato.')

    if(fsBtn.classList.contains('focused')){
        fsBtn.classList.remove('focused');
        toolSubMenu.classList.add('hidden');
        sizeMenu.classList.add('hidden');
        alignMenu.classList.add('d-flex-row');
        alignMenu.classList.remove('hidden');
    } else {
        fsBtn.classList.add('focused');
        toolSubMenu.classList.remove('hidden');
        sizeMenu.classList.remove('hidden');
        sizeMenu.classList.add('d-flex-row');
        alignMenu.classList.remove('d-flex-row');
        alignMenu.classList.add('hidden');
    }
})

//rendo funzionante il tasto bold
boldBtn.addEventListener('click', () =>{
    //console.log('hai clicckato.')
    if(boldBtn.classList.contains('focused')){
        boldBtn.classList.remove('focused');
        document.querySelector('textarea').classList.remove('txt-bold');
    } else {
        boldBtn.classList.add('focused');
        document.querySelector('textarea').classList.add('txt-bold');
    }
})

//rendo funzionante il tasto italic
italicBtn.addEventListener('click', () =>{
    //console.log('hai clicckato.')
    if(italicBtn.classList.contains('focused')){
        italicBtn.classList.remove('focused');
        document.querySelector('textarea').classList.remove('txt-italic');
    } else {
        italicBtn.classList.add('focused');
        document.querySelector('textarea').classList.add('txt-italic');
    }
})

//rendo funzionante il tasto underline
uLineBtn.addEventListener('click', () =>{
    //console.log('hai clicckato.')
    if(uLineBtn.classList.contains('focused')){
        uLineBtn.classList.remove('focused');
        document.querySelector('textarea').classList.remove('txt-underline');
    } else {
        uLineBtn.classList.add('focused');
        document.querySelector('textarea').classList.add('txt-underline');
    }
})

//rendo funzionante il tasto align
alignBtn.addEventListener('click', () =>{
    //console.log('hai clicckato.')

    if(alignBtn.classList.contains('focused')){
        alignBtn.classList.remove('focused');
        toolSubMenu.classList.add('hidden');
        alignMenu.classList.add('hidden');
        sizeMenu.classList.add('d-flex-row');
        sizeMenu.classList.remove('hidden');
    } else {
        alignBtn.classList.add('focused');
        toolSubMenu.classList.remove('hidden');
        alignMenu.classList.remove('hidden');
        alignMenu.classList.add('d-flex-row');
        sizeMenu.classList.remove('d-flex-row');
        sizeMenu.classList.add('hidden');
    }
})

//associo allo script i tasti del sotto menu Size
const smallS = document.querySelector('#size-small');
const defaultS = document.querySelector('#size-default');
const bigS = document.querySelector('#size-big');

//definisco il funzionamento dei tasti del sotto menu Size
smallS.addEventListener('click', () => {
    document.querySelector('textarea').classList.add('size-small');
    document.querySelector('textarea').classList.remove('size-big');
    smallS.classList.add('txt-blue');
    bigS.classList.remove('txt-blue');
    defaultS.classList.remove('txt-blue');
});
defaultS.addEventListener('click', () => {
    document.querySelector('textarea').classList.remove('size-small', 'size-big');
    defaultS.classList.add('txt-blue');
    bigS.classList.remove('txt-blue');
    smallS.classList.remove('txt-blue');
});
bigS.addEventListener('click', () => {
    document.querySelector('textarea').classList.add('size-big');
    document.querySelector('textarea').classList.remove('size-small');
    bigS.classList.add('txt-blue');
    defaultS.classList.remove('txt-blue');
    smallS.classList.remove('txt-blue');
});

//associo allo script i tasti del sotto menu align
const lAlign = document.querySelector('#align-l');
const cntrAlign = document.querySelector('#align-cntr');
const rAlign = document.querySelector('#align-r');

lAlign.addEventListener('click', () => {
    document.querySelector('textarea').classList.add('align-left');
    document.querySelector('textarea').classList.remove('align-center', 'align-right');
    lAlign.classList.add('txt-blue');
    cntrAlign.classList.remove('txt-blue');
    rAlign.classList.remove('txt-blue');
});
rAlign.addEventListener('click', () => {
    document.querySelector('textarea').classList.add('align-right');
    document.querySelector('textarea').classList.remove('align-center', 'align-left');
    rAlign.classList.add('txt-blue');
    cntrAlign.classList.remove('txt-blue');
    lAlign.classList.remove('txt-blue');
});
cntrAlign.addEventListener('click', () => {
    document.querySelector('textarea').classList.add('align-center');
    document.querySelector('textarea').classList.remove('align-left', 'align-right');
    cntrAlign.classList.add('txt-blue');
    rAlign.classList.remove('txt-blue');
    lAlign.classList.remove('txt-blue');
});

//functions

//Questa funzione controlla la variabile docSession e stampa o meno il messaggio di benvenuto 
function checkSession(){
    if(docSession === false){
        //inserisco l'html col messaggio all'interno dello spot
        appWrapper.innerHTML = `<p>${welcomeMsg}</p>`; 
        document.querySelector('#tool-bar').classList.add('hidden');
    } else {
        appWrapper.innerHTML = ``; 
        document.querySelector('#tool-bar').classList.remove('hidden');
        document.querySelector('#tool-bar').classList.add('d-flex');
    }
}
//funzione che genera il foglio sulla quale scrivere
function createNewDoc(){
    docSession = true;
    checkSession();
    document.getElementById('app-wrap').innerHTML = `<div id="paper" class="paper"><textarea class="full-size-textarea"></textarea></div>`;

    newDocButton.removeEventListener('click', createNewDoc);
}

