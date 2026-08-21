import styled, { Theme } from "styled-components"

import Rem from "@/utils/pxToRem"

export const StyledH1 = styled.h1<{ theme?: Theme }>`
    color: ${({ theme }) => theme.appColor};
    font-size: ${Rem(64)};
    font-weight: 600;
    line-height: ${Rem(72)};
    letter-spacing: ${Rem(-1)};
`

export const StyledH2 = styled.h2<{ theme?: Theme }>`
    color: ${({ theme }) => theme.appColor};
    font-size: ${Rem(32)};
    font-weight: 600;
    line-height: ${Rem(40)};
    letter-spacing: ${Rem(-1)};
`

export const StyledH3 = styled.h3<{ theme?: Theme }>`
    color: ${({ theme }) => theme.appColor};
    font-size: ${Rem(20)};
    font-weight: 600;
    line-height: ${Rem(28)};
    letter-spacing: ${Rem(-0.5)};
`

export const StyledSpan = styled.span<{ theme?: Theme }>`
    color: ${({ theme }) => theme.appColor};
    font-size: ${Rem(16)};
    font-weight: 600;
    line-height: ${Rem(24)};
    letter-spacing: 0;
`

export const StyledNavText = styled.span<{ theme?: Theme }>`
    color: ${({ theme }) => theme.appColor};

    font-size: ${Rem(16)};
    font-weight: 600;
    line-height: ${Rem(24)};

    text-decoration: none;

    transition:
        color 0.2s ease,
        transform 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.buttons.primaryHover};
    }
`