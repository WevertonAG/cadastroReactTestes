import './Main.css'
import React from 'react'
import Header from '../header/Header'

function Main(props) {
    return (
        <>
            <Header {...props} />
            <main className="content container-fluid" data-testid="main-1">
                <div className="p-3 mt-3">
                    {props.children}
                </div>
            </main>
        </>
    )
}
export default Main;