/**
 * @file      index.js
 * @brief     Index file for client side JS
 * @author    Created by Vivien.PICCIN
 * @version   2023-03-29 - original
 */

const BASE_URL = `${location.protocol}//${location.host}`

window.onload = () => {
    $('#translationForm > div > button').on('click', (event) => {
        let dataPayload = {
            language: $('input[name="list-languages"]:checked').val(),
            text: $('#prompt').val()
        }
        $.ajax({
            url: BASE_URL + '/translate',
            method: 'POST',
            contentType: "application/json",
            data: JSON.stringify(dataPayload),
            success: translationSuccess,
            error: translationError
        })
    })
}


function translationSuccess(raw, status, jqXhr) {
    $('output > div').text(raw);
}

function translationError(raw, status, jqXhr) {

}