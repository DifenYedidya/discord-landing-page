import React, { useState, useEffect } from 'react';

function Header() {
    return(
        <header className="header">
            <h1>Simulasi Antrian</h1>
        </header>
    )
}

function Content(){
    return(
        <div className="content">
            <p>Masukan Nama</p>
            
        </div>
    )
}

function Footer(){
    return (
        <div className="footer">
            <p>Antrian Kosong</p>
        </div>
    )
}

function App(){
    return(
        <div className="container">
        <Header/>
        <hr/>
        <Content/>
        <hr/>
        <Footer/>
        </div>
    );
}

export default App;