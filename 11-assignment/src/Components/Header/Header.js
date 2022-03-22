import "./Header.css"

export default function Header () {
    return (
        <header>
            <div id="beginning">
                <div>
                    <h1>MERN Stack Bootcamp</h1>
                    <p>Bootcamp for beginners</p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="logo" width="3%" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="logo" width="3%" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="logo" width="3%" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="logo" width="3%" />
                </div>
            </div>
            <div id="menu">
                <span>
                    <a href="/">Home</a>
                    <a href="/">About</a> 
                    <a href="/">Contact</a>
                </span>
            </div>
        </header>
    )
}