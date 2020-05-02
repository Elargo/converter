'use strict';

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();
    function convert() {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.onload = function () {
                if (request.readyState === 4 && request.status == 200) {
                    resolve(this.response);
                } else {
                    reject();
                }
            };
            request.send();
        });
    }
    convert()
            .then((a) => {
                let data = JSON.parse(a);
                inputUsd.value = inputRub.value / data.usd;
            })
            .catch(() => inputUsd.value = "Что-то пошло не так!");
});