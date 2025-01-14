import React from 'react'
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'; 
import { connect } from "react-redux";
import Homepage from '../components/Homepage'
import AuthForm from '../components/AuthForm'
import {authUser} from '../store/actions/auth'
import withAuth from '../hocs/withAuth'
import MessageForm from '../containers/MessageForm'

const Main = props => {
    const {authUser, errors, currentUser} = props
    return (
        <div className='container'>
           
            <Switch>
                <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props}/> } />
                <Route exact path="/signin" render={props => {
                    return(
                        <AuthForm 
                        errors={errors}
                        onAuth={authUser} 
                        buttonText='Log in' 
                        heading='Welcome back.' 
                        {...props} />
                    )
                    }
                } /> 

                <Route exact path="/signup" render={props => {
                    return(
                        <AuthForm 
                        errors={errors}
                        onAuth={authUser} 
                        signUp 
                        buttonText='Sign up' 
                        heading='Join warbler Today.'
                         {...props} />
                    )
                    }
                } /> 
                
                <Route path='/users/:id/messages/new' component= {withAuth(MessageForm)} />
                {/* {withAuth(MessageForm)} */}
            </Switch>

        </div>
    )
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        errors: state.errors
    }
}

export default withRouter( connect(mapStateToProps, {authUser})(Main) ); 