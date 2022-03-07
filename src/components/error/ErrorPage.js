import React from 'react';
import { Link } from 'react-router-dom'
import './ErrorPage.css'

function ErrorPage() {
  return (
    <>
      <div className="error-container">
        <h2 className="oops-text">Oops something went wrong. <br /> Please try again </h2>
        <Link to="/">
          <button className="error-home-button">Home</button>
        </Link>
      </div>
      <img className="oops-dog" src="https://images.unsplash.com/photo-1485981133625-f1a03c887f0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
    </>
  )
}
export default ErrorPage