import DockButton from "./DockButton";
import SvgIcon from "./SvgIcon";
import Github from "../assets/github.svg?react";
import Linkedin from "../assets/linkedin.svg?react";
import Mail from "../assets/mail.svg?react";
import TestImg from '../assets/test.png';

const Dock = ({ ...props }) => {

    return (
        <div className="dock" {...props} >
            <img
                src={TestImg}
                height="24"
                width="24"
                alt="Logo"
                style={{
                    padding: "0.5rem",
                }}
            />
            <DockButton data-tooltip-content="Github" >
                <SvgIcon icon={Github} target="_blank" to="https://github.com/Loenus" />
            </DockButton>
            <DockButton data-tooltip-content="Linkedin">
                <SvgIcon icon={Linkedin} target="_blank" to="https://www.linkedin.com/in/lorenzo-lunghi-info/" />
            </DockButton>
            <DockButton data-tooltip-content="Mail">
                <SvgIcon icon={Mail} target="_blank" to="mailto:lollo.diaspro@gmail.com" />
            </DockButton>
        </div>
    );
};

export default Dock;
