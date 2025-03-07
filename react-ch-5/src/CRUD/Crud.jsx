import React, { useEffect, useState } from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import { Mockdata } from './Mockdata'
import './Crud.css'
import Postdetails from './Postdetails';

export default function Crud() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [comment, setComment] = useState("")
    const [id, setId] = useState(0)
    const [isUpdate, setIsupdate] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setData(Mockdata);
    }, [])


    const handelEdit = (id) => {
        setIsupdate(true)
        const editdata = data.filter((item, index) => {
            return (item.id === id)
        })
        // console.log(editdata[0].title);
        setTitle(editdata[0].title)
        setDescription(editdata[0].description)
        setComment(editdata[0].comment)
        setId(editdata[0].id)

    }
    const handelDelete = (id) => {

        if (id > 0) {
            const dltData = data.filter((item) => {
                return (item.id !== id)
            })
            setData(dltData)
        }
    }
    const handleUpdate = () => {
        const index = data.map((item) => {
            return (item.id)
        }).indexOf(id)

        const dt = [...data]
        dt[index].title = title
        dt[index].description = description
        dt[index].comment = comment
        //   console.log(dt[index].title);
        setData(dt)
        handleClear()

    }
    const handleSave = () => {
        // alert("save")
        const dt = [...data]
        const newData = {
            id: Mockdata.length + 1,
            title: title,
            description: description,
            comment: comment
        }
        dt.push(newData)
        setData(dt)
    }
    const handleClear = () => {
        setTitle('')
        setDescription('')
        setComment('')
        setId(0)
        setIsupdate(false)
    }

    const handlePostClick = (id) =>{
     navigate(`/post/${id}`)
    }
    return (
        <>
            <div className="create-post-form" >
                <h2>Add Post</h2>
                <div>
                    <label >Post Title :
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
                    </label>
                </div>
                <div>
                    <label >Post Description :
                        <textarea placeholder='Enter Post Description' cols={30} onChange={(e) => setDescription(e.target.value)} value={description} required></textarea>
                    </label>
                </div>
                <div>
                    <label >Post Comment :
                        <input type="text" value={comment} onChange={(e) => { setComment(e.target.value) }} />
                    </label>
                </div>
                <div>
                    {
                        (isUpdate == false)
                            ?
                            <button className='btn btn-primary' onClick={handleSave}>Save</button>
                            :
                            <button className='btn btn-primary' onClick={handleUpdate}>Update</button>

                    }

                    <button className='btn btn-secondary border' onClick={handleClear}>Clear</button>
                </div>
            </div>
            <table className='table table-hover'>
                <thead>
                    <tr>

                        <td>Sr. no.</td>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Comment</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td> <Link to={`/post/${item.id}`} onClick={()=>handlePostClick(item.id)} >   {item.title} </Link></td>
                                    <td>{item.description}</td>
                                    <td>{item.comment}</td>
                                    <td>
                                        <button className='btn btn-primary' onClick={() => handelEdit(item.id)}>Edit</button> &nbsp;
                                        <button className='btn btn-danger' onClick={() => handelDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )



}
