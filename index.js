const findMatching = (names, string) => {
    return names.filter(names => names.toUpperCase() === string.toUpperCase())
} 
function fuzzyMatch(names,string){
    const driversMatch = [];
    for(const drivers of names){
        if( string === names)
        {
            return driversMatch.push(drivers)
        }
    }
    return  names.filter(names => names[0] === string[0])
}
function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument })
  }





