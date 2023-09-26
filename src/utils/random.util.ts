export const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomTime = () => {
  const hour = randomNum(0, 23)
  const minute = randomNum(0, 59)
  return `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`
}

export const randomDate = () => {
  const year = randomNum(2020, 2023)
  const month = randomNum(1, 12)
  const day = randomNum(1, 28)
  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
}
