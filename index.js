
// const record = [year, result]
// function superbowlWin(record)
// record.find(function(w) { return w === "winner" })
// record.filter(function(w) { return w === "winner"})

const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]
function superbowlWin(record) {

    const result = record.find( record => record.result === "W")
    
    // record.find( ({ result }) => result === "W" )

    console.log(result)
    return !!result ? result.year : undefined  
}  

superbowlWin()
