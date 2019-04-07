var number = 1

function takeANumber(line, number) {
  line.push(number)
  var i = line.length
  number++
  return `Your number is ${number} and you are number ${i} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return ("There is nobody waiting to be served!")
  } else {
  var currentlyServing = line.shift()
    
    return (`Currently serving ${currentlyServing}.`)
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return ("The line is currently empty.")
  } else {
    var i = 0
    var output = []
    while (i < line.length) {
      output[i] = ' ' + line[i]
      i++
    }
  }
  console.log(output)
  return (`The line is currently:${output}`)
}