import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-neutral text-neutral-content">
  <div className='m-auto'>
    <span class="footer-title">Skils</span> 
    <a class="link link-hover">HTML</a>
    <a class="link link-hover">CSS</a>
    <a class="link link-hover">JavaScript</a>
    <a class="link link-hover">React</a>
  </div> 
  <div className='m-auto'>
    <span class="footer-title">Menu</span> 
    <a class="link link-hover">Home</a>
    <a class="link link-hover">Resume</a>
    <a class="link link-hover">Projects</a>
    <a class="link link-hover">About</a>
  </div> 
  <div className='m-auto'>
    <span class="footer-title">Social</span> 
    <a class="link link-hover">Github</a>
    <a class="link link-hover">Linked In</a>
    <a class="link link-hover">Facebook</a>
    <a class="link link-hover">Twitter</a>
    <a class="link link-hover">Google</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;