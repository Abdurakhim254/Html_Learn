import React from 'react'
import { useParams } from 'react-router-dom'

export const HomeCard = () => {
    const { id } = useParams()
    console.log(id);
    return (
        <>
        <div>
            card
        </div>
        </>
    )
}
