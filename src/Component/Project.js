import React from 'react';

const Project = () => {
    return (
        // <div className='bg-scroll h-full' style={{backgroundImage: `url("https://i.ibb.co/QPfp6n6/bandarban-20-22-237.jpg")` }}>
        //     <h1>project</h1>
            
          
        // </div>
        <div class="card w-96 glass">
        <figure>
          <img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    );
};

export default Project;