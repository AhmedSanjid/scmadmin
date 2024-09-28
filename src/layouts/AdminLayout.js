import React from 'react';
import Header from './include/header';
import Sidebar from './include/sidebar';
import Footer from './include/footer';

function AdminLayout({children}) {
  return (
    <div id="app">
        <Header/>
        <Sidebar/>
        <div id="main">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default AdminLayout