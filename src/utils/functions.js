export default {
  getExperience() {
    let currentDate = new Date(),
      currentFormattedDate = new Date(`${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`),
      startDate = new Date('12/08/2014'),
      timeDiff = Math.abs(currentFormattedDate.getTime() - startDate.getTime()),
      diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)),
      yearPeriod = (diffDays/365).toFixed(1)
    
    return yearPeriod
  },

  chunkArray(arr,size) {
    let arrLength = arr.length,
      mainLength = Math.ceil(arrLength/size),
      mainArray = [],
      chunkArray = []

      for(var i=1; i<=arrLength; i++) {
        if (i % size === 1) {
          // starting new chunk -> clear chunk array and push
          chunkArray = []
          chunkArray.push(arr[i-1])
    
          if (i === arrLength) {
            // if it is the last element, push chunk array to the main array
            mainArray.push(chunkArray)
          }
        } else if ( i % size === 0) {
          // completing chunk -> push element to chunk and push chunk to main array
          chunkArray.push(arr[i-1])
          mainArray.push(chunkArray)
        } else if (i % size > 0) {
          // existing chunk -> push element to chunk
          chunkArray.push(arr[i-1])
    
          if (i === arrLength) {
            // if it is the last element, push chunk array to the main array
            mainArray.push(chunkArray)
          }
        }
      }

    return mainArray
  }
}