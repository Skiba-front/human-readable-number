module.exports = function toReadable (number) {
  if(number/1 === 0) {
    return 'zero'
  }
  let arrBeg = [' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen']
  let arrTen = [' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety']
  let res = []

  let hundred = Math.floor(number / 100)
  let tens = Math.floor(number % 100 / 10)
  let ones = number % 10
   
  if(hundred != 0) {
    res.push(arrBeg[hundred-1] + ' hundred')
  } 

  if(tens >= 2) {
    res.push(arrTen[tens - 2])
    res.push(arrBeg[ones - 1])
  } else {
    res.push(arrBeg[number%100 - 1])
  }
  return res.join('')
}
