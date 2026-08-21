
import { Buttonprops } from "@/types/Formulario";
import styled, { Theme } from "styled-components";
import Rem from "@/utils/pxToRem";



export const StyledButton = styled.button<Buttonprops & { theme?: Theme }>`
border-radius:${Rem(8)};
border:none;

margin-bottom:${Rem(10)};
font-size:${Rem(16)};
 font-weight: bold;
box-size:border-box;
height:${Rem(50)};
padding:0 ${Rem(16)};
tansition:background-color 0.3s;;
width:100%;



&.primary{
 background-color: ${(props) => props.theme.buttons.primary};
    color: ${(props) => props.theme.buttons.primaryColor};
    cursor:pointer;

&:hover{
background-color:${(props) => props.theme.buttons.primaryHover};

}
}
&.alert{
color:${(props) => props.theme.buttons.alertColor};
background-color:${(props) => props.theme.buttons.alert};
cursor:pointer;
&:hover{
background-color:${(props) => props.theme.buttons.alertHover};
}
}

&.disabled{
    color:${(props) => props.theme.buttons.disabledColor};
    background-color:${(props) => props.theme.buttons.disabled};
}
`