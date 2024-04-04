// Code your solution here

function findMatching (drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch (drivers, letter) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letter.toLowerCase()));
}

function matchName (drivers, arg) {
    return drivers.filter(driver => driver.name.toLowerCase() === arg.toLowerCase())
}