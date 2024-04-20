const analyzeArray = {
  average: (arr) => {
    return arr.reduce((sum, cur) => sum + cur, 0) / arr.length
  },

  min: (arr) => {
    return Math.min(...arr)
  },

  max: (arr) => {
    return Math.max(...arr)
  },

  length: (arr) => {
    return arr.length;
  }
}



export { analyzeArray }