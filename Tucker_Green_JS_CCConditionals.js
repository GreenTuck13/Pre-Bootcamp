//Creating a boolean to store whether I have finished my homework or not
var hasFinishedHomework = true

//Variables to store the current time (random 24 hour format) and day of the week
var currentTime = Math.floor(Math.random() * 24)
console.log(currentTime)
var day = 'Wednesday'

//Random reward arrays
var evenTime = ['Ice Cream', 'Cookies', "Candy"]
var oddTime = ['Hot Chocolate', 'Tea', 'Cake']

if (hasFinishedHomework) {
    if (currentTime < 10) {
        console.log("Reward: Latte!")
    } else if (currentTime >= 10 && currentTime < 15) {
        console.log("Reward: Hot Chocolate!")
    } else if (currentTime >= 15 && currentTime < 18) {
        if (currentTime % 2 === 0) {
            console.log(`Reward: ${randomReward(evenTime)}`)
        } else {
            console.log(`Reward: ${randomReward(oddTime)}`)
        }
    } else if (currentTime >= 18 && currentTime < 22) {
        if (day == "Wednesday") {
            console.log("Reward: Strawberry Ice Cream!")
        } else {
            console.log("Reward: Vanilla Ice Cream!")
        }
    } else {
        console.log("Sleep...")
    }
}

function randomReward(rewards) {
    var randomIndex = Math.floor(Math.random() * 3)
    return rewards[randomIndex]
}
