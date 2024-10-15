import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from './'

const Versalle = () => {
    return (
        <div style={{backgroundColor: 'white', padding: '20px', height: ''}}>
            <div className='container'>
                  
                <div className="d-flex justify-content-between alingn-items-center">
                <div className="input-group mb-3" style={{ maxWidth: '300px' }}>
                    <input
                    type='text'
                    className='form-control'
                    placeholder='Buscar'
                    arial-label="Buscas"
                    />
                        <div>
                         <span className="text-muted">Texto Alineado a la Derecha</span>
                         </div>
                             <h2 className="mt-3">Título del Evento </h2>
                            <div className='row mt-4'>
                            <P>
                            El Tratado de Versalles, firmado el 28 de junio de 1919, puso fin oficialmente a la Primera Guerra Mundial y fue diseñado para evitar futuros conflictos debilitando a Alemania. Este tratado fue elaborado por las fuerzas aliadas, lideradas por David Lloyd George (Gran Bretaña), Georges Clemenceau (Francia), Woodrow Wilson (EE. UU.) y Vittorio Orlando (Italia), sin la participación de Alemania.
                            
                            </P>
                            <p>
                            Entre los términos clave, Alemania debía:
                                •	Desmilitarizarse.
                                •	Pagar 200 millones de marcos de oro en reparaciones.
                                •	Aceptar la culpa de la guerra.
                                El tratado también creó la Liga de las Naciones para mantener la paz mundial. Sin embargo, fue mal recibido en Alemania, lo que debilitó al gobierno de Weimar y contribuyó al ascenso del Partido Nazi. Con el estallido de la Segunda Guerra Mundial, se demostró que el tratado no logró sus objetivos de paz duradera
                            </p>
                            <p>
                            Recuerda que esta es una información abreviada del evento que has seleccionado. Si deseas información más extensa puedes visitar el siguiente link:
                            <a href='https://beta.nationalarchives.gov.uk/explore-the-collection/stories/the-treaty-of-versailles/' target='_blank' rel='noopener noreferrer'/>
                            </p>
                            </div>
                                <div className='col-md-4'>
                                    <img
                                    
                                    />
                                    <img
                                    
                                    />

                                </div>

                </div>
                 </div>

            </div>

        </div>
    );

};

export default Versalle;