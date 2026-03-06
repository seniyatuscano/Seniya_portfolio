import React from "react";
import { stackList } from "../../data/ProjectData";
import {
    TechStackSection,
    SpheresContainer,
    Sphere,
} from "./TechStackElements";
import ScrollAnimation from "react-animate-on-scroll";

function TechStack() {
    return (
        <TechStackSection id="techstack">
            <ScrollAnimation animateIn="fadeIn">
                <h2>My Techstack</h2>
            </ScrollAnimation>
            <SpheresContainer>
                {stackList.map((stack, index) => (
                    <ScrollAnimation
                        key={index}
                        animateIn="zoomIn"
                        delay={index * 100}
                        animateOnce={true}
                    >
                        <Sphere delay={Math.random() * 2}>
                            <img src={stack.img} alt={stack.name} />
                            <span>{stack.name}</span>
                        </Sphere>
                    </ScrollAnimation>
                ))}
            </SpheresContainer>
        </TechStackSection>
    );
}

export default TechStack;
