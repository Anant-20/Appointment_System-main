import Layout from "../components/Layout";
import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import "./video_page.css"

const Home = () => {
    const [value, setValue] = useState();

    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`)
    }, [navigate, value])

    return (
        <Layout>
            <div className="Input_tab">
                <div className="image_screen">
                    <img src="images/Doctors/video_call_image3.jpg" alt=" image_not_found" />
                </div>
                <div className="input_fields">
                    <div >
                        <input
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value)
                            }} type="text" placeholder='Enter Room Id'
                        />
                    </div>
                    <div className="join_button">
                        <button onClick={handleJoinRoom}>Join</button>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Home