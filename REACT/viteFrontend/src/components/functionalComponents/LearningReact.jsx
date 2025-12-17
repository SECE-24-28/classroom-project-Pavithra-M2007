import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import Props from "./Props";
import Task from "./Task";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import UseEffectAPI from "./Hooks/UseEffectAPI";
import FakeImgAPI from "./Hooks/FakeImgAPI";
import UseRef from "./Hooks/UseRef";
import UseMemo from "./Hooks/UseMemo";
import UseCallback from "./Hooks/UseCallback";
import State from "./State";
import Events from "./Events";

const LearningReact = () => {
    const { isLoggedIn } = useAuth();
    
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return(
        <div style={{padding: '2rem'}}>
            <h1>Learning React</h1>
            <p>Welcome! You're now logged in and can access all React components.</p>
            <hr />
            <div style={{marginTop: '2rem'}}>
                <h2>📚 Core Concepts</h2>
                <div style={{padding: '1rem', margin: '1rem 0', border: '1px solid #ddd', borderRadius: '8px'}}>
                    <Props hi="Welcome to Props" grade="12" age="18" img='./vite.svg'/>
                </div>
                <div style={{padding: '1rem', margin: '1rem 0', border: '1px solid #ddd', borderRadius: '8px'}}>
                    <State/>
                </div>
                
                <h2>🎣 React Hooks</h2>
                <div style={{padding: '1rem', margin: '1rem 0', border: '1px solid #ddd', borderRadius: '8px'}}>
                    <UseState/>
                </div>
                <div style={{padding: '1rem', margin: '1rem 0', border: '1px solid #ddd', borderRadius: '8px'}}>
                    <UseEffect/>
                </div>
                <div style={{padding: '1rem', margin: '1rem 0', border: '1px solid #ddd', borderRadius: '8px'}}>
                    <UseEffectAPI/>
                </div>
                <div style={{padding: '1rem', margin: '1rem 0', border: '1px solid #ddd', borderRadius: '8px'}}>
                    <FakeImgAPI/>
                </div>
                <div style={{padding: '1rem', margin: '1rem 0', border: '1px solid #ddd', borderRadius: '8px'}}>
                    <UseRef/>
                </div>
                <div style={{padding: '1rem', margin: '1rem 0', border: '1px solid #ddd', borderRadius: '8px'}}>
                    <UseMemo/>
                </div>
                <div style={{padding: '1rem', margin: '1rem 0', border: '1px solid #ddd', borderRadius: '8px'}}>
                    <UseCallback/>
                </div>
                
                <h2>🎯 Practice</h2>
                <div style={{padding: '1rem', margin: '1rem 0', border: '1px solid #ddd', borderRadius: '8px'}}>
                    <Task item="Waffle Store" flavour="Triple Chocolate" price="150"/>
                </div>
                <div style={{padding: '1rem', margin: '1rem 0', border: '1px solid #ddd', borderRadius: '8px'}}>
                    <Events/>
                </div>
            </div>
        </div>
    );
};

export default LearningReact;