import '../Footer/Footer.css';

export default function Footer (){
    return <>
        <footer>
            <div className="media-footer">
            <p>Find us on:</p>
            <ul id="list">
                <li>
                <a>Facebook</a>
                </li>
                <li>
                <a>Instagram</a>
                </li>
                <li>
                <a>Ticktok</a>
                </li>
            </ul>
            <small>&copy; Fireplace Palace</small>
            <a>info@fireplace.co.uk</a>
            </div>
        </footer>
    </>
}