/**
 * OPZIONALE
 * Riprodurre la piccola chat fatta insieme durante la lezione utilizzando handlerbars.
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