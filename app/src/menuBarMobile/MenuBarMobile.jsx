import '../menuBarMobile/MenuBarMobile.css'
import Image from "next/image"
import openButton from '../images/foundersImage/menu-open-button.png';
import closeButton from '../images/foundersImage/menu-close-button.png';



export default function MenuBarMobile (){
    return (
    <section>
        <Image className="openBtn" src={openButton} alt="button"/>
        <div className="menu-container">
            <ul className="menu-list">
                <li className="menu-list-item">Home</li>
                <li className="menu-list-item">Meet the Founders</li>
            </ul>
        </div>
        <Image className="closeBtn" src={closeButton} alt="button"/>
       
    </section>
   )
}