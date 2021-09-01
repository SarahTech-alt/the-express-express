$(readyNow);

function readyNow(){
console.log('client.js');
// set up a click handler for the button
$('#submit-button').on('click', postTheTrain);
getTheTrains();
}

function postTheTrain() {
    $.ajax({
        method: 'POST',
        url: '/trains',
        data: {
            name: $('#train-name').val(),
            color: $('#train-color').val()
        },
    }).then(handlePostSuccess).catch(postError);
}

function getTheTrains() {
    // Make a request to the server for the trains
    $.ajax({
        method: 'GET',
        url: '/trains',
    }).then(handleSuccess).catch(handleError); 
    console.log('After ajax');
    }

function handlePostSuccess() {
    // clear the inputs
    $('input').val('');
    getTheTrains();
}

function postError(){
    // log and alert the error
}

function handleError(error) {
    alert('Something went wrong!');
}

// function(response) is an anonymous function that doesn't require a name because it only does something with the response

function handleSuccess(response) {
    $('#train-depot').empty();
    const listOfTrains = response;
    for(const train of listOfTrains) {
        console.log(train);
        $('#train-depot').append(`<li>${train.name}: ${train.color}</li>`)
    }
} 


//     // response = trains;
//     console.log('success', response);
//     // append the data to the DOM

   // console.log('Success!', response);
        // const listOfTrains = response;
        // for(const train of listOfTrains) {
        //     console.log(train);
        //     $('#train-depot').append(`<li>${train.name}: ${train.color}`)
        // }
        
    // }).catch(handleError);