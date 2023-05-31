const createBase = async (req, res) => {
  res.send('createBase')
}
const deleteBase = async (req, res) => {
  res.send('deleteBase')
}
const getBase = async (req, res) => {
  res.send('getBase')
}
const updateBase = async (req, res) => {
  res.send('updateBase')
}
const showStats = async (req, res) => {
  res.send('showStats')
}

export { createBase, deleteBase, getBase, updateBase, showStats }
