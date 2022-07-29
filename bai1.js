const listNumber = [1,-2,6,-8,-9,4,6]
let sumNagNumber = (listNumber.filter(data=>data>0)).reduce((x,y)=>x+y)