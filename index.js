// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// .......................................................
// The onclick event listener

// function increment() {
//     console.log("The button was clicked")
// }

// .............................
// Using functions to write less code
// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// Setting up the the race 🏎 🏎 🏎

// countdown()

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

// countdown()
// ........................................

// Write a function that increments

// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)
// ...........................................

// Increment on clicks

// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)


// let count = 0

// function increment() {
//     count = count + 1
//     console.log(count)
// }
// ..................................


// Display the count

// in addition to the previous practice

// change the count-el in the HTML to reflect the new count


// document.getElementById("count-el").innerText = 5
//// camelCase
//// grab the count-el element, store it in a countEl variable
// let countEl = document.getElementById("count-el") // pass in arguments

// console.log(countEl)

// let count = 0

// function increment() {
//     count = count + 1
////set countEl's innerText to the count
//     countEl.innerText = count
// }
// ...................................
// DOM >>>>>>>  The Document Object Model
// ...................................


//// Create the save button

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

//// 1. Create a function, save(), which logs out the count when it's called

// function save() {
//     console.log(count)
// }
// ..........................................................

// Strings

// // Create a variable, message, that stores the string: "You have tree new notifications"
// let message = "You have tree new notifications"
// console.log(message)

// ...................................
// let username = "per"
// let message = "You have tree new notifications"
// console.log(message + ", " + username + "!")


// // Create a variable, messageToUser, that contains the message we have logged
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)


// // Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "


// // Create a third variable, myGreeting, that contatenates the two strings
// // Log myGreeting to the console
// let name = "Per Harald Borgen"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// Between String and Numbers "String" always win
// console.log(4 + 5) // 9
// console.log("2" + "4") // "24"
// console.log("5" + 1) // "51"
// console.log(100 + "100") // "100100"


// let welcomeEl = document.getElementById("welcome-el")
// let name = "Per Harald Borgen"
// let greeting = "Welcome back "
// welcomeEl.innerText = greeting + name



// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1
// welcomeEl.innerText = welcomeEl.innerText + "👋" //OR  welcomeEl.innerText += "👋"
// .........................................................




// // Create the save feature
// // 1. Grab the save-el paragrah and store it in a variable called saveEl
// let countEl = document.getElementById("count-el")
// let count = 0
// let saveEl = document.getElementById("save-el")


// function increment() {
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     let countStr = count + " - "
//     // 3. Render the variable in the saveEl using innerText
//     saveEl.innerText += countStr
//     // NB: Make sure to not delete the existing content of the paragraph
//     console.log(count)
// }





// // textContent instead of innerText
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
// }

// // Google:
// // innerText alternative mdn





// Set the count to 0, every time we start to count it's going to begin from zero
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
