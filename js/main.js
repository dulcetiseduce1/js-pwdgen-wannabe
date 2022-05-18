// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito22

const inputName = prompt("Inserisci il tuo nome")
const inputSurname = prompt("Inserisci il tuo cognome")
const inputColor = prompt("Inserisci il tuo colore preferito")
const outputJS = document.getElementById("outputHTML")
outputJS.innerHTML = `<strong>
                    ${inputName}${inputSurname}${inputColor}22
                    </strong>`
