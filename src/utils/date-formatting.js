const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)
export const currentDate = yesterday.toISOString().split('T')[0]

const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
export const tomorrowDate = tomorrow.toISOString().split('T')[0] 

console.log("Today:", currentDate)
console.log("Tomorrow:", tomorrowDate)