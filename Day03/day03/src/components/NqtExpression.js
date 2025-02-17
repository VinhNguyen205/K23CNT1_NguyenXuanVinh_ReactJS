import React from 'react';

function NqtExpression(props) {
    const name = "Nguyễn Quang Tâm"
    const user ={
        fisrtname: "Nguyễn Quang",
        lastname: "Tâm"
    }
    const FullName = (user)=>{
        return user.fisrtname + " " + user.lastname
    }
    const element = (
        <div>
            {/* biểu thức jsx */}
            <h2>{FullName(user)}</h2>
            <hr/>
            <h3>Welcome, {name}</h3>
        </div>
    )
    const sayhello = (name)=>{
        if(name){
            return <h3>Hello to {name}</h3>
        }
        else{
            return <h2>Hello NQT</h2>
        }
    }
    return (
        <div>
            <h1>
            NQT - JSX
            </h1>
            {sayhello()}
            {sayhello('NQT')}
        </div>
    );
}

export default NqtExpression;