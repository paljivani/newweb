import './Footer.css'

function Footer() {
    return (
        <div className=" bg">
            
            <div className="container">
            <footer className="row justify-content-between">
                <div className="w-30">
                    <div  className=" bg1">
                        <h2>ABOUT US</h2>
                        <p>Duis leo justo, condimentum at purus eu,Aenean sed dolor sem. Etiam massa libero, auctor vitae egestas et, accumsan quis nunc.Duis leo justo, condimentum at purus eu, posuere pretium tellus.</p>
                        <h6>Read more →</h6>
                    </div>
                </div>
                <div className="w-30">
                    <div  className=" bg2">
                        <h2>RECENT POST</h2>
                        <p>Hand picked ingredients for our best customers</p>
                        <h6>29 may 2015</h6>
                        <p>Daily special foods that you will going to love</p>
                        <h6>29 may 2015</h6>
                    </div>
                </div>
                <div className="w-30">
                    <div  className=" bg3">
                        <h2>REACH US</h2>
                        <p>28 Seventh Avenue, Neew York, 10014</p>
                        <p>Phone: (415) 124-5678</p>
                        <p>support@restaurant.com</p>
                    </div>
                </div>

                
            </footer>
            </div>
        </div>
    )
}

export default Footer;