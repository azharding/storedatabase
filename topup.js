fs = require('fs') 
/////[menu]//////
menutopup00 =`❏━━━『 𝙏𝙊𝙋 𝙐𝙋 𝙂𝘼𝙈𝙀 』═┅═━◧
┣» 🛍️ MOBILE LEGENDS (Ml)
┣» 🛍️ FREE FIRE (Ff)
┣» 🛍️ COD MOBILE (Codm)
┣» 🛍️ POINT BLANK (Pb)
┣» 🛍️ PUBG MOBILE (Pubgm)
┗━═┅═━–––––––––––––––๑
Note : Ketik Saja Yang Didalam Kurung Agar Lebih Mudah misal "Ml".`
////////[TOP UP]/////////////
mobilelegends00 = `🎮 MOBILE LEGENDS 🎮
60💎  : Rp.10.000 
86💎  : Rp.15.000 
172💎 : Rp.30.500 
220💎 : Rp.40.000 
257💎 : Rp.50.000 
344💎 : Rp.68.000 
429💎 : Rp.84.000 
514💎 : Rp.105.000
568💎 : Rp.110.000
706💎 : Rp.120.000
878💎 : Rp.175.000
963💎 : Rp.195.000
1050💎: Rp.205.000
1220💎: Rp.230.000
1446💎: Rp.290.000
2046💎: Rp.450.000`
freefire00 = `🎮 FREE FIRE 🎮
70💎  : Rp.7.000  
100💎 : Rp.10.000 
140💎 : Rp.15.000 
210💎 : Rp.20.000 
280💎 : Rp.25.000 
355💎 : Rp.30.000
495💎 : Rp.35.000
710💎 : Rp.50.000
920💎 : Rp.75.000 
1020💎 : Rp.85.000
1140💎 : Rp.90.000
1420💎 : Rp.95.000
2000💎 : Rp.225.000 
7290💎 : Rp.915.000 
36500💎 : Rp.4.500.000   
73100💎 : Rp.8.200.000  `
codmobile00 = `belum tersedia`
ballpoll00 = `belum tersedia`
pointblank00 = `🎮 POINT BLANK 🎮
1.200 PB CASH Rp15.000 Pulsa
2.400 PB CASH Rp25.000 Pulsa
6.000 PB CASH Rp60.000 Pulsa
12.000 PB CASH Rp115.000 Pulsa
36.000 PB CASH Rp350.000 Pulsa

⚠️Via user id
⚠️Lebih mahal karena via pulsa
⚠️Proses cepat 0-10menit`
pubgmobile00 = `🎮 PUBG MOBILE 🎮
💵52 = Rp8.600
💵105 = Rp17.200
💵131 = Rp21.500
💵263 = Rp43.000
💵530 = Rp86.000
💵635 = Rp103.000
💵825 = Rp129.000
💵1100 = Rp172.000
💵1205 = Rp189.200
💵1363 = Rp215.000
💵1630 = Rp258.000
💵1925 = Rp301.000
💵2200 = Rp344.000
💵3300 = Rp516.000
💵4400 = Rp688.000
💵11000 = Rp1.720.000

*🕐PROSES 1-30 MENIT* 
*☑️PAKET FAST VIA ID NICK*
*☑️ BERLAKU KELIPATAN* 

*⚠️KESALAHAN MENGISI ID BUKAN TANGGUNG JAWAB ADMIN*
*⚠️HARGA BISA BERUBAH UBAH*
*⚠️TANYA STOK TERLEBIH DAHULU*`

///////////////////////////////////////////////
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
delete require.cache[file]
require(file)
})