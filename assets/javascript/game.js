function generate_random() {
    random_number = Math.floor(Math.random() * 109) + 19;
    crystal1 = Math.floor(Math.random() * 11) + 1;
    
    crystal2 = Math.floor(Math.random() * 11) + 1;
    crystal3 = Math.floor(Math.random() * 11) + 1;
    crystal4 = Math.floor(Math.random() * 11) + 1;
    $("#random-number-box").html("<p>").html(random_number);
    console.log($("#crystal1").value);
}

function get_Crystal_value() {
    console.log(this.value);
}

// function assign_crystal_value() {
//     this.value = 
// }