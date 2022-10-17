import Header from "./Header";
import "./index.css";
import Email_icon from "../assets/Layer 2 (1).png";
import Email_photo from "../assets/Email campaign-pana (1) 1.png";
import Ai_framwork from "../assets/AI framework.png";
import Personalization from "../assets/Group 22.png";
import Efficiency from "../assets/Group 23.png";
import Automation from "../assets/Group 24.png";
import AI from "../assets/Layer 2.png";
import Email_automation from "../assets/Grow your Business with Email Automation.png";

function Index() {
  return (
    <div className="main">
      <Header />
      <div className="title_btn">
        <div>
          <p className="title">
            <img src={Email_icon} alt="...img" />
          </p>
        </div>
        <div>
          <button className="btn">Talk to us</button>
        </div>
      </div>
      <div className="heading">
        <img src={Email_automation} alt="...img" />
      </div>
      <div className="email_photo_icon">
        <img src={Email_photo} alt="...img" />
      </div>
      <div className="get_start_btn">
        <button>Get Start</button>
      </div>

      <div className="Ai_framwork">
        <div>
          <img src={Ai_framwork} alt="...img" />
        </div>

        <div className="Ai_work">
          <div className="Work">
            <img src={Personalization} alt="...img" />
            <img src={Efficiency} alt="...img" />
            <img src={Automation} alt="...img" />
          </div>
          <div className="Ai_icon">
            <img src={AI} alt="...img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
