import React from 'react'

export default function RenderItems({ data }) {
    return (
        <>
            <div>
                {Object.entries(data).map(([categoria, elementos]) => (
                    <div key={categoria}>
                        <h2>{categoria}</h2>
                        {elementos.map((elemento, index) => (
                            <div key={index}>
                                <h3>{elemento.nombre}</h3>
                                <p>{elemento.descripcion}</p>
                                <p>Precio: {elemento.precio}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}
