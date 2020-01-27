//Script para asistencia
// const scripts = require('./scripts.js');
// let mapa = Object.null;
// let form = getElementsByName("");

console.log('lol');

const {google} = require('googleapis');
const {google} = require('./node_modules/googleapis');
console.log('load');

var sheetID = '1pa-LWmuOutiio8vo74jNBPXRPDthJDG6n8_HD4Mc-mQ';
var sheetName = 'invitados';
var thk = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC1hXa9/xmevEuH\nhMmOZNTnsF6yS8b9UMr7HTdaP/4FJzkyVdjLwpbmtnTP5FsZKMKBn3P0VJaJsgZ3\nmU4qoUaHuLxZUsfSwRSk4Gy8VcMZbMmZLsCxEMcxDWGOiLY4NTGS2C2tXgfM7FCK\nfx5iG3SzFeGcd4MJtd2Oo/qWz8gi2Gq9QCc5albXtQm9LXzN0SD5yBvWkR5H2sdh\nRxNQErjyepk0Ps0sdjZwNCp6FKEjoG4P0NMlVD2DLoRwpoSZ54bqMnJClzcuaOZU\nKM6jEd6JYYkMO0ApQLtr3OPf103yVlU2S9qrjkQPIa/9zHXIn1FvKPqZ0iL4Zvgn\nwMT7FmntAgMBAAECggEADXtkyElPb5RYKXABzAyYqemrVY5JG2JEuosfDpoJ+vuA\nunNDrM9JMnMS8NLq4jmTssQd/Q51ojNXBXXdPKTUWSXDKtY6EbZLWyXxEDmaye4O\nziIPEpz7/Rxw5mt92eW3hsrSylmIIPQHVQtf0r/BIUEANq/DYOABXUQNdhCSMpDk\n2SnEXKCSCtIPKTfXq2FiMvS+KHT3o2hFqm/FFiTeER55uCG2UwI/ugR1ZPW5SD+l\nWWCflGiOZatIWmVp9ZzG4qez0fP8fDq+usyCRsn9HVYTugpCdfVTTbrbkuLhjmGo\npn4ld0Glkl2roivHnzU5aw6XCSqapWJ1HA6SZ5qRGQKBgQDeS/QBpRfyT3Vc7rC6\nMr08L1I45Jb7bQDohuZImAnru09ghMtDT7of6MO0cwGR1huUEVuaQryEWSv0TF2D\nPT58cLcaIMw4MkfqrBTEEDlrIbVjibUNK6mw8ce2yYO27kNkDY1JHhiFEh0/Piy6\n0vgvd712eXjhpWFtek8RuDsU+QKBgQDRCuOFU2iHngwpS/lB+VEgCC+FIqmmpV5t\nSi0ivwyXIhyoRv8t3+CvQx2ohEP2d6Cvf2veCKHOF8yOzMvNcnKXBPHS9pFD93C6\npAd8NOjWqmX2Y6hGYIqg3hjXdkaX/zqA2ROzdUmhM94hhpiREM7AGA2sJ09SE2Id\nOghjtasdlQKBgCSp0EfJK+bqFghK0dkT70QS5fO+N+yl8MVpImgMs24uyYu4uzGR\n37fNkyGa6kJcVtYX+sy5fxAxCN/VDINNwZWSnZBwol4OZPAei5o+tsmlmJ4fIz5V\n2jn11qOeHtw39eN1nLzXeuHPuAUrQwNZMlfZ3uTAaiCFP0loJ8xbX1s5AoGBAKBc\njQuDX8XhrYyklpNQ0jYTcXjdjW2koJqQc62bB+qMpZVF2Y30l6V7hC35QTW6sY7P\n3gzXbGDwiuDlJFb3vAY0KdrfgbK1CEp1eLSE1jWPRGbOLpHGj7I2jrIDLsZ9agDc\nBiv+BrzeUEJBwZpPXXupOBvfkA7zhanMEhGDlMA9AoGBAIkgZw1kQQksbGOz5JO4\nTNobnvH17hDnaRLCDqxk5mr8AO1CRdHVyH8eVlQV565QYBhCGXP7MGBLIKE+zFrQ\ny2mN9wv28ATCaFO/BP6iQlNN16rsXcosow0xeZgevrw1cnATfXpGYOJid9CT7O80\nqQyaRgToadfBbDJlyphxtJu+\n-----END PRIVATE KEY-----\n"
var serviceAct = 'readandwrite@gsheetsapi-266400.iam.gserviceaccount.com'

// 1
const getVals = function(){
    let values = [];
    values.push(document.getElementById('Nombre').value);
    values.push(document.getElementById('Apellido').value);
    values.push(document.getElementById('email').value);
    values.push(document.getElementById('Numero').value);
    return values;
};

async function writeToSheet(cl, inputs){
    // let theInputs = getVals();
    console.log('Starting');
    const gsapi = google.sheets({version:'v4', auth: cl});
    let newDataArray;
    let writeOpt = {
        spreadsheetId: sheetID,
        range: 'invitados!A1',
        valueInputOption: 'RAW',
        // literalmente [[row1col1, row1col2, row1col3...],[row2col1, etc]]
        resource: {values: [inputs,],}
    };

    let resp = await gsapi.spreadsheets.values.append(writeOpt);
    console.log(resp);
    console.log('Done');
};

// JSON web token
const client = new google.auth.JWT(
    serviceAct,
    null,
    thk,
    ['https://www.googleapis.com/auth/spreadsheets']

);



// client.authorize(function(err, tokens){
//     // get initial token
//     if (err){
//         console.log("FUCK");
//         console.log(err);
//         return;
//     };

//     console.log('We\'re in');
//     writeToSheet(client, );


// });





document.getElementById("confirmar").onclick = function() {

    client.authorize(function(err, tokens){
        // get initial token
        if (err){
            console.log("FUCK");
            console.log(err);
            return;
        };
    
        console.log('We\'re in');
        let values = getVals();
        console.log('Got from html');
        writeToSheet(client, values);
        console.log('Wrote in sheet');
    
    
    });
};