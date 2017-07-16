
function BasicCard(front, back) {
    this.front = front;
    this.back = back;

    this.printInfo = function() {
        console.log("Your new card has been created");
        console.log("card front: " + JSON.stringify(front));
        console.log("card back: " + JSON.stringify(back)); 

    };
}

module.exports = BasicCard;