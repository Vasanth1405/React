import "./css/login.css"
import login from "./images/traveling.jpg"

const LoginForm = () => {
    return (
        <div className="auth-content">
            <div className="LoginModal_leftSection">
                <div className="LoginModal_authBanner">
                    <img alt="Login" src={login}></img>
                    <div className="LoginModal_bannerTextWrap">
                        <div className="LoginModal_bannerBoldText">Your Adventure Starts Here</div>
                        <span>Experience 20,000+ Tours And Activities from 1,200+ Suppliers</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;