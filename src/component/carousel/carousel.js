import React, { Component } from 'react'
import "./carousel.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const photos =[
    {
        name:"photo1",
        url:"https://scontent.ftun3-1.fna.fbcdn.net/v/t1.15752-9/67654949_2342979972637516_5359464297384640512_n.jpg?_nc_cat=108&_nc_sid=b96e70&_nc_eui2=AeG-vFXjbq48M4uJa4RtucumPHJ3jnZWpUpttofUU0DgAk1iaIuAH0UbAKmbNY8vSFS7E7AKCc4IcnZY_PSPWMu5jGaSMX2K_eHy5YJhpbc2eA&_nc_ohc=SvKA4xv_n-IAX-rOAyK&_nc_ht=scontent.ftun3-1.fna&oh=8e938a491001b25b59ea300fcaafb6a4&oe=5EA50E38"
        
    },
    {
        name:"photo2",
        url:"https://scontent.ftun3-1.fna.fbcdn.net/v/t1.15752-9/90759695_219672629383079_408596469549891584_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_eui2=AeE4x3X1DOyw58Z75kQdrc23cWmg55xq5YIOHwYdMZjCCFUHHl8TBaYD_ORFbLv_og7b6irPIKSV-Q3-2zgGn9RaPbGvy-EsV7YGPu1JVZow_w&_nc_ohc=p9yrzVsTfNMAX-b8w3N&_nc_ht=scontent.ftun3-1.fna&oh=209203c200bdfcf1050e5f09df7143ab&oe=5EA1F88A"
        
    },
    {
        name:"photo3",
        url:"https://scontent.ftun3-1.fna.fbcdn.net/v/t1.15752-9/90947011_522661481952765_6775052618696753152_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_eui2=AeHNaxGgq56Z8DASfgCKx5o2USNdtVfoS-THQujOfinowavADOQlQTJqygWMGCNMd6ebOn6LGWPMQTY7d5my54uveTtOQG7FZHkSQrsbbQfXVQ&_nc_ohc=K-rFzGF3XxsAX8YpmQb&_nc_ht=scontent.ftun3-1.fna&oh=a3d9e00d9a5f7710b483f9e6404a6624&oe=5EA1D6B3"
        
    },
    {
        name:"photo4",
        url:"https://scontent.ftun3-1.fna.fbcdn.net/v/t1.15752-9/90776059_1077231385975070_1937797666662514688_n.jpg?_nc_cat=108&_nc_sid=b96e70&_nc_eui2=AeFPoUSF6UpmDwCj_sc5-F9y466Raa5Hi6W5JbwJu9kaWcg_hCLlVZ10HwROvtguDT9ACqYzOBK7yfLqKsOkg9ubZ42k3nx1AoZ0VCPZZYvUdA&_nc_ohc=6dIoCYNl544AX8Z-5wL&_nc_ht=scontent.ftun3-1.fna&oh=2ea7a09ab1b25fb0c994bda5fab3be05&oe=5EA2B065"
        
    },
    {
        name:"photo5",
        url:"https://scontent.ftun3-1.fna.fbcdn.net/v/t1.15752-9/90764225_213822926380821_7234507904827523072_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_eui2=AeE0uuLUQYJlRhvNDcvPJO4zDKePw_M9iDlG_SHtXozyjdvShAi7W_ryWyXbITOXWuBhEntIczPFIXavm4TBAtPnaVMb6RlmpyXbP4Trg651_Q&_nc_ohc=7n7wbT73nHsAX8ka8YJ&_nc_ht=scontent.ftun3-1.fna&oh=f4d39076305801a1b2e7371a37d56bd9&oe=5EA2925B"
        
    },
    {
        name:"photo6",
        url:"https://scontent.ftun3-1.fna.fbcdn.net/v/t1.15752-9/71314550_409095713139893_4526649132005195776_n.jpg?_nc_cat=110&_nc_sid=b96e70&_nc_eui2=AeHHl18l9mTmy-N7FkP_Uf1os3C24v86uDXNEeo4hHJArDrfD9xHjbOhdDoeHBaPXvaWK2MXcDa7PX1IKlISpvTmNASr7vTt23ghn3JlW0mXHQ&_nc_ohc=HQoCMgdWK6wAX-MukjS&_nc_ht=scontent.ftun3-1.fna&oh=9ad5c34346353a1d15f848c8e7f9e08a&oe=5EA4CFC4"
        
    },
    {
        name:"photo7",
        url:"https://scontent.ftun3-1.fna.fbcdn.net/v/t1.15752-9/90735272_679820589453883_1881000679837794304_n.jpg?_nc_cat=110&_nc_sid=b96e70&_nc_eui2=AeG8TS4lPXBkvK1NiEeZRecOf3czw5ckh4v_XbueUhlFuN61NEYm7zFWb2XC3mTXCtxUEFVnBCpaTTRV_yhsc7CqIzaZC3VkZzxhDZWymjW9RQ&_nc_ohc=ZEIfKpK7ZIgAX91zKVt&_nc_ht=scontent.ftun3-1.fna&oh=2c4abc2f5c7c23560bf60cdbf7ac22a1&oe=5EA49288"
        
    }
   
   
]
export default class Carousel extends Component {
    render() {
        const settings={
            dots:true,
            fade:true,
            infinte:true,
            speed:500,
            slidesToShow:1,
            arrows:true,
            slidesToScroll:1,
            className:"slides"
        }
        return (
            <div className="x">
<Slider {...settings}>
{photos.map((photo)=>{
    return(
<div >
<img width="1000px" height="450px"  src={photo.url}/>
</div>

    )
})}
</Slider>
            </div>
        )
    }
}
