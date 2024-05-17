const getButton = document.getElementById("get-btn");
const sendButton = document.getElementById("send-btn");


const sendRequest = function (method, url) {

    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url); //prepare the connection
        xhr.responseType="json";
        xhr.send();

        xhr.onload = function () {
            resolve(xhr.response);
        };
    });
    return promise;
};

const getData = function () {
    sendRequest('GET','https://jsonplaceholder.typicode.com/todos/1')
    .then(responseData =>{
        console.log(responseData);
    });
};

const sendData = function () {
    sendRequest('POST','https://jsonplaceholder.typicode.com/posts')
    .then(responseData =>{
        console.log(responseData);
    });
};

getButton.addEventListener("click", getData);

sendButton.addEventListener("click", sendData);