// function generate_random() {
//     random_number = Math.floor(Math.random() * 109) + 19;
//     crystal1 = Math.floor(Math.random() * 11) + 1;
//     $("#crystal1").val(crystal1);
//     crystal2 = Math.floor(Math.random() * 11) + 1;
//     crystal3 = Math.floor(Math.random() * 11) + 1;
//     crystal4 = Math.floor(Math.random() * 11) + 1;
//     $("#random-number-box").html("<p>").html(random_number);
//     console.log($("#crystal1").val());
// }



function get_Crystal_value() {
    console.log(this.value);
}

// function assign_crystal_value() {
//     this.value = 
// }

// generate random notes... 
function generate_random() {
    random_number = Math.floor(Math.random() * 109) + 19;
    $("#random-number-box").html("<p>").html(random_number);
}


function generate_Crystal_random() {
    for (var index = 1; index <= 4; index++) {
        crystals[index] = Math.floor(Math.random() * 11) + 1;
        $("#crystal" + index).val(crystals[index]);        
    }
}


function assignRandCrystal(num){
    $("#crystal" + num).val(generateRandom());

}

function resetGame() {
    random_number = 1;
    user_score = 0;
    
    generate_random();
    generate_Crystal_random();
    // $("#random-number-box").empty();
    // $("#wins").empty();
    // $("losses").empty();
    $("#total-score-box").empty();
    $("#total_score_label").empty();
}