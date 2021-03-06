import React, { useEffect, useRef }  from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


function SVGtoAnimate() {
  
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;

    ScrollTrigger.defaults({
      scrub: true,
      ease: "none",
    });

    // 300+ Ataccamers

    gsap.to(
      element.querySelector("#_300_"),
      {
        scale: 1.2,
        x: 850,
        scrollTrigger: {
          start: "top top",
          end: "800 center",
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#Ataccamers"),
      {
        scale: 0.1,
        opacity: 0,
        y: 600
      },
      {
        scale: 1.3,
        opacity: 1,
        y: 820,
        scrollTrigger: {
          start: "400 center",
          end: "800 center",
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#Data_people"),
      {
        scale: 0.1,
        opacity: 0,
        x: 1200
      },
      {
        scale: 1,
        opacity: 1,
        x: 100,
        y: 10,
        scrollTrigger: {
          start: "top center",
          end: "800 center",
        },
      }
    );

    // 22+ nationalities

    gsap.fromTo(
      element.querySelector("#_22_"),
      {
        scale: 0,
        opacity: 0,
        transformOrigin: '50% 50%',
      },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          start: "1050 center",
          end: "590 top"
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#nationalities"),
      {
        scale: 0,
        opacity: 0,
        transformOrigin: '50% 50%',
      },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          start: "1050 center",
          end: "590 top"
        },
      }
    );
    gsap.fromTo(
      element.querySelector("#Planet_icon"),
      {
        x: -1200,
      },
      {
        x: 0,
        rotation: "+=1080",
        transformOrigin: '50% 50%',
        scrollTrigger: {
          start: "800 center",
          end: "600 top",
        },
      }
    );

    // 10 offices

    gsap.fromTo(
      element.querySelector("#_10"),
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 320,
        opacity: 1,
        scrollTrigger: {
          start: "1355 center",
          end: "850 top"
        },
      }
    );

    gsap.fromTo(
      element.querySelector("#offices"),
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 350,
        opacity: 1,
        scrollTrigger: {
          start: "1375 center",
          end: "850 top"
        },
      }
    );

    gsap.fromTo(
      element.querySelector("#Office_icon"),
      {
        x: 1000,
        opacity: 0,
        scale: 1.6
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          start: "1250 center",
          end: "900 top"
        },
      }
    );

    // 350+ global clients

    gsap.fromTo(
      element.querySelector("#_350_"),
      {
        scale: 1.25,
        transformOrigin: '50% 50%',
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          start: "1850 center",
          end: "1400 top"
        },
      }
    );

    gsap.fromTo(
      element.querySelector("#global_clients"),
      {
        scale: 1.35,
        transformOrigin: '50% 50%',
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          start: "1850 center",
          end: "1400 top"
        },
      }
    );

    gsap.fromTo(
      element.querySelector("#Rocket_icon"),
      {
        scale: 0.3,
        transformOrigin: '50% 50%',
        x: -300,
        y: 300
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        scrollTrigger: {
          start: "1700 center",
          end: "1400 top"
        },
      }
    );

    // Animate line on scroll

    const main = gsap.timeline({
      scrollTrigger: {
        start: "330 center",
        end: "200 top",
        toggleActions: "restart pause resume pause"
      }
    })
    .from("#Line_452", {drawSVG: 0}, 0)

    main.from(".ellipse1",
    {
      scrollTrigger: {
      start: "530 center",
      end: "350 top",
      },
    drawSVG: "100% 100%"
    })

    .from("#Line_543",
    {
      scrollTrigger: {
      start: "880 center",
      end: "480 top"
      },
    drawSVG: "100% 100%"
    })

    // currently of text

    .fromTo(
      element.querySelector("#Group_6145"),
      {
        scale: 0.1,
        opacity: 0,
        transformOrigin: '50% 50%',
      },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          start: "850 center",
          end: "400 top",
        },
      }
    )

    gsap.timeline({
      scrollTrigger: {
        start: "1025 center",
        end: "550 top",
      }
    })
    .fromTo(".ellipse2", {drawSVG:"0% 0%"}, {drawSVG:"0% 100%" }, 0);

    gsap.timeline({
      scrollTrigger: {
        start: "1050 center",
        end: "590 top"
      }
    })
    .fromTo("#Line_545", {drawSVG:"0% 0%"}, {drawSVG:"0% 100%" }, 0);

    main.from("#Line_546",
    {
      scrollTrigger: {
      start: "1150 center",
      end: "650 top"
      },
    drawSVG: "100% 100%"
    });

    gsap.timeline({
      scrollTrigger: {
        start: "1150 center",
        end: "700 top"
      }
    })
    .fromTo(".ellipse3", {drawSVG:"0% 0%"}, {drawSVG:"0% 100%" }, 0);

    gsap.timeline({
      scrollTrigger: {
        start: "1250 center",
        end: "800 top"
      }
    })
    .fromTo("#Line_544", {drawSVG:"0% 0%"}, {drawSVG:"0% 100%" }, 0);

    //populating text

    main.fromTo(
      element.querySelector("#Group_5076"),
      {
        scale: 0.1,
        opacity: 0,
        transformOrigin: '50% 50%',
      },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          start: "1250 center",
          end: "750 top",
        },
      }
    )

    .from(".ellipse4",
    {
      scrollTrigger: {
      start: "1340 center",
      end: "850 top"
      },
    drawSVG: "100% 100%"
    });

    // gradient rectangle drawSVG doesn't work ??? used opacity as alternative
    gsap.timeline({
      scrollTrigger: {
        start: "1355 center",
        end: "850 top"
      }
    })
    .fromTo("#Rectangle_2565", {opacity: 0}, {opacity: 1}, 0);

    gsap.timeline({
      scrollTrigger: {
        start: "1450 center",
        end: "930 top"
      }
    })
    .fromTo("#Line_549", {drawSVG:"0% 0%"}, {drawSVG:"0% 100%" }, 0);

    main.from(".ellipse5",
    {
      scrollTrigger: {
      start: "1400 center",
      end: "1000 top"
      },
    drawSVG: "100% 100%"
    })

    .from("#Line_548",
    {
      scrollTrigger: {
      start: "1540 center",
      end: "1200 top"
      },
    drawSVG: "100% 100%"
    })

    // trusted by text

    .fromTo(
      element.querySelector("#Group_6146"),
      {
        scale: 0.1,
        opacity: 0,
        transformOrigin: '50% 50%',
      },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          start: "1570 center",
          end: "1070 top",
        },
      }
    );

    gsap.timeline({
      scrollTrigger: {
        start: "1730 center",
        end: "1400 top"
      }
    })
    .fromTo(".ellipse6", {drawSVG:"0% 0%"}, {drawSVG:"0% 100%" }, 0);

    gsap.timeline({
      scrollTrigger: {
        start: "1760 center",
        end: "1400 top"
      }
    })
    .fromTo("#Line_550", {drawSVG:"0% 0%"}, {drawSVG:"0% 100%" }, 0);

    // circle arrow in the end

    main.fromTo(
      element.querySelector("#Ellipse_778"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          start: "1770 center",
          end: "1400 top",
        },
      }
    )
    .fromTo(
      element.querySelector("#Arrow-2"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          start: "1750 center",
          end: "1400 top",
        },
      }
    )
    
  },[]);

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="1228.2"
			height="1370"
			viewBox="0 0 1228.2 1370"
      ref={ref}
		>
			<defs>
				<clipPath id="clip-path">
					<rect
						id="Rectangle_2085"
						dataname="Rectangle 2085"
						width="40"
						height="40"
						transform="translate(0.188 -0.443)"
						fill="#4dd0e1"
					/>
				</clipPath>
				<clipPath id="clip-path-5">
					<rect
						id="Rectangle_2556"
						dataname="Rectangle 2556"
						width="40"
						height="40"
						fill="#4dd0e1"
					/>
				</clipPath>
				<linearGradient
					id="linear-gradient"
					x1="0.5"
					x2="0.5"
					y2="1"
					gradientUnits="objectBoundingBox"
				>
					<stop offset="0" stopColor="#5e35b1" />
					<stop offset="1" stopColor="#d6006d" />
				</linearGradient>
			</defs>
			<g id="flow" transform="translate(-318 -643)">
				<text
					id="_300_"
					dataname="300+"
					transform="translate(818 758)"
					fill="#5e35b1"
					fontSize="120"
					fontFamily="Gilroy-ExtraBold, Gilroy"
					fontWeight="800"
				>
					<tspan x="0" y="0">
						300+
					</tspan>
				</text>
				<text
					id="Ataccamers"
					transform="translate(894 813)"
					fill="#5e35b1"
					fontSize="24"
					fontFamily="Gilroy-ExtraBold, Gilroy"
					fontWeight="800"
				>
					<tspan x="0" y="0">
						Ataccamers
					</tspan>
				</text>
				<text
					id="nationalities"
					transform="translate(1377.2 1202)"
					fill="#5e35b1"
					fontSize="24"
					fontFamily="Gilroy-ExtraBold, Gilroy"
					fontWeight="800"
				>
					<tspan x="0" y="0">
						nationalities
					</tspan>
				</text>
				<text
					id="offices"
					transform="translate(344.2 1586)"
					fill="#d6006d"
					fontSize="24"
					fontFamily="Gilroy-ExtraBold, Gilroy"
					fontWeight="800"
				>
					<tspan x="0" y="0">
						offices
					</tspan>
				</text>
				<text
					id="global_clients"
					dataname="global clients"
					transform="translate(1035 2007)"
					fill="#d6006d"
					fontSize="24"
					fontFamily="Gilroy-ExtraBold, Gilroy"
					fontWeight="800"
				>
					<tspan x="-150" y="0">
						global clients
					</tspan>
				</text>
				<text
					id="_22_"
					dataname="22+"
					transform="translate(1448.2 1147)"
					fill="#5e35b1"
					fontSize="120"
					fontFamily="Gilroy-ExtraBold, Gilroy"
					fontWeight="800"
				>
					<tspan x="-97" y="0">
						22+
					</tspan>
				</text>
				<text
					id="_10"
					dataname="10"
					transform="translate(318 1542)"
					fill="#d6006d"
					fontSize="120"
					fontFamily="Gilroy-ExtraBold, Gilroy"
					fontWeight="800"
				>
					<tspan x="0" y="0">
						10
					</tspan>
				</text>
				<text
					id="_350_"
					dataname="350+"
					transform="translate(1096 1952)"
					fill="#d6006d"
					fontSize="120"
					fontFamily="Gilroy-ExtraBold, Gilroy"
					fontWeight="800"
				>
					<tspan x="-273" y="0">
						350+
					</tspan>
				</text>
				<line
					id="Line_452"
					dataname="Line 452"
					y2="160"
					transform="translate(766 720)"
					fill="none"
					stroke="#5e35b1"
					strokeWidth="8"
          className="line"
				/>
				<line
					id="Line_545"
					dataname="Line 545"
					y2="64"
					transform="translate(1447.2 952)"
					fill="none"
					stroke="#5e35b1"
					strokeWidth="8"
          className="line"
				/>
				<line
					id="Line_550"
					dataname="Line 550"
					y2="162.5"
					transform="translate(1148.2 1744.5)"
					fill="none"
					stroke="#d6006d"
					strokeWidth="8"
          className="line"
				/>
				<line
					id="Line_549"
					dataname="Line 549"
					y2="64"
					transform="translate(379.2 1608)"
					fill="none"
					stroke="#d6006d"
					strokeWidth="8"
          className="line"
				/>
				<line
					id="Line_546"
					dataname="Line 546"
					y1="64"
					transform="translate(1447.2 1232)"
					fill="none"
					stroke="#5e35b1"
					strokeWidth="8"
          className="line"
				/>
				<line
					id="Line_543"
					dataname="Line 543"
					x1="611"
					transform="translate(801.7 916)"
					fill="none"
					stroke="#5e35b1"
					strokeWidth="8"
          className="line"
				/>
				<line
					id="Line_548"
					dataname="Line 548"
					x1="697"
					transform="translate(415.7 1708)"
					fill="none"
					stroke="#d6006d"
					strokeWidth="8"
          className="line"
				/>
				<line
					id="Line_544"
					dataname="Line 544"
					x1="996"
					transform="translate(415.7 1332)"
					fill="none"
					stroke="#5e35b1"
					strokeWidth="8"
          className="line"
				/>
				<g
					id="Ellipse_686"
					dataname="Ellipse 686"
					transform="translate(746 696)"
					fill="#5e35b1"
					stroke="#f6f3fa"
					strokeWidth="8"
          className="line"
				>
					<circle cx="20" cy="20" r="20" stroke="none" />
					<circle cx="20" cy="20" r="24" fill="none" />
				</g>
				<g
					id="Ellipse_778"
					dataname="Ellipse 778"
					transform="translate(1168.2 1888) rotate(90)"
					fill="#d6006d"
					stroke="#fae4ee"
					strokeWidth="8"
				>
					<circle cx="20" cy="20" r="20" stroke="none" />
					<circle cx="20" cy="20" r="24" fill="none" />
				</g>
				<g id="Arrow" transform="translate(728 680)">
					<path
						id="Path_7447"
						dataname="Path 7447"
						d="M2618-3201l6,6,6-6"
						transform="translate(-2586 3239)"
						fill="none"
						stroke="#fff"
						strokeWidth="3"
					/>
					<path
						id="Path_7448"
						dataname="Path 7448"
						d="M2626-3217v16"
						transform="translate(-2588 3245)"
						fill="none"
						stroke="#fff"
						strokeWidth="3"
					/>
				</g>
				<g
					id="Arrow-2"
					dataname="Arrow"
					transform="translate(1184.2 1870) rotate(90)"
				>
					<path
						id="Path_7447-2"
						dataname="Path 7447"
						d="M2618-3201l6,6,6-6"
						transform="translate(-2586 3239)"
						fill="none"
						stroke="#fff"
						strokeWidth="3"
					/>
					<path
						id="Path_7448-2"
						dataname="Path 7448"
						d="M2626-3217v16"
						transform="translate(-2588 3245)"
						fill="none"
						stroke="#fff"
						strokeWidth="3"
					/>
				</g>
				<g
					id="Mask_Group_4673"
					dataname="Mask Group 4673"
					transform="translate(801.557 879.813) rotate(90)"
					clipPath="url(#clip-path)"
				>
					<g
						id="Ellipse_691"
						dataname="Ellipse 691"
						transform="translate(-39.813 -39.443)"
						fill="none"
						stroke="#5e35b1"
						strokeWidth="8"
					>
						<ellipse cx="40" cy="39.5" rx="40" ry="39.5" stroke="none" className="ellipse1" />
						<ellipse cx="40" cy="39.5" rx="36" ry="35.5" fill="none" className="ellipse1" />
					</g>
				</g>
				<g
					id="Mask_Group_4677"
					dataname="Mask Group 4677"
					transform="translate(414.757 1671.813) rotate(90)"
					clipPath="url(#clip-path)"
				>
					<g
						id="Ellipse_776"
						dataname="Ellipse 776"
						transform="translate(-39.813 -39.443)"
						fill="none"
						stroke="#d6006d"
						strokeWidth="8"
					>
						<ellipse cx="40" cy="39.5" rx="40" ry="39.5" stroke="none" className="ellipse5" />
						<ellipse cx="40" cy="39.5" rx="36" ry="35.5" fill="none" className="ellipse5" />
					</g>
				</g>
				<g
					id="Mask_Group_4674"
					dataname="Mask Group 4674"
					transform="translate(1411.644 952.188) rotate(-90)"
					clipPath="url(#clip-path)"
				>
					<g
						id="Ellipse_771"
						dataname="Ellipse 771"
						transform="translate(-39.813 -39.443)"
						fill="none"
						stroke="#5e35b1"
						strokeWidth="8"
					>
						<ellipse cx="40" cy="39.5" rx="40" ry="39.5" stroke="none" className="ellipse2" />
						<ellipse cx="40" cy="39.5" rx="36" ry="35.5" fill="none" className="ellipse2" />
					</g>
				</g>
				<g
					id="Mask_Group_4678"
					dataname="Mask Group 4678"
					transform="translate(1112.644 1744.188) rotate(-90)"
					clipPath="url(#clip-path)"
				>
					<g
						id="Ellipse_777"
						dataname="Ellipse 777"
						transform="translate(-39.813 -39.443)"
						fill="none"
						stroke="#d6006d"
						strokeWidth="8"
					>
						<ellipse cx="40" cy="39.5" rx="40" ry="39.5" stroke="none" className="ellipse6" />
						<ellipse cx="40" cy="39.5" rx="36" ry="35.5" fill="none" className="ellipse6" />
					</g>
				</g>
				<g
					id="Mask_Group_4676"
					dataname="Mask Group 4676"
					transform="translate(376 1368) rotate(-90)"
					clipPath="url(#clip-path-5)"
				>
					<g
						id="Ellipse_775"
						dataname="Ellipse 775"
						transform="translate(-40)"
						fill="none"
						stroke="#5e35b1"
						strokeWidth="8"
					>
						<ellipse cx="40" cy="39.5" rx="40" ry="39.5" stroke="none" className="ellipse4" />
						<ellipse cx="40" cy="39.5" rx="36" ry="35.5" fill="none" className="ellipse4" />
					</g>
				</g>
				<g
					id="Mask_Group_4675"
					dataname="Mask Group 4675"
					transform="translate(1451.2 1296) rotate(90)"
					clipPath="url(#clip-path-5)"
				>
					<g
						id="Ellipse_774"
						dataname="Ellipse 774"
						transform="translate(-40)"
						fill="none"
						stroke="#5e35b1"
						strokeWidth="8"
					>
						<ellipse cx="40" cy="39.5" rx="40" ry="39.5" stroke="none" className="ellipse3" />
						<ellipse cx="40" cy="39.5" rx="36" ry="35.5" fill="none" className="ellipse3" />
					</g>
				</g>
				<g
					id="Group_5076"
					dataname="Group 5076"
					transform="translate(854.2 1321.311)"
				>
					<g
						id="Rectangle_1527"
						dataname="Rectangle 1527"
						transform="translate(-8 -13.311)"
						fill="#5e35b1"
						stroke="#f3e5f1"
						strokeWidth="8"
					>
						<rect width="134" height="48" rx="24" stroke="none" />
						<rect x="-4" y="-4" width="142" height="56" rx="28" fill="none" />
					</g>
					<text
						id="populating"
						transform="translate(59 17.689)"
						fill="#fff"
						fontSize="20"
						fontFamily="Gilroy-ExtraBold, Gilroy"
						fontWeight="800"
					>
						<tspan x="-51" y="0">
							populating
						</tspan>
					</text>
				</g>
				<g
					id="Group_6146"
					dataname="Group 6146"
					transform="translate(705.2 1697.311)"
				>
					<g
						id="Rectangle_1527-2"
						dataname="Rectangle 1527"
						transform="translate(-4 -13.311)"
						fill="#d6006d"
						stroke="#fae4ee"
						strokeWidth="8"
					>
						<rect width="126" height="48" rx="24" stroke="none" />
						<rect x="-4" y="-4" width="134" height="56" rx="28" fill="none" />
					</g>
					<text
						id="trusted_by"
						dataname="trusted by"
						transform="translate(59 17.689)"
						fill="#fff"
						fontSize="20"
						fontFamily="Gilroy-ExtraBold, Gilroy"
						fontWeight="800"
					>
						<tspan x="-47" y="0">
							trusted by
						</tspan>
					</text>
				</g>
				<g
					id="Group_6145"
					dataname="Group 6145"
					transform="translate(1048.2 905.311)"
				>
					<g
						id="Rectangle_1527-3"
						dataname="Rectangle 1527"
						transform="translate(-10 -13.311)"
						fill="#5e35b1"
						stroke="#ede7f6"
						strokeWidth="8"
					>
						<rect width="138" height="48" rx="24" stroke="none" />
						<rect x="-4" y="-4" width="146" height="56" rx="28" fill="none" />
					</g>
					<text
						id="currently_of"
						dataname="currently of"
						transform="translate(59 17.689)"
						fill="#fff"
						fontSize="20"
						fontFamily="Gilroy-ExtraBold, Gilroy"
						fontWeight="800"
					>
						<tspan x="-53" y="0">
							currently of
						</tspan>
					</text>
				</g>
				<g id="planet" transform="translate(1222.009 1046.746)">
					<rect
						id="Rectangle_2562"
						dataname="Rectangle 2562"
						width="120"
						height="120"
						transform="translate(0.192 -0.746)"
						fill="none"
					/>
					<g id="Planet_icon" dataname="Planet icon">
						<path
							id="Path_13176"
							dataname="Path 13176"
							d="M53.136,99.86c-26.7,0-48.346-21.284-48.346-47.54S26.435,4.78,53.136,4.78s48.346,21.284,48.346,47.54c-.027,26.245-21.656,47.513-48.346,47.54Zm0-87.82c-22.64,0-40.992,18.05-40.987,40.312s18.356,40.3,41,40.3S94.137,74.582,94.123,52.32C94.082,30.081,75.752,12.067,53.136,12.04Z"
							transform="translate(6.961 6.742)"
							fill="#b39ddb"
						/>
						<path
							id="Path_13177"
							dataname="Path 13177"
							d="M54.346,19.206l-3.925,1.785a2.341,2.341,0,0,1-1.619.145l-8.56-2.1a2.464,2.464,0,0,1-1.128-.627L35.8,15.154a2.473,2.473,0,0,0-1.742-.724H28.468a2.477,2.477,0,0,0-1.619.6l-2.943,2.581a2.393,2.393,0,0,0-.834,1.93l.392,8.321a2.41,2.41,0,0,0,1.349,2.05l8.806,4.317a2.491,2.491,0,0,0,1.938.121l3.336-1.182a2.488,2.488,0,0,1,2.257.289l2.919,2a2.4,2.4,0,0,1,1.055,1.978v3.184a2.615,2.615,0,0,0,.2.965l4.17,9.648a2.381,2.381,0,0,1,.2.7l.76,7.236a2.428,2.428,0,0,0,1.962,2.1l1.03.217a34.351,34.351,0,0,0,2.453-42.378A2.492,2.492,0,0,0,54.346,19.206Z"
							transform="translate(33.518 20.368)"
							fill="#5e35b1"
						/>
						<path
							id="Path_13178"
							dataname="Path 13178"
							d="M45.661,49.186c-2.453-1.11-5.593-2.412-5.813-2.412-.809,0-1.962,1.688-2.649.6a2.035,2.035,0,0,1,.392-1.568,2.915,2.915,0,0,0-1.1-3.618c-2.183-1.4-7.9-1.688-9.811-2.412a3.863,3.863,0,0,0-4.906,1.375,10.154,10.154,0,0,0-.736,1.3l-2.5-.844-.883-1.5a3.565,3.565,0,0,1-.27-3.039l.834-2.219A2.84,2.84,0,0,1,21.133,33.6l1.889.314a4.143,4.143,0,0,0,3.508-1.013l7.211-6.657V23.836L36,21.786l2.453.338,1.5-2.677-4.709-2.412L30.184,20.17l-.589-2.75,4.489-2.894,3.238.724,2.453-1.423L37.592,10.45a39.673,39.673,0,0,0-12.632,4.51A35.132,35.132,0,0,0,10.88,32.351l.834,2a4.419,4.419,0,0,1,.343,2.026l-.221,4.679a2.859,2.859,0,0,0,1.447,2.6l6.255,3.618c-.123.386-.245.772-.392,1.134a4.4,4.4,0,0,0,.343,4.124s6.083,7.549,7.359,8.78c1.643,1.64,1.889,10.106,2.453,12.3A7.67,7.67,0,0,0,30.4,76.3a4.1,4.1,0,0,0,2.845.844,3.228,3.228,0,0,0,1.619-.892c.368-.458,5.225-6.464,5.74-7.236s4.611-9.527,7.015-14.665a3.753,3.753,0,0,0,.141-2.993A3.839,3.839,0,0,0,45.661,49.186Z"
							transform="translate(15.809 14.748)"
							fill="#5e35b1"
						/>
						<path
							id="Path_13179"
							dataname="Path 13179"
							d="M31.448,12.118l-3.409-.555a1.113,1.113,0,0,0-1.055.41l-1.423,1.785a1.1,1.1,0,0,0-.225.848,1.107,1.107,0,0,0,.471.744l2.257,1.568a1.094,1.094,0,0,0,.908.169l3.949-.892a1.3,1.3,0,0,1,.613,0L40.5,18.486a1.246,1.246,0,0,0,.834,0l2.821-1.3a1.106,1.106,0,0,0,.613-1.085,34.942,34.942,0,0,0-9.811-5.258L32.11,12.046A1.42,1.42,0,0,1,31.448,12.118Z"
							transform="translate(36.793 15.299)"
							fill="#5e35b1"
						/>
					</g>
				</g>
				<g
					id="Offices_"
					dataname="Offices
