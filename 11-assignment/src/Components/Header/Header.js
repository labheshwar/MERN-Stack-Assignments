import "./Header.css"

export default function Header () {
    return (
        <header>
            <div id="beginning">
                <div>
                    <h1>Js Bootcamp</h1>
                    <p>Bootcamp for beginners</p>
                    <img src={require("./../../Assets/icon.png")} alt="logo" width="3%" />
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