// Setting global variables
const lock = [[], [], [], [], [], [], [], []]
let alpha = 'null'

// creating loops to populate lock array with
for (let i = 0; i < lock.length; i++) {
  for (let j = 0; j < 15; j++) {
    if (j <= 9) {
      alpha = j.toString()
    } else {
      switch (j) {
        case 10:
          alpha = 'a'
          break
        case 11:
          alpha = 'b'
          break
        case 12:
          alpha = 'c'
          break
        case 13:
          alpha = 'd'
          break
        case 14:
          alpha = 'e'
          break
      }
    }
    lock[i][j] = i.toString() + alpha
  }
}
