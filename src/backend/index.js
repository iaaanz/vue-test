const { ipcMain } = require('electron')

ipcMain.on('eventoIpc', (event, arg) => {
  console.log(arg)

  event.reply('eventoIpc', 'Resposta')
})