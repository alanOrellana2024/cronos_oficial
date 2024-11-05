import React from "react";

const Timeline = () => {
    const dates = [
        { año: 1900, label: '1900'},
        { año: 1900, label: '1910'},
        { año: 1900, label: '1925'},
        { año: 1900, label: '1933'},
        { año: 1900, label: '1950'},
        { año: 1900, label: '1955'},
        { año: 1900, label: '1965'},
        { año: 1900, label: '1976'},
        { año: 1900, label: '1985'},
        { año: 1900, label: '1999'}
        

    ];

    return (
        <div className="flex felx-row overflow-hidden">
            {dates.map((date, index) => (
                <div 
                key={index}
                className="flex flex-row items-center justify-center w-full h-full text-center"
                > 
                <div className="bg-blue py-2 px4 w-full rounded-ms shadow-md hover:shadow-lg">
                    <h2 className="text-x1 font-bold">{date.label}</h2>
                    <a href={`/year/${date.year}`} className=" text-gray-500 underline"> Ver más detalles </a>
                </div>
                </div>
            ))}
        </div>
    )
}

export default Timeline;