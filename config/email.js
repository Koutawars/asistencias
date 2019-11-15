// testchan.asistenciauwu@gmail.com
// testchan1234

var nodemailer = require('nodemailer');
var inlineBase64 = require('nodemailer-plugin-inline-base64');


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'testchan.asistenciauwu@gmail.com',
        pass: 'testchan1234'
    }
});
transporter.use('compile', inlineBase64({cidPrefix: 'somePrefix_'}));

exports.enviarEmail = function(correo, image, clase){
    let html = `<html><body><h4>CODEQR</h4><img src="${image}"></body></html>`;
    var mailOptions = {
        from: 'testchan.asistenciauwu@gmail.com',
        to: correo,
        subject: 'QrCode clase #' + clase,
        html
    }
    // Enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
        } else {
            console.log("Email sent");
            return info;
        }
    });
};