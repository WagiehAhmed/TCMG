import { keyframes } from "@mui/system";

export const backgroundAnimation = keyframes`
    0%{
        background:url("../images/background/1.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
    20%{
        background:url("../images/background/2.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
    40%{
        background:url("../images/background/3.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
    60%{
        background:url("../images/background/4.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
    80%{
        background:url("../images/background/5.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
    100%{
        background:url("../images/background/6.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
`;

export const backgroundAnimationController = keyframes`
    0%{
       .second-section:before{
        animation: "backgroundAnimation 4s linear 1";
       }
    }
    100%{
        .second-section:before{
        animation: "x 4s linear 1";
        }
    }
`;
