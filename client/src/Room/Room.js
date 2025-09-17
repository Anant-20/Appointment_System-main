import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import "../Video_Page/video_page.css"
import Layout from "../components/Layout";

const Room = () => {
    const { id } = useParams();

    const myMeeting = async (element) => {
        const appID = 1944783357;
        const serverSecret = "5613eaac26cd8ef9026a195b3dbe928a";

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,
            serverSecret,
            id,
            Date.now().toString(),
            "Enter your Name");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `http://localhost:3000/room/${id}`,
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
        })
    }

    return (
        <Layout>
            <div ref={myMeeting} className='meeting_tab'></div>
        </Layout>

    )
}

export default Room