"
					transform="translate(442.22 1440.96)"
				>
					<rect
						id="Rectangle_2563"
						dataname="Rectangle 2563"
						width="120"
						height="120"
						transform="translate(-0.02 0.04)"
						fill="none"
					/>
					<g id="Office_icon" dataname="Office icon">
						<path
							id="Path_13180"
							dataname="Path 13180"
							d="M11.914,24.48H22.386a1.868,1.868,0,0,1,1.844,1.844V66.1H10.07V26.324A1.868,1.868,0,0,1,11.914,24.48Z"
							transform="translate(14.714 35.64)"
							fill="#ef8ebb"
						/>
						<path
							id="Path_13181"
							dataname="Path 13181"
							d="M35.021,24.39H45.1a1.844,1.844,0,0,1,1.844,1.844v40H33.3v-40a1.844,1.844,0,0,1,1.721-1.844Z"
							transform="translate(48.59 35.509)"
							fill="#ef8ebb"
						/>
						<path
							id="Path_13182"
							dataname="Path 13182"
							d="M48.272,14.936H42V9.43a1.77,1.77,0,0,0-1.77-1.77H27.746a1.77,1.77,0,0,0-1.77,1.77v5.507h-6.17a1.745,1.745,0,0,0-1.745,1.77v73.92H50.018V16.706a1.77,1.77,0,0,0-1.746-1.77ZM30.2,60.66H24.845V53.285H30.2Zm0-14.184H24.845V39.1H30.2Zm0-14.184H24.845V24.917H30.2ZM43.233,60.66H37.775V53.285h5.457Zm0-14.184H37.775V39.1h5.457Zm0-14.184H37.775V24.917h5.457Z"
							transform="translate(26.365 11.112)"
							fill="#d6006d"
						/>
					</g>
				</g>
				<rect
					id="Rectangle_2565"
					dataname="Rectangle 2565"
					width="8"
					height="64"
					transform="translate(376 1368)"
					fill="url(#linear-gradient)"
				/>
				<g
					id="Artboard_222_copy_2"
					dataname="Artboard 222 copy 2"
					transform="translate(1102.01 655.99)"
				>
					<g id="Data_people" dataname="Data people">
						<path
							id="Path_13189"
							dataname="Path 13189"
							d="M61.764,26.64a29.388,29.388,0,0,1-30.122,0A24.171,24.171,0,0,0,9.16,50.713v4.065a9.453,9.453,0,0,0,9.4,9.478H74.891A9.453,9.453,0,0,0,84.344,54.8v-4.09A24.171,24.171,0,0,0,61.764,26.64Z"
							transform="translate(13.287 38.586)"
							fill="#5e35b1"
						/>
						<path
							id="Path_13190"
							dataname="Path 13190"
							d="M29.7,49.228,36.41,31.84l7.249,17.388L36.41,42.15Z"
							transform="translate(43.049 46.121)"
							fill="#fff"
						/>
						<path
							id="Path_13191"
							dataname="Path 13191"
							d="M45.849,20.8a15.5,15.5,0,0,1-21.649,0H17a21.184,21.184,0,0,0,36.147,0Z"
							transform="translate(24.647 30.124)"
							fill="#5e35b1"
						/>
						<path
							id="Path_13192"
							dataname="Path 13192"
							d="M59.137,29.5H21.349a7.984,7.984,0,0,1-7.959-7.984V20.294a7.984,7.984,0,0,1,7.959-7.984H59.137a7.984,7.984,0,0,1,7.984,7.984v1.224A7.984,7.984,0,0,1,59.137,29.5ZM21.349,18.041a2.253,2.253,0,0,0-2.229,2.253v1.224a2.253,2.253,0,0,0,2.229,2.253H59.137a2.253,2.253,0,0,0,2.253-2.253V20.294a2.253,2.253,0,0,0-2.253-2.253Z"
							transform="translate(19.416 17.822)"
							fill="#b39ddb"
						/>
						<path
							id="Path_13193"
							dataname="Path 13193"
							d="M17.524,19.955H55.312a10.286,10.286,0,0,1,1.518.147,22.457,22.457,0,0,0-40.8,0,9.967,9.967,0,0,1,1.494-.147Z"
							transform="translate(23.241 10.178)"
							fill="#5e35b1"
						/>
					</g>
					<rect
						id="Rectangle_2581"
						dataname="Rectangle 2581"
						width="120"
						height="120"
						transform="translate(-0.01 0.01)"
						fill="none"
					/>
				</g>
				<g
					id="engineer_"
					dataname="engineer
