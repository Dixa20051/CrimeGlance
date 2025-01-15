import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function footer() {
    return(
        <>
        <div className="col-1"><p>Follow Us</p> </div>
            <div className="col-1" style={{width:'40px'}}>
            <a href="https://www.youtube.com" target="blank" className="logo"><YouTubeIcon /></a> 
            </div>
            <div className="col-1" style={{width:'40px'}}>
            <a href="https://www.instagram.com/accounts/login/" target="blank" className="logo"><InstagramIcon /></a>
            </div>
            <div className="col-1" style={{width:'40px'}}>
            <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569888%7Cb%7Cfacebook%20signin%7C&placement=&creative=589460569888&keyword=facebook%20signin&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221832%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-3821998899%26loc_physical_ms%3D9144541%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw_r6hBhDdARIsAMIDhV_6Hiu1DTky_1mh1gRcROWrkHRYmwU1zTYeb48rIt3YqgO53eOf-b8aAnD6EALw_wcB" target="blank" className="logo"><FacebookIcon /></a>
            </div>
            <div className="col-1" style={{width:'40px'}}>
            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="blank" className="logo"><TwitterIcon/></a>
            </div>
            <div className="col" style={{textAlign:'right'}}><p class="cp-text">
                        © Copyright 2023 Crime Glance. All rights reserved.
                    </p></div>
                    </>
        )
}


export default footer;