const getButton=document.getElementById("get-btn");
const sendButton=document.getElementById("send-btn");




const getData=function(){
    const xhr = new XMLHttpRequest();
    //GET, POST, DELETE, OPTIONS, HEAD, PUT
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1"); //prepare the connection

    //jodi json dot parse nah pathai tahole use korte hole
    // xhr.responseType="json"

    xhr.send();//send the request 

    //send howar response powar por onload kaj korbe
    xhr.onload=function(){
        const result=xhr.response;
        console.log(result);
        console.log(typeof(result));
        console.log( JSON.parse(result)); // result ta flat string onek ta json er moto kintu eke bare json noy
        console.log(typeof(JSON.parse(result))); 
    };
}; 
const sendData=function(){

};

getButton.addEventListener("click",getData);

sendButton.addEventListener("click",sendData);