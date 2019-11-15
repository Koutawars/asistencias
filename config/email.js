// testchan.asistenciauwu@gmail.com
// testchan1234

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'testchan.asistenciauwu@gmail.com',
        pass: 'testchan1234'
    }
});
exports.enviarEmail = function(correo, image){
    var mailOptions = {
        from: 'testchan.asistenciauwu@gmail.com',
        to: correo,
        subject: 'QrCode clase asistencia',
        text: 'Imagen: ',
        html: '<img src = "' + image + '" />' 
    };
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