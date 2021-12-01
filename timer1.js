const args = process.argv.slice(2)
console.log(args)

const timer = function () {
  //no numbers
  if (args === []) {
    return
  }

  args.forEach((num, index) => {
    setTimeout(() => {
      if (isNaN(num) || num < 0) {
        console.log(`${num} at index[${index}] is not allowed try a #`)
      } else {
        process.stdout.write('\x07');
      }
    }, num * 1000)
  })
}

timer()


//sound 
//process.stdout.write('\x07');

//no numbers