import React from 'react';

/* Navbar creado para Admisiones y registro academico */ 
import Navbar from './Navbar';
import Footer from './Footer';

function Layout(props)
{

    return(
        <React.Fragment>
            <Navbar />
            {props.children}
            <Footer />
        </React.Fragment>
    );
}

/* Pagina presentación igual en todas las páginas */

export default Layout