// REQUEST : Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// VARIABILI
let nome, cognome, colore, numero, password;

// Assegno i valori alle variabili e stampo a schermo
nome = prompt ("Inserisci il tuo nome")
document.getElementById("mio_nome").innerHTML = nome

cognome = prompt ("Inserisci il tuo cognome")
document.getElementById("mio_cognome").innerHTML = cognome

colore = prompt ("Inserisci il tuo colore preferito")
document.getElementById("mio_colore").innerHTML = colore

numero = prompt ("Inserisci il tuo numero preferito")
document.getElementById("mio_numero").innerHTML = numero

// Compongo e assegno la rispttiva stringa alla variabile password
password = nome+cognome+colore+numero

// Stampo a schermo la password
document.getElementById("mia_password").innerHTML = password

// Creo la funzione per copiare il testo
function copyText() {
      
    /* Copy text into line password */
    navigator.clipboard.writeText
        (password);
}
