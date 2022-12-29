import React, { useState } from "react";
import "./birdsButtons.css";
import { birdsButtonsBg } from "./birdsButtonsBg.js";
const BirdsButtons = ({ setCurrentBird }) => {
    const [rotate, setRotate] = useState(false);
    const rotateNavbar = {
        transform: `rotate(${36 * rotate}deg)`,
        transformOrigin: "center",
    };
    return (
        <div className='birds-buttons-container' style={rotateNavbar}>
            {birdsButtonsBg.map((bird, index) => {
                return (
                    <span key={index}>
                        <span
                            style={{
                                background: `url(${bird})`,
                                transform:
                                    index === rotate
                                        ? ` 
                                        rotate(${
                                            index === 8 || index === 9
                                                ? -36 * rotate
                                                : index === 3 || index === 1
                                                ? -36 * rotate - 50
                                                : -36 * rotate - 10
                                        }deg) 
                                          scale(1.6) scaleX(${
                                              index === 1 ||
                                              index === 4 ||
                                              index === 5 ||
                                              index === 10
                                                  ? 1
                                                  : -1
                                          })
                                          translate(${
                                              index === 2 ||
                                              index === 7 ||
                                              index === 0
                                                  ? 20
                                                  : 0
                                          }%)
                                          `
                                        : `rotate(${
                                              -36 * rotate
                                          }deg) scale(1.3) scaleX(${
                                              rotate && index === 0 ? -1 : 1
                                          }) translate(${
                                            rotate && index === 0 ? `5%,-10%` : 0
                                        })`,
                                filter: `${
                                    rotate === 0 && index === 0
                                        ? `drop-shadow(-8px -4px 3px rgba(0, 255, 255, 0.5)) drop-shadow(8px 4px 3px rgba(0, 255, 255, 0.5))`
                                        : `grayscale(${
                                              typeof rotate !== "number"
                                                  ? 0
                                                  : rotate === index
                                                  ? 0
                                                  : 100
                                          }%)`
                                }`,
                            }}
                            className={`bird-button bird${index}`}>
                            <span
                                className='bird-click'
                                onClick={() => {
                                    setCurrentBird(index + 1);
                                    setRotate(index);
                                }}></span>
                        </span>
                    </span>
                );
            })}
        </div>
    );
};

export default BirdsButtons;
