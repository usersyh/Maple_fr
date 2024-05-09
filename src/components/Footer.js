function Footer() {
    return (
        <>
            <div className=" fixed-bottom" id="container-nav">
                <footer className="py-3" id="my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="#" className=" px-2">Home</a></li>
                        <li className="nav-item"><a href="#" className=" px-2">Features</a></li>
                        <li className="nav-item"><a href="#" className=" px-2">Pricing</a></li>
                        <li className="nav-item"><a href="#" className=" px-2">FAQs</a></li>
                        <li className="nav-item"><a href="#" className=" px-2">About</a></li>
                    </ul>
                    <p className="text-center">Data based on NEXON Open API</p>
                </footer>
            </div>
        </>
    );
}

export default Footer;