"
					transform="translate(685.99 1851.01)"
				>
					<g id="Rocket_icon" dataname="Rocket icon">
						<path
							id="Exclusion_2"
							dataname="Exclusion 2"
							d="M-2767.283-15745h0l-7.347-7.348,3.062-3.011-21.015-21.284-3.058,3.015-7.348-7.349,11.9-11.558a4.917,4.917,0,0,1,3.539-1.514,4.93,4.93,0,0,1,3.539,1.514l2.447,2.446,18.783-18.413a61.57,61.57,0,0,1,17.684-12.134,61.556,61.556,0,0,1,20.767-5.354h.365a2.163,2.163,0,0,1,.276-.018,2.179,2.179,0,0,1,1.5.6,2.176,2.176,0,0,1,.671,1.744,61.747,61.747,0,0,1-18.318,39.182l-18.294,17.953,2.792,2.645a4.927,4.927,0,0,1,1.509,3.539,4.927,4.927,0,0,1-1.509,3.539l-11.95,11.8Zm3.551-47.292a7.283,7.283,0,0,0-7.272,7.276,7.281,7.281,0,0,0,7.272,7.272,7.281,7.281,0,0,0,7.272-7.272A7.283,7.283,0,0,0-2763.732-15792.3Zm17.655-16.626a7.281,7.281,0,0,0-7.272,7.272,7.283,7.283,0,0,0,7.272,7.276,7.285,7.285,0,0,0,7.276-7.276A7.283,7.283,0,0,0-2746.078-15808.922Z"
							transform="translate(2823.449 15844.227)"
							fill="#d6106d"
						/>
						<path
							id="Path_13195"
							dataname="Path 13195"
							d="M18.959,32.244h0a13.469,13.469,0,0,1,11.216,10.7h0a7.518,7.518,0,0,1-5.853,8.816L7.4,55.215,11.049,37.73a7.053,7.053,0,0,1,7.91-5.486Z"
							transform="translate(10.708 46.628)"
							fill="#ef8ebb"
						/>
					</g>
					<rect
						id="Rectangle_2582"
						dataname="Rectangle 2582"
						width="120"
						height="120"
						transform="translate(0.01 -0.01)"
						fill="none"
					/>
				</g>
			</g>
		</svg>
	);
}

export default SVGtoAnimate;
