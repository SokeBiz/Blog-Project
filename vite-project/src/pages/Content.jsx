import React from "react";
import { useState, useRef, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Link, useParams } from "react-router-dom";
import image from "../assets/blogbg.jpg"
import axios from "axios";


function Content() {
    
    const {sid} = useParams()
    const [comment, setComment] = useState([])
    const [data, setData] = useState({})


    useEffect(() => {
        const getData = async () => {
            const url = `https://blogim.onrender.com/${sid}`
            const res = await axios.get(url)
            // data.push(res.data)
            // setData(...data)
            setData(res.data)
            // console.log(data); 
        }
            getData()
    }, [data])
return(
    <>
        <DefaultLayout>
            <main className="bg-secondary">

                {/* Styled in CSS file  */}
                <div className="topContent"> 
                    <div id="titleTopContent" className="d-flex flex-wrap">
                        <div id="titleContent" className="w-50">
                            <img src={data.img} alt="" style={{width: '100%', height: '50vh'}} />
                        </div>
                        <div id="titleContent" className="w-50 text-wrap text-center row align-items-center">
                            <h1 className="fw-bold p-3">
                                {data.tittle}
                            </h1>
                        </div>
                    </div>

                    <div className="pt-2 ps-2 pe-2">
                        {/* Background styled in css file  */}
                        <p className="p-2 rounded" id="textContent" style={{boxShadow: "0px 0px 5px black"}}>
                            {data.body}
                        </p>
                    </div>
                    
                    <div className="ps-2 pe-2 pb-1">
                        <div id="commentSection" className="ps-2 pe-2 pb-4 rounded" style={{boxShadow: "0px 0px 5px black"}}>
                            <h1>Comments</h1>
                            <div className="w-75 p-2 mb-2 border rounded" id="comment" style={{boxShadow: "2px 2px 5px black"}}>
                                <h5 className="fw-bold">Name of the User</h5>
                                <p>The comment that was left by the user</p>
                            </div>
                            <div className="w-75 p-2 mb-2 border rounded" id="comment" style={{boxShadow: "2px 2px 5px black"}}>
                                <h5 className="fw-bold">Name of the User</h5>
                                <p>The comment that was left by the user</p>
                            </div>
                            <div className="w-75 p-2 mb-2 border rounded" id="comment" style={{boxShadow: "2px 2px 5px black"}}>
                                <h5 className="fw-bold">Name of the User</h5>
                                <p>The comment that was left by the user</p>
                            </div>

                            <div id="leaveComment">
                                <h2>
                                    Add your comment
                                </h2>
                                <textarea name="" id="" className="w-75" style={{height: "10rem"}}></textarea> <br />
                                <button className="btn btn-outline-secondary">
                                    Submit Comment
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                
            </main>
        </DefaultLayout>
    </>
)
}

export default Content;