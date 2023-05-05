import "./Blogs.css";
import React from "react";
import nini from "./image/sample-3.jpg";

function Blog() {
  return (
    <div className='container-fluid bloc'id="blog">
      <h1 className='h1'>Try marker.js right here!</h1>
      <div className='row'>
        <div className='rounded-2 col-md-6 code mx-auto m-4  '>
          <div className='nini'>
            <h1 className='poul'>Hi,Friend</h1>
            <p className='pil'>
              this is a live annotation<br></br> made with marker.js 2<br></br>
              and displayed by marker
            </p>
            <img src={nini} className='rounded-2 w-75 m-5' />
          </div>
        </div>
      </div>
    </div>
  );
    }
    export default Blog;