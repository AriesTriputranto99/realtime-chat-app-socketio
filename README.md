# Realtime Chat App

Built using Socket.io, React, Node and Express. This app intends to demonstrate the use of sockets and how they are used to prcess realtime data. A user Joins the room and when another user joins with the samr roomID they can converse. Added WhatsApp like UI and few functionalities.

![Chat App](./snapshot/realtime-chat-app.png)

## Get Started:

### Navigate to Client directory as well as server directory and run the following command in terminal

`npm install`

### In Server directory run:

`npm run server`

### In Client directory run:

`npm start`

You are good to go...
Happy Chatting

### unicode:Public:zipped:latest:C=N;O=D

{
  "tipe": "modul",
  "sumber": "doc/api/timers.md",
  "modul": [
    {
      "textRaw": "Pengatur Waktu",
      "nama": "pengatur waktu",
      "diperkenalkan_di": "v0.10.0",
      "stabilitas": 2,
      "stabilityText": "Stabil",
      "desc": "<p><strong>Kode Sumber:</strong> <a href=\"https://github.com/nodejs/node/blob/v24.4.1/lib/timers.js\">lib/timers.js</a></p>\n<p>Modul <code>timer</code> mengekspos API global untuk fungsi penjadwalan yang akan dipanggil di masa mendatang. Karena fungsi timer bersifat global, tidak perlu memanggil <code>require('node:timers')</code> untuk menggunakan API tersebut.</p>\n<p>Fungsi timer dalam Node.js mengimplementasikan API yang serupa dengan API timer yang disediakan oleh Peramban Web, tetapi menggunakan implementasi internal yang berbeda yang dibangun di sekitar Node.js <a href=\"https://nodejs.org/id/docs/panduan/pengatur-waktu-loop-peristiwa-dan-nexttick/#setimmediate-vs-settimeout\">Loop Peristiwa</a>.</p>",
      "kelas": [
        {
          "textRaw": "Kelas: `Segera`",
          "tipe": "kelas",
          "nama": "Segera",
          "desc": "<p>Objek ini dibuat secara internal dan dikembalikan dari <a href=\"#setimmediatecallback-args\"><code>setImmediate()</code></a>. Objek ini dapat diteruskan ke <a href=\"#clearimmediateimmediate\"><code>clearImmediate()</code></a> untuk membatalkan tindakan terjadwal.</p>\n<p>Secara default, ketika suatu tindakan segera dijadwalkan, loop peristiwa Node.js akan terus berjalan selama tindakan segera tersebut aktif. Objek <code>Immediate</code> yang dikembalikan oleh <a href=\"#setimmediatecallback-args\"><code>setImmediate()</code></a> mengekspor fungsi <code>immediate.ref()</code> dan <code>immediate.unref()</code> yang dapat digunakan untuk mengontrol perilaku default ini.</p>",
          "metode": [
            {
              "textRaw": "`immediate.hasRef()`",
              "tipe": "metode",
              "nama": "memilikiRef",
              "meta": {
                "ditambahkan": [
                  "v11.0.0"
                ],
                "perubahan": []
              },
              "tanda tangan": [
                {
                  "kembali": {
                    "textRaw": "Pengembalian: {boolean}",
                    "nama": "kembali",
                    "tipe": "boolean"
                  },
                  "params": []
                }
              ],
              "desc": "<p>Jika benar, objek <code>Immediate</code> akan menjaga loop peristiwa Node.js tetap aktif.</p>"
            },
            {
              "textRaw": "`langsung.ref()`",
              "tipe": "metode",
              "nama": "ref",
              "meta": {
                "ditambahkan": [
                  "v9.7.0"
                ],
                "perubahan": []
              },
              "tanda tangan": [
                {
                  "kembali": {
                    "textRaw": "Mengembalikan: {Immediate} referensi ke `immediate`",
                    "nama": "kembali",
                    "tipe": "Segera",
                    "desc": "referensi ke `langsung`"
                  },
                  "params": []
                }
              ],
              "desc": "<p>Saat dipanggil, permintaan agar loop peristiwa Node.js <em>tidak</em> keluar selama <code>Immediate</code> aktif. Memanggil <code>immediate.ref()</code> beberapa kali tidak akan berpengaruh.</p>\n<p>Secara default, semua objek <code>Immediate</code> diberi \"ref\", sehingga biasanya tidak perlu\nmemanggil <code>immediate.ref()</code> kecuali <code>immediate.unref()</code> telah dipanggil sebelumnya.</p>"
            },
            {
              "textRaw": "`immediate.unref()`",
              "tipe": "metode",
              "nama": "tidak direferensikan",
              "meta": {
                "ditambahkan": [
                  "v9.7.0"
                ],
                "perubahan": []
              },
              "tanda tangan": [
                {
                  "kembali": {
                    "textRaw": "Mengembalikan: {Immediate} referensi ke `immediate`",
                    "nama": "kembali",
                    "tipe": "Segera",
                    "desc": "referensi ke `langsung`"
                  },
                  "params": []
                }
              ],
              "desc": "<p>Saat dipanggil, objek <code>Immediate</code> yang aktif tidak akan mengharuskan loop peristiwa Node.js tetap aktif. Jika tidak ada aktivitas lain yang menjaga loop peristiwa tetap berjalan, proses dapat keluar sebelum panggilan balik objek <code>Immediate</code> dipanggil. Memanggil <code>immediate.unref()</code> beberapa kali tidak akan berpengaruh.</p>"
            },
            {
              "textRaw": "`langsung[Simbol.buang]()`",
              "tipe": "metode",
              "nama": "[Simbol.buang]",
              "meta": {
                "ditambahkan": [
                  "v20.5.0",
                  "v18.18.0"
                ],
                "perubahan": [
                  {
                    "versi": "v24.2.0",
                    "pr-url": "https://github.com/nodejs/node/pull/58467",
                    "description": "Tidak lagi eksperimental."
                  }
                ]
              },
              "tanda tangan": [
                {
                  "params": []
                }
              ],
              "desc": "<p>Membatalkan panggilan langsung. Ini mirip dengan memanggil <code>clearImmediate()</code>.</p>"
            }
          ]
        },
        {
          "textRaw": "Kelas: `Waktu habis`",
          "tipe": "kelas",
          "nama": "Waktu habis",
          "desc": "<p>Objek ini dibuat secara internal dan dikembalikan dari <a href=\"#settimeoutcallback-delay-args\"><code>setTimeout()</code></a> dan\n<a href=\"#setintervalcallback-delay-args\"><code>setInterval()</code></a>. Objek ini dapat diteruskan ke <a href=\"#cleartimeouttimeout\"><code>clearTimeout()</code></a> atau\n<a href=\"#clearintervaltimeout\"><code>clearInterval()</code></a> untuk membatalkan tindakan terjadwal.</p>\n<p>Secara default, ketika pengatur waktu dijadwalkan menggunakan <a href=\"#settimeoutcallback-delay-args\"><code>setTimeout()</code></a> atau\n<a href=\"#setintervalcallback-delay-args\"><code>setInterval()</code></a>, loop peristiwa Node.js akan terus berjalan selama timer aktif. Setiap objek <code>Timeout</code> yang dikembalikan oleh fungsi-fungsi ini\nmengimpor fungsi <code>timeout.ref()</code> dan <code>timeout.unref()</code> yang dapat digunakan untuk\nmengendalikan perilaku default ini.</p>",
          "metode": [
            {
              "textRaw": "`batas waktu.tutup()`",
              "tipe": "metode",
              "nama": "tutup",
              "meta": {
                "ditambahkan": [
                  "v0.9.1"
                ],
                "perubahan": []
              },
              "stabilitas": 3,
              "stabilityText": "Legacy: Gunakan [`clearTimeout()`][] sebagai gantinya.",
              "tanda tangan": [
                {
                  "kembali": {
                    "textRaw": "Mengembalikan: {Timeout} referensi ke `timeout`",
                    "nama": "kembali",
                    "type": "Waktu habis",
                    "desc": "referensi ke `timeout`"
                  },
                  "params": []
                }
              ],
              "desc": "<p>Membatalkan batas waktu.</p>"
            },
            {
              "textRaw": "`timeout.hasRef()`",
              "tipe": "metode",
              "nama": "memilikiRef",
              "meta": {
                "ditambahkan": [
                  "v11.0.0"
                ],
                "perubahan": []
              },
              "tanda tangan": [
                {
                  "kembali": {
                    "textRaw": "Pengembalian: {boolean}",
                    "nama": "kembali",
                    "tipe": "boolean"
                  },
                  "params": []
                }
              ],
              "desc": "<p>Jika benar, objek <code>Timeout</code> akan menjaga loop peristiwa Node.js tetap aktif.</p>"
            },
            {
              "textRaw": "`waktu habis.ref()`",
              "tipe": "metode",
              "nama": "ref",
              "meta": {
                "ditambahkan": [
                  "v0.9.1"
                ],
                "perubahan": []
              },
              "tanda tangan": [
                {
                  "kembali": {
                    "textRaw": "Mengembalikan: {Timeout} referensi ke `timeout`",
                    "nama": "kembali",
                    "type": "Waktu habis",
                    "desc": "referensi ke `timeout`"
                  },
                  "params": []
                }
              ],
              "desc": "<p>Saat dipanggil, permintaan agar loop peristiwa Node.js <em>tidak</em> keluar selama <code>Timeout</code> aktif. Memanggil <code>timeout.ref()</code> beberapa kali tidak akan berpengaruh.</p>\n<p>Secara default, semua objek <code>Timeout</code> diberi \"ref\", sehingga biasanya tidak perlu\nmemanggil <code>timeout.ref()</code> kecuali <code>timeout.unref()</code> telah dipanggil sebelumnya.</p>"
            },
            {
              "textRaw": "`timeout.refresh()`",
              "tipe": "metode",
              "nama": "segarkan",
              "meta": {
                "ditambahkan": [
                  "v10.2.0"
                ],
                "perubahan": []
              },
              "tanda tangan": [
                {
                  "kembali": {
                    "textRaw": "Mengembalikan: {Timeout} referensi ke `timeout`",
                    "nama": "kembali",
                    "type": "Waktu habis",
                    "desc": "referensi ke `timeout`"
                  },
                  "params": []
                }
              ],
              "desc": "<p>Mengatur waktu mulai pengatur waktu ke waktu saat ini, dan menjadwalkan ulang pengatur waktu agar memanggil panggilan baliknya pada durasi yang ditentukan sebelumnya dan disesuaikan dengan waktu saat ini. Ini berguna untuk menyegarkan pengatur waktu tanpa mengalokasikan objek JavaScript baru.</p>\n<p>Menggunakan ini pada pengatur waktu yang telah memanggil panggilan baliknya akan mengaktifkan kembali pengatur waktu.</p>"
            },
            {
              "textRaw": "`timeout.unref()`",
              "tipe": "metode",
              "nama": "tidak direferensikan",
              "meta": {
                "ditambahkan": [
                  "v0.9.1"
                ],
                "perubahan": []
              },
              "tanda tangan": [
                {
                  "kembali": {
                    "textRaw": "Mengembalikan: {Timeout} referensi ke `timeout`",
                    "nama": "kembali",
                    "type": "Waktu habis",
                    "desc": "referensi ke `timeout`"
                  },
                  "params": []
                }
              ],
              "desc": "<p>Saat dipanggil, objek <code>Timeout</code> yang aktif tidak akan mengharuskan loop peristiwa Node.js tetap aktif. Jika tidak ada aktivitas lain yang menjaga loop peristiwa tetap berjalan, proses dapat keluar sebelum panggilan balik objek <code>Timeout</code> dipanggil. Memanggil <code>timeout.unref()</code> beberapa kali tidak akan berpengaruh.</p>"
            },
            {
              "textRaw": "`batas waktu[Simbol.toPrimitive]()`",
              "tipe": "metode",
              "nama": "[Simbol.kePrimitif]",
              "meta": {
                "ditambahkan": [
                  "v14.9.0",
                  "v12.19.0"
                ],
                "perubahan": []
              },
              "tanda tangan": [
                {
                  "kembali": {
                    "textRaw": "Mengembalikan: {integer} angka yang dapat digunakan untuk merujuk `batas waktu` ini",
                    "nama": "kembali",
                    "tipe": "bilangan bulat",
                    "desc": "angka yang dapat digunakan untuk merujuk pada `batas waktu` ini"
                  },
                  "params": []
                }
              ],
              "desc": "<p>Paksa <code>Timeout</code> ke primitif. Primitif ini dapat digunakan untuk\nmenghapus <code>Timeout</code>. Primitif ini hanya dapat digunakan di\nthread yang sama tempat timeout dibuat. Oleh karena itu, untuk menggunakannya di seluruh <a href=\"worker_threads.html\"><code>worker_threads</code></a>, primitif ini harus diteruskan terlebih dahulu ke\nthread yang benar. Hal ini memungkinkan kompatibilitas yang lebih baik dengan implementasi\n<code>setTimeout()</code> dan <code>setInterval()</code> browser.</p>"
            },
            {
              "textRaw": "`batas waktu[Simbol.buang]()`",
              "tipe": "metode",
              "nama": "[Simbol.buang]",
              "meta": {
                "ditambahkan": [
                  "v20.5.0",
                  "v18.18.0"
                ],
                "perubahan": [
                  {
                    "versi": "v24.2.0",
                    "pr-url": "https://github.com/nodejs/node/pull/58467",
                    "description": "Tidak lagi eksperimental."
                  }
                ]
              },
              "tanda tangan": [
                {
                  "params": []
                }
              ],
              "desc": "<p>Membatalkan batas waktu.</p>"
            }
          ]
        }
      ],
      "modul": [
        {
          "textRaw": "Menjadwalkan pengatur waktu",
          "nama": "penjadwalan_pengatur_waktu",
          "desc": "<p>Timer di Node.js adalah konstruksi internal yang memanggil fungsi tertentu setelah periode waktu tertentu. Waktu pemanggilan fungsi timer bervariasi tergantung pada metode yang digunakan untuk membuat timer dan pekerjaan lain yang dilakukan oleh loop peristiwa Node.js.</p>",
          "metode": [
            {
              "textRaw": "`setImmediate(panggilan balik[, ...args])`",
              "tipe": "metode",
              "nama": "aturSegera",
              "meta": {
                "ditambahkan": [
                  "v0.9.1"
                ],
                "perubahan": [
                  {
                    "versi": "v18.0.0",
                    "pr-url": "https://github.com/nodejs/node/pull/41678",
                    "description": "Melewati panggilan balik yang tidak valid ke argumen `callback` sekarang akan memunculkan `ERR_INVALID_ARG_TYPE`, bukan `ERR_INVALID_CALLBACK`."
                  }
                ]
              },
              "tanda tangan": [
                {
                  "kembali": {
                    "textRaw": "Mengembalikan: {Immediate} untuk digunakan dengan [`clearImmediate()`][]",
                    "nama": "kembali",
                    "tipe": "Segera",
                    "desc": "untuk digunakan dengan [`clearImmediate()`][]"
                  },
                  "params": [
                    {
                      "textRaw": "`callback` {Fungsi} Fungsi yang akan dipanggil di akhir putaran Node.js [Event Loop][] ini",
                      "nama": "panggilan balik",
                      "tipe": "Fungsi",
                      "desc": "Fungsi yang akan dipanggil di akhir putaran Node.js [Event Loop][] ini"
                    },
                    {
                      "textRaw": "`...args` {any} Argumen opsional yang akan diteruskan saat `callback` dipanggil.",
                      "nama": "...args",
                      "tipe": "apa pun",
                      "desc": "Argumen opsional yang akan diteruskan saat `callback` dipanggil."
                    }
                  ]
                }
              ],
              "desc": "<p>Menjadwalkan eksekusi \"langsung\" dari <code>callback</code> setelah callback peristiwa I/O.</p>\n<p>Ketika beberapa panggilan ke <code>setImmediate()</code> dilakukan, fungsi <code>callback</code> akan diantrekan untuk dieksekusi sesuai urutan pembuatannya. Seluruh antrean callback diproses setiap iterasi loop peristiwa. Jika timer langsung diantrekan\ndari dalam callback yang sedang dieksekusi, timer tersebut tidak akan dipicu hingga iterasi loop peristiwa berikutnya.</p>\n<p>Jika <code>callback</code> bukan fungsi, <a href=\"errors.html#class-typeerror\"><code>TypeError</code></a> akan dilempar.</p>\n<p>Metode ini memiliki varian khusus untuk promise yang tersedia menggunakan\n<a href=\"#timerspromisessetimmediatevalue-options\"><code>timersPromises.setImmediate()</code></a>.</p>"
            },
            {
              "textRaw": "`setInterval(panggilan balik[, penundaan[, ...args]])`",
              "tipe": "metode",
              "nama": "aturInterval",
              "meta": {
                "ditambahkan": [
                  "v0.0.1"
                ],
                "perubahan": [
                  {
                    "versi": "v18.0.0",
                    "pr-url": "https://github.com/nodejs/node/pull/41678",
                    "description": "Melewati panggilan balik yang tidak valid ke argumen `callback` sekarang akan memunculkan `ERR_INVALID_ARG_TYPE`, bukan `ERR_INVALID_CALLBACK`."
                  }
                ]
              },
              "tanda tangan": [
                {
                  "kembali": {
                    "textRaw": "Mengembalikan: {Timeout} untuk digunakan dengan [`clearInterval()`][]",
                    "nama": "kembali",
                    "type": "Waktu habis",
                    "desc": "untuk digunakan dengan [`clearInterval()`][]"
                  },
                  "params": [
                    {
                      "textRaw": "`callback` {Fungsi} Fungsi yang akan dipanggil saat penghitung waktu berakhir.",
                      "nama": "panggilan balik",
                      "tipe": "Fungsi",
                      "desc": "Fungsi yang dipanggil saat penghitung waktu berakhir."
                    },
                    {
                      "textRaw": "`delay` {number} Jumlah milidetik untuk menunggu sebelum memanggil `callback`. **Default:** `1`.",
                      "nama": "penundaan",
                      "tipe": "angka",
                      "bawaan": "`1`",
                      "desc": "Jumlah milidetik untuk menunggu sebelum memanggil `callback`."
                    },
                    {
                      "textRaw": "`...args` {any} Argumen opsional yang akan diteruskan saat `callback` dipanggil.",
                      "nama": "...args",
                      "tipe": "apa pun",
                      "desc": "Argumen opsional yang akan diteruskan saat `callback` dipanggil."
                    }
                  ]
                }
              ],
              "desc": "<p>Menjadwalkan eksekusi berulang <code>callback</code> setiap <code>delay</code> milidetik.</p>\n<p>Ketika <code>delay</code> lebih besar dari <code>2147483647</code> atau kurang dari <code>1</code> atau <code>NaN</code>, <code>delay</code>\nakan diatur ke <code>1</code>. Penundaan non-integer dipotong menjadi integer.</p>\n<p>Jika <code>callback</code> bukan fungsi, <a href=\"errors.html#class-typeerror\"><code>TypeError</code></a> akan dilempar.</p>\n<p>Metode ini memiliki varian khusus untuk promise yang tersedia menggunakan\n<a href=\"#timerspromisessetintervaldelay-value-options\"><code>timersPromises.setInterval()</code></a>.</p>"
            },
            {
              "textRaw": "`setTimeout(panggilan balik[, penundaan[, ...args]])`",
              "tipe": "metode",
              "nama": "aturWaktuHabis",
              "meta": {
                "ditambahkan": [
                  "v0.0.1"
                ],
                "perubahan": [
                  {
                    "versi": "v18.0.0",
                  
