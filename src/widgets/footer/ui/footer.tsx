import './style.scss';

function Footer() {
    return (
        <footer>
            <div className="container">
                <p>{`To Do App Testing Task By Tarazov Timur, ${new Date(Date.now()).getFullYear()}`}</p>
            </div>
        </footer>
    )
}

export default Footer;