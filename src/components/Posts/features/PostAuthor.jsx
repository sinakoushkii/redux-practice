import { useSelector } from "react-redux";
import { selectAllUsers } from "../../Users/features/userSlice";
import React from 'react'

export default function PostAuthor({userId}) {
    const users = useSelector(selectAllUsers)
    const author = users.find(user => user.id === userId)
    
    return (
        <span>{author ? author.name : 'unknown author'}</span>
    )
}
