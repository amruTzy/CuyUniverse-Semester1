const http = require('http');
const rupiah = require('rupiah-format');
const host = 'localhost'
const port = 3002
// request adalah = data masuk dari luar
// respone adalah = data keluar dari sitem
const server =http.createServer(function (request, respone){
    const nama = "amru";
    let uang = 100000;
    let jajan = 20000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)

    const hasil = `
    <head>
        <title>${nama}</title>
    </head>
    <body>
        <h1 style='background: black;color: white;padding: 20px; text-align: center'>NODE JS UANG JAJAN</h1>
        </p>
        halo nama saya ${nama}. Saya jajan sebanyak ${jajan}, uang saya awalnya ${uang} sekarang menjadi ${sisa}. 
         <p>
    </body>
    `
    
    
    
    respone.statusCode = 203;
    respone.end(hasil);
});

server.listen(port, host, function (){
    console.log(`server menyala di ${host}:${port}`);
});