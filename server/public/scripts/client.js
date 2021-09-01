$(readyNow);

function readyNow(){
console.log('client.js');
}

function getTheTrains() {
    // Make a request to the server for the trains
    $.ajax({
        method: 'GET',
        url: '/trains',
    }).then(function(response) {
        console.log('Success!', response);
        
    });
    console.log('After ajax');
    
}

// funciton(response) is an anonymous function that doesn't require a name because it only does something with the response

// function handleSuccess(response) {
//     // response = trains;
//     console.log('success', response);
//     // append the data to the DOM
    
// }