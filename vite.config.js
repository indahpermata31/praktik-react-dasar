import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({  // membantu mengatur konfigurasi vite
  plugins: [ // tempat memasukkan plugin yang digunakan vite
    tailwindcss(), // mengaktifkan talwind css pada project
  ],
})

// kenapa harus menggunakan plugin ini?
// karena project ini menggunakan talwind css versi 4
//plugin tersebut membantu vite memproses class tailwind menjadi css yang bisa di tampilkan di browser