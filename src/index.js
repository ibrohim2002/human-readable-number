module.exports = function toReadable (number) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
                "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
  let numbers2 = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
  if(number<20){
    return numbers[number]
  }
  else if(number>=20 && number%10==0 && number<100){
    return numbers2[number/10-1]
  }
  else if(number>=20 && !number%10==0 && number<100){
    return numbers2[Math.trunc(number/10-1)] + " " + numbers[number%10]
  }
  else if(number>=100 && number%100==0){
    return numbers[number/100] + " hundred"
  }
  else if(number>=100 && number%10==0 && !number%100==0){
    return numbers[Math.trunc(number/100)] + " hundred " + numbers2[Math.trunc(number%100/10-1)] 
  }
  else if(number>=100 && !number%10==0 && !number%100==0 && number%100>=20){
    return numbers[Math.trunc(number/100)] + " hundred " + numbers2[Math.trunc(number%100/10-1)] + " " + numbers[number%10]
  }
  else if(number>=100 && !number%10==0 && !number%100==0 && number%100<20){
    return numbers[Math.trunc(number/100)] + " hundred " + numbers[number%20]
  }
}