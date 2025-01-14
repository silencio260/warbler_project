import React from 'react'
import {Link} from 'react-router-dom'
import MessageTimeline from './MessageTimeline';


export default function Homepage({currentUser}) {
    if(!currentUser.isAuthenticated){
        return (
            <div className='home-hero'>
                <h1> What's Happening</h1>
                <h4>New to warbler</h4>
    
                <Link to='/signup' className='btn btn-primary' >
                    Sign up here
                </Link>
            
            </div>
        )
    }

    return (
        <div>
            <MessageTimeline 
                profileImageUrl={currentUser.user.profileImageUrl} 
                username={currentUser.user.username} 
            />
        </div>
    )

}



