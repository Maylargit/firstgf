 import React from 'react';

 const Navbar = () => {
     return (
        <div style={{display: 'flex', backgroundColor: '#f14730',}} >
		  		<div style={{marginLeft: '20px'}}>
					<div style={{fontSize: '50px', }} >  'GodFather Inc' </div>
						<p style={{fontSize: '30px'}}>Frontend Developers</p>
				</div>
						<ul style={{ display: 'flex', 
                        		justifyContent: 'space-around',
                        		width: '500px',
										marginTop: '30px',
										marginLeft: '700px',
										fontSize: '20px',}}>
							<p ><a href="/">Home</a></p>
							<p><a href="/about">About</a></p>
							<p><a href="/contact">Contact</a></p>
							<p><a href="/blog">Blog</a></p>
						</ul>
        </div>
     )
 }

 export default Navbar;