import styled, { css } from 'styled-components';
import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import { Colors } from 'components/theme';

const typeButton = (type) => {
    switch (type) {
        case 'blue':
            return {
                bgColor: '/static/images/elements/btn-blue-border.svg',
                bgColorAfter: '/static/images/elements/btn-blue-bg.svg'
            };
        case 'yellow':
            return {
                bgColor: '/static/images/elements/btn-yellow-border.svg',
                bgColorAfter: '/static/images/elements/btn-yellow-bg.svg'
            };
        case 'purple':
            return {
                bgColor: '/static/images/elements/btn-purple-border.svg',
                bgColorAfter: '/static/images/elements/btn-purple-bg.svg'
            };
        case 'dark':
            return {
                bgColor: '/static/images/elements/btn-dark-border.svg',
                bgColorAfter: '/static/images/elements/btn-bg.svg'
            };
        default:
            return {
                bgColor: '/static/images/elements/btn-border.svg',
                bgColorAfter: '/static/images/elements/btn-bg.svg'
            };
    }
}

export const Button = styled.button`
    ${({
        color,
        type
    }) => css`
        color: ${color};
        background: url(${typeButton(type).bgColor}) no-repeat;

        &::before {
            background: url(${typeButton(type).bgColorAfter}) no-repeat;
        }

        span {
            &::after {
                border-color: ${color} !important;
            }
        }

        &:hover {
            > span::after {
                border-color: ${type === 'dark' ? Colors.greenishTeal : color} !important;
            }
        }

    `};
    display: inline-block;
    position: relative;
    border: none;
    min-width: 236px;
    height: 64px;
    line-height: 64px;
    font-size: 20px;
    border: none;

    &::before {
        position: absolute;
        content: '';
        transition: all 0.2s linear 0s;
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
    }

    &:hover {
        color: ${Colors.white} !important;
        &::before {
            width: 100%;
        }

        > span::after {
            bottom: -20px;
        }
    }

    span {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;

        &:after {
            position: absolute;
            content: '';
            border-bottom: transparent solid 2px;
            transition: all 0.2s linear 0s;
            z-index: 1;
            left: 10px;
            right: 10px;
            bottom: -10px;
        }
    }

    // Responsive
    @media (min-width: ${breakpoint.lg}) {
        /* padding: ${px2vw(18)} ${px2vw(43)}; */
        font-size:  ${px2vw(20)};
    }
`;


export default Button;