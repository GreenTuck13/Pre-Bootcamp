//Written under the assumption that "Optimal" is considered be mean the shortest walking distance each customer can take with respect to all other customers, or in other words the midpoint of all customer coordinates

function findParkingSpot(customerLocations) {
    //Seperate all 'x' coordinate values from all 'y' values
    var xCoordinates = []
    var yCoordinates = []

    for (let i = 0; i < customerLocations.length; i++) {
        xCoordinates.push(customerLocations[i][0])
        yCoordinates.push(customerLocations[i][1])
    }

    //Find middle point between all 'x' and 'y' values
    var xMiddle = Math.round(findArrayAverage(xCoordinates))
    var yMiddle = Math.round(findArrayAverage(yCoordinates))

    return [xMiddle, yMiddle]
}

function findArrayAverage(arr) {
    var sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

var test1 = [[1, 2], [2, 7], [5, 4], [5, 2], [6, 5], [7, 3]]
var test2 = [[5, 4], [9, 1], [5, 5], [3, 5], [0, 0], [1, 2], [7, 6], [0, 3], [7, 6], [5, 8], [20, 20]]
var test3 = [[6, 4], [15, 6], [0, 17], [4, 4], [9, 13], [4, 7], [11, 8], [17, 7], [5, 7], [6, 20], [12, 13], [8, 1], [7, 5], [13, 11], [4, 19]]
var test4 = [[37, 16], [87, 48], [17, 13], [6, 21], [8, 6], [83, 6], [39, 15], [53, 34], [72, 55], [94, 27], [31, 38], [67, 25], [63, 72], [5, 47], [2, 5], [84, 47], [0, 13], [13, 61], [91, 92], [74, 68], [61, 7], [86, 40], [5, 51], [15, 81], [26, 24], [23, 74], [50, 68], [95, 8], [44, 29], [12, 39], [15, 62], [89, 50], [11, 51], [97, 79], [51, 84], [2, 9], [80, 64], [44, 28], [97, 94], [20, 98], [34, 41], [68, 20], [10, 43], [59, 68], [78, 81], [5, 33], [82, 40], [76, 41], [96, 79], [31, 18]]

console.log(findParkingSpot(test1))
console.log(findParkingSpot(test2))
console.log(findParkingSpot(test3))
console.log(findParkingSpot(test4))