const qrku = "https://i.ibb.co/MnbqZ0N/qr-Aguz-Familia-07-06-22-1654614928.png"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
│ • Smarfren [+62 882-0064-85504]
│ • Dana  []
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? wa.me/62882006485504
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/PANEL* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, '𝐌𝐄𝐍𝐔', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
