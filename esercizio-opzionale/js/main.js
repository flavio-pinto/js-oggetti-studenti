/**
 * OPZIONALE
 * Riprodurre la piccola chat fatta insieme durante la lezione utilizzando handlerbars.
 * Estendere la chat fatta con handlebars inserendo i messaggi iniziali, visibili al caricamento della pagina, generati da un array di oggetti.
 * Gli oggetti conterranno proprietà come testo e orario
 * Usiamo Handlebars per la generazione anche di questi messaggi, come avete fatto ieri per i messaggi inseriti dall’utente
 */

$(document).ready(function () {
    
    /**
     * CHAT WITH HANDLEBARS
     */
    // Referenze
    var input = $('.input-message');
    var button = $('.input-button');
    var chat = $('.chatbox');

    // Init Handlebars
    // Referenza template messaggio
    var source = $('#message-template').html();
    // Funzione utility che prende source e fa un compile iniziale del template
    var template = Handlebars.compile(source);

    // Inserisci messaggi iniziali presi da un array di oggetti
    var initialMessagesContainer = [
        {
            text: 'sempre caro mi fu quest\'ermo colle',
            time: '15:00',
            activeClass: 'sent'
        },

        {
            text: 'nel campo mezzo grigio e mezzo nero, resta un aratro senza buoi che pare dimenticato, tra il vapor leggero',
            time: '15:01',
            activeClass: 'received'
        },

        {
            text: 'ho sceso, dandoti il braccio, almeno un milione di scale',
            time: '15:02',
            activeClass: 'sent'
        }
    ];
    // Creo ciclo per aggiungere i messaggi iniziali
    for(var i = 0; i < initialMessagesContainer.length; i++) {
        var initialMessage = template(initialMessagesContainer[i]);
        chat.append(initialMessage);
    }

    // Inserisci nuovo messaggio
    button.click(function() {
        var updatedMessage = input.val().trim();
        
        // Dati dinamici per template Handlebars
        var messageData = {
            text: updatedMessage,
            time: '16:36',
            activeClass: 'sent'
        }

        var newMessage = template(messageData);
        chat.append(newMessage);
        input.val('');

        // Risposta automatica dopo 1 secondo
        setTimeout(function() {
            var messageData = {
                text: 'Ok!',
                time: '16:50',
                activeClass: 'received'
            }
            var newMessage = template(messageData);
            
            chat.append(newMessage);
        }, 1000);
    });
}); // fine ready