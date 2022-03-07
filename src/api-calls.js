import cleanData from './utilities'

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