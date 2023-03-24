
import './Section.css';

function Section() {
  return (
      <div>
      <section>
        <div className="container row justify-content-between">
        <div className="w-33 ">
          <img src="https://demo.web3canvas.com/themeforest/tomato/img/menu/1/4.jpg" alt=""></img>
          <div className="rc-info">
            <h4>RECIPE NAME HERE</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard.
            </p>
            <button className="button1">ORDER NOW</button>
          </div>
        </div>
        <div className="w-33">
          <img src="https://demo.web3canvas.com/themeforest/tomato/img/menu/1/5.jpg" alt=""></img>
          <div className="rc-info">
            <h4>RECIPE NAME HERE</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard.
            </p>
            <button className="button1">ORDER NOW</button>
          </div>
        </div>
        <div className="w-33">
          <img src="https://demo.web3canvas.com/themeforest/tomato/img/menu/1/6.jpg" alt=""></img>
          <div className="rc-info">
            <h4>RECIPE NAME HERE</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard.
            </p>
            <button className="button1">ORDER NOW</button>
          </div>
        </div>
        </div>
      </section>
      </div>
  )
}

export default Section;