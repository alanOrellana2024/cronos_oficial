import React from "react";

const Timeline = () => {
    const dates = [
        { año: 1900, label: '1900'},
        { año: 1900, label: '1910'},
        { año: 1900, label: '1920'},
        { año: 1900, label: '1930'},
        { año: 1900, label: '1940'},
        { año: 1900, label: '1950'},
        { año: 1900, label: '1960'},
        { año: 1900, label: '1970'},
        { año: 1900, label: '1980'},
        { año: 1900, label: '1990'},
        { año: 1900, label: '2000'}

        

    ];

    return (
        <div className="flex felx-row overflow-hidden">
            {dates.map((date, index) => (
                <div 
                key={index}
                className="flex flex-row items-center justify-center w-full h-full text-center"
                > 
                <div className="bg-blue py-2 px4 w-full rounded-ms shadow-md hover:shadow-lg">
                    <h2 className="text-x1 font-bold">{date.label}  </h2>
                    <a href={`/year/${date.year}`} className=" text-gray-500 underline"> Ver más detalles  </a>
                </div>
                {index < dates.length - 1 && ' '}
                <div className="w-px h-full bg-red-700">
                </div>
                </div>
            ))}
        </div>
    )
}

export default Timeline;