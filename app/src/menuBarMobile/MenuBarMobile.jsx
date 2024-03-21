import Image from "next/image"
import menu from '../images/foundersImage/Mobile-Menu-Open.png';
import openButton from '../images/foundersImage/menu-open-button.png';
import closeButton from '../images/foundersImage/menu-close-button.png';



export default function MenuBarMobile (){
    return (
    <div>
        <Image className="openBtn" src={openButton} alt="button"/>
        <Image className="menuBtn" src={menu} alt="button"/>
        <Image className="closeBtn" src={closeButton} alt="button"/>
       
    </div>
   )
}