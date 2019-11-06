const Sequelize = require('sequelize');

module.exports = async () => {
    const Clase = require('./Clase');
    const Usuario = require('./Usuario');
    const TipoUsuario = require('./TipoUsuario');
    const Op = Sequelize.Op


    Usuario.hasMany(Clase, { foreignkey: 'usuarioId' });
    Clase.belongsTo(Usuario, { foreignkey: 'usuarioId' });
    /*
    const errHandler = (err) => {
        console.error("Error: ", err);
    };
    var datoPrueba = false;
    if(datoPrueba){
        const tipoUsuario = await TipoUsuario.create({
            tipo: "profesor"
        });
        
        const usuario = await Usuario.create({
            tipoId: tipoUsuario.id,
            nombre: "Johan David Robles Lozano",
            password: '123',
            codigo: 123,
            documento: 1076089044,
            email: "johanrobles@hotmail.com"
        }).catch(errHandler);

        const clase = await Clase.create({
            usuarioId: usuario.id,
            tema: "como estudiar",
            fecha: "2019-06-11",
            horaInicio: "07:02:02",
            horaFinal: "11:02:02",
            observaciones: ""
        }).catch(errHandler);
    }
    
   var usuarios;
    try {
        usuarios = await Usuario.findOne({
            where: {
                [Op.and]:[
                    {
                        [Op.or]:[
                            {
                                documento: 1076089044
                            },
                            {
                                codigo: 1234
                            }
                        ]
                    },
                    {
                        password: '123'
                    }
                ]
            }
        })
    }catch(err){
        errHandler(err);
    }
    if(usuarios)console.log(usuarios.dataValues);
    */
};