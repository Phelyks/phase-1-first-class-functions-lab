// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = 
[returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (xValue) {
    return function(value) {
        return xValue * value;
    }
}

function fareDoubler(fare) {
    return fare * 2;
}

const fareTripler = createFareMultiplier(3);
    

function selectDifferentDrivers (arrayOfDrivers, returnDrivers) {
    let selectingDrivers = returnDrivers(arrayOfDrivers);
    return selectingDrivers
}