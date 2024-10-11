function checkAmount() {
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);

    if (gender == 'male') {
        if (age >= 20 && age <= 60) {
            console.log('You will pay 50 pieces of silver')
            alert('You will pay 50 pieces of silver')
        } else if (age >= 5 && age < 20) {
            alert('You will pay 20 pieces of silver')
        }
        else if (age >= 1 && age < 5) {
            alert('You will pay 5 pieces of silver')
        }
        else if (age > 60) {
            alert('You will pay 15 pieces of silver')
        }
    } else {
        if (age >= 20 && age <= 60) {
            alert('You will pay 30 pieces of silver')
        } else if (age >= 5 && age < 20) {
            alert('You will pay 10 pieces of silver')
        }
        else if (age >= 1 && age < 5) {
            alert('You will pay 3 pieces of silver')
        }
        else if (age > 60) {
            alert('You will pay 5 pieces of silver')
        }
    }
}

document.getElementById('check').addEventListener('click', function(event){
    event.preventDefault();
    checkAmount();
})


