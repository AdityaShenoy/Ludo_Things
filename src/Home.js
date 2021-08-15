export default function Home() {
    const gameModes = [
        "vs Computer",
        "vs Friends (Coming Soon)",
        "Team vs Team (Coming Soon)"
    ]
    return (
        <div
            className="home vh-100 text-white"
            style={{backgroundColor: "#311b92"}}>
                <h1 className="p-5 text-center">
                    Ludo
                </h1>
                <div className="container">
                    {gameModes.map(val => (
                        <div className="row justify-content-center">
                            <button className="btn col-6 text-white fs-4
                                border border-light border-2 rounded-pill m-2">
                                    {val}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="position-absolute bottom-0 p-3 w-100
                    d-flex align-items-center" style={{backgroundColor: "#6746c3"}}>
                        Developed by Aditya Shenoy&nbsp;&nbsp;&nbsp;
                        <a href="https://linkedin.com/in/AdityaShenoy49">
                            <img src="images/linkedin.png" alt="LinkedIn" height="20"
                                className="d-flex"/>
                        </a>&nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/AdityaShenoy">
                            <img src="images/github.png" alt="GitHub" height="20"
                                className="d-flex"/>
                        </a>
                </div>
        </div>
    )
}