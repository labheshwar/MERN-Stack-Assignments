import "./Section.css"

export default function Section () {
    return (
        <section>
            <div id="video">
                <video src={require("../../Assets/intro.mp4")} controls width="60%" />
            </div>
            <article>
                <div id="main">
                    <hr/>
                    <img src={require("../../Assets/featuredimage.jpeg")} alt="featured img" />
                    <h2>What is JavaScript</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis, tellus in rhoncus mollis,
                        velit augue commodo odio, ac suscipit dui massa ut neque. Quisque nec mi iaculis, suscipit quam
                        vitae, eleifend leo. Duis laoreet a diam et faucibus. Pellentesque habitant morbi tristique senectus
                        et netus et malesuada fames ac turpis egestas. Donec a nibh sit amet nunc porttitor blandit. Ut ut
                        nunc eros. Curabitur id libero ac justo ultrices elementum vel vel purus.
                    </p>
                    <hr/>
                </div>
                <div id="content">
                    <div>
                        <h3>Single threaded</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis, tellus in rhoncus
                            mollis,
                            velit augue commodo odio, ac suscipit dui massa ut neque. Quisque nec mi iaculis, suscipit quam
                            vitae, eleifend leo. Duis laoreet a diam et faucibus. Pellentesque habitant morbi tristique
                            senectus
                            et netus et malesuada fames ac turpis egestas. Donec a nibh sit amet nunc porttitor blandit. Ut
                            ut
                            nunc eros. Curabitur id libero ac justo ultrices elementum vel vel purus.</p>
                    </div>
                    <div>
                        <h3>Event Loop</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis, tellus in rhoncus
                            mollis,
                            velit augue commodo odio, ac suscipit dui massa ut neque. Quisque nec mi iaculis, suscipit quam
                            vitae, eleifend leo. Duis laoreet a diam et faucibus. Pellentesque habitant morbi tristique
                            senectus
                            et netus et malesuada fames ac turpis egestas. Donec a nibh sit amet nunc porttitor blandit. Ut
                            ut
                            nunc eros. Curabitur id libero ac justo ultrices elementum vel vel purus.</p>
                        <ul>
                            <li><b>V8</b></li>
                            <li><b>Stack</b></li>
                            <li><b>Queue</b></li>
                        </ul>
                        <h4>V8</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis, tellus in rhoncus
                            mollis,
                            velit augue commodo odio, ac suscipit dui massa ut neque. Quisque nec mi iaculis, suscipit quam
                            vitae, eleifend leo. Duis laoreet a diam et faucibus. Pellentesque habitant morbi tristique
                            senectus
                            et netus et malesuada fames ac turpis egestas. Donec a nibh sit amet nunc porttitor blandit. Ut
                            ut
                            nunc eros. Curabitur id libero ac justo ultrices elementum vel vel purus.</p>
                        <h4>Stack</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis, tellus in rhoncus
                            mollis,
                            velit augue commodo odio, ac suscipit dui massa ut neque. Quisque nec mi iaculis, suscipit quam
                            vitae, eleifend leo. Duis laoreet a diam et faucibus. Pellentesque habitant morbi tristique
                            senectus
                            et netus et malesuada fames ac turpis egestas. Donec a nibh sit amet nunc porttitor blandit. Ut
                            ut
                            nunc eros. Curabitur id libero ac justo ultrices elementum vel vel purus.</p>
                        <h4>Queue</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis, tellus in rhoncus
                            mollis,
                            velit augue commodo odio, ac suscipit dui massa ut neque. Quisque nec mi iaculis, suscipit quam
                            vitae, eleifend leo. Duis laoreet a diam et faucibus. Pellentesque habitant morbi tristique
                            senectus
                            et netus et malesuada fames ac turpis egestas. Donec a nibh sit amet nunc porttitor blandit. Ut
                            ut
                            nunc eros. Curabitur id libero ac justo ultrices elementum vel vel purus.</p>
                    </div>
                    <div>
                        <h3>Queues</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis, tellus in rhoncus
                            mollis,
                            velit augue commodo odio, ac suscipit dui massa ut neque. Quisque nec mi iaculis, suscipit quam
                            vitae, eleifend leo. Duis laoreet a diam et faucibus. Pellentesque habitant morbi tristique
                            senectus
                            et netus et malesuada fames ac turpis egestas. Donec a nibh sit amet nunc porttitor blandit. Ut
                            ut
                            nunc eros. Curabitur id libero ac justo ultrices elementum vel vel purus.</p>
                    </div>
                </div>
            </article>
        </section>
    )
}