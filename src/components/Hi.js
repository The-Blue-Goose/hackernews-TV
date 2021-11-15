import React, { component } from 'react'
//import { AUTH_TOKEN } from '../constants'

const name = 'William H. Cerhelle III';

class Hi extends component {
    render() {
        //const authToken = localStorage.getItem(AUTH_TOKEN)
        return(
            <h1 className="Hello">My name is {name}</h1>
        )
    }
}
export default Hi