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

const LearningReact=() => {
    return(
        <div>
            <h1>Learning React</h1>
            <p>The page is all about learning React components</p>
            <hr />
            <ol>
                <li><Props hi="Welcome to Props" grade="12" age="18" img='./vite.svg'/></li>
                <li><Task item="Waffle Store" flavour="Triple Chocolate" price="150"/></li>
                <li><h1>Hooks</h1></li>
                <ul><li><UseState/></li></ul>
                <ul><li><UseEffect/></li></ul>
                <ul><li><UseEffectAPI/></li></ul>
                <ul><li><FakeImgAPI/></li></ul>
                <ul><li><UseRef/></li></ul>
                <ul><li><UseMemo/></li></ul>
                <ul><li><UseCallback/></li></ul>
                <li><State/></li>
                <li><Events/></li>
            </ol>

        </div>
    );
}
export default LearningReact;

