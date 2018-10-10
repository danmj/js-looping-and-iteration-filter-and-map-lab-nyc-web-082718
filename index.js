// Code your solution here:
function driversWithRevenueOver(drivers, revenueArg) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenueArg
  })
}

function driverNamesWithRevenueOver(drivers, revenueArg) {
  return driversWithRevenueOver(drivers, revenueArg).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver) {
    let verifier = false
    for (const key in attribute) {
      verifier = driver[key] === attribute[key]
    }
    return verifier
  });
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(function (driver){
    return driver.name
  })
}
