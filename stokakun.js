fs = require('fs') 

////////[STOCK AKUN]/////////////
mobilelegends001 = `Stok Akun Lagi Kosong`
freefire001 = `Stok Akun Lagi Kosong`
codmobile001 = `Stok Akun Lagi Kosong`
ballpoll001 = `Stok Akun Lagi Kosong`
pointblank001 = `Stok Akun Lagi Kosong`
pubgmobile001 = `Stok Akun Lagi Kosong`


///////////////////////////////////////////////
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
delete require.cache[file]
require(file)
})
