fs = require('fs') 

////////[STOCK AKUN]/////////////
mobilelegends00 = `Stok Akun Lagi Kosong`
freefire00 = `Stok Akun Lagi Kosong`
codmobile00 = `Stok Akun Lagi Kosong`
ballpoll00 = `Stok Akun Lagi Kosong`
pointblank00 = `Stok Akun Lagi Kosong`
pubgmobile00 = `Stok Akun Lagi Kosong`


///////////////////////////////////////////////
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
delete require.cache[file]
require(file)
})