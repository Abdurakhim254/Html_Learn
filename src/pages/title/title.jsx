import { Link, Typography } from '@mui/material'
import React from 'react'

export const Title = ({ title, link }) => {
    return (
        <>
            <Typography display={"flex"} justifyContent={"space-between"} width={"300px"} textAlign={"center"} alignItems={"center"} ml={"120px"} >
                <h3>
                    {title}
                </h3>
                <Link pr={"50px"} href={"#"}>{link}</Link>
            </Typography>
        </>
    )
}
