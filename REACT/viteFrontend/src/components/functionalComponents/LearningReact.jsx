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
        <div className="learning-gradient">
            <div className="content-card">
                <h1>React Learning Dashboard</h1>
                <p>Welcome to your personalized learning space! Explore React concepts through interactive components and practical examples.</p>
                
                <div style={{marginTop: '2rem'}}>
                    <h2>📚 Core Concepts</h2>
                    <div className="component-card">
                        <Props hi="Welcome to Props" grade="12" age="18" img='./vite.svg'/>
                    </div>
                    <div className="component-card">
                        <State/>
                    </div>
                    
                    <h2>🎣 React Hooks</h2>
                    <div className="component-card">
                        <UseState/>
                    </div>
                    <div className="component-card">
                        <UseEffect/>
                    </div>
                    <div className="component-card">
                        <UseEffectAPI/>
                    </div>
                    <div className="component-card">
                        <FakeImgAPI/>
                    </div>
                    <div className="component-card">
                        <UseRef/>
                    </div>
                    <div className="component-card">
                        <UseMemo/>
                    </div>
                    <div className="component-card">
                        <UseCallback/>
                    </div>
                    
                    <h2>🎯 Practice Projects</h2>
                    <div className="component-card">
                        <Task item="Waffle Store" flavour="Triple Chocolate" price="150"/>
                    </div>
                    <div className="component-card">
                        <Events/>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default LearningReact;