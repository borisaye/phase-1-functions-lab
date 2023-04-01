let custLocation;
const hqLocation = 42;
const blockLength = 264;
let blocksFromHq;
let startBlock;
let endBlock;
let fareCharge
let totalFeetTravelled;
let distance;

function distanceFromHqInBlocks(custLocation){

    blocksFromHq = Math.abs(hqLocation - custLocation);
    return blocksFromHq;

};

function distanceFromHqInFeet(blocksFromHq){

   let feetDistanceFromHq = distanceFromHqInBlocks(blocksFromHq) * blockLength;
    return feetDistanceFromHq;

};

function distanceTravelledInFeet(startBlock, endBlock){

    totalFeetTravelled = Math.abs(startBlock - endBlock) * blockLength;
    return totalFeetTravelled;

};

function calculatesFarePrice(startBlock, endBlock){

    totalFeetTravelled = Math.abs(startBlock - endBlock) * blockLength;

    if (totalFeetTravelled > 2500){
        return "cannot travel that far";
    }
    else if (totalFeetTravelled> 2000){
         fareCharge = 25;
        return fareCharge
    }
    else if (totalFeetTravelled > 400){
        fareCharge = (totalFeetTravelled - 400) * .02;
        return fareCharge;
    }
    else if (totalFeetTravelled <= 400){
        fareCharge = 0;
        return fareCharge;
    }

}