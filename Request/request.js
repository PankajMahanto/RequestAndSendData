const getButton = document.getElementById("get-btn");
const sendButton = document.getElementById("send-btn");


const sendRequest = function (method, url, data) {

    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url); //prepare the connection
        xhr.responseType = "json";
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);

        xhr.onload = function () {
            // console.log(xhr.status);
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }

        };


        //Error two types 
        // application specific error 
        //or content type error
        // network specific error 
        // network specific kaj kore onerror mthod
        xhr.onerror = function () {
            reject("Something is wrong!!");
        };
    });
    return promise;
};

const getData = function () {
    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
        .then(responseData => {
            console.log(responseData);
        });
};

const sendData = function () {
    sendRequest("POST",
        "https://jsonplaceholder.typicode.com/posts1",
        JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }))
        .then(responseData => {
            console.log(responseData);
        })
        .catch((err) => {
            console.log(err);
        });
};

getButton.addEventListener("click", getData);

sendButton.addEventListener("click", sendData);