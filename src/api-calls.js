export const getRandomDog = () => {
  return fetch('https://api.thedogapi.com/v1/images/search')
    .then(response => checkForError(response))
    .then(data => cleanData(data))
}

const checkForError = (response) => {
  if (!response.ok) {
    throw (`${response.status}`)
  }
  return response.json()
}

const cleanData = (data) => {
  console.log('data in clean function', data)
  return data[0].url
}