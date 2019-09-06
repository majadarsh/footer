import React from 'react';

import FooterData from './FooterData.json'
import fb from "../icons/fb.png";
import insta from "../icons/insta.png";
import ln from "../icons/in.png";
import twitter from "../icons/twitter.png";
import global from "../icons/worldwide.png";
import yt from "../icons/youtube.png";

function worldwide(){
		return(
				<div>
				<br />
            	<a href="https://www.autodesk.com/social-media" className="" target="_blank">
              		All social media
            	</a>
            	<br />
            	<a href="https://www.autodesk.com/site-selector" target="_blank">
              		<img src={global} /> Worldwide sites
            	</a>
            	</div>
			)
	}


const Newfooter = () => {
	
	

	const footer_section  =  FooterData.map((followlinks,index)=>{

		const firstclass = (followlinks.id==1)?"socialicon ":"text-left"
        const lastclass =  (followlinks.id==5)?"col-md-4":"col-md-2";

        return(
        	
          
       	<div className={`${firstclass} ${lastclass} footerblock`}>
        	<h6 className=""> {followlinks.title} </h6>
        	{(followlinks.details).length!=0?<i> {followlinks.details} </i>:""}
        		<ul className="nav flex-column">
        		{followlinks.items.map((social,indexj)=>{
						return(
        				<li className="nav-item">

                			<a href={social.name} target="_blank">
                  			{(followlinks.id==1)?<img src={social.icon}/>:null}  {social.name}
                			</a>
              			</li>
              	)})}
              	</ul>
              	{(followlinks.id==1)?worldwide():null}
        		
          	</div>
        )})
        
   

    
	return(
		<section className="footer">
      		<div className="container-fluid">
        		<div className="row justify-content-around">
        		
        			{footer_section}
        		</div>
        	</div>
        </section>

	)
}

export default Newfooter;