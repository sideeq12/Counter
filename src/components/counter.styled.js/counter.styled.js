import styled from "styled-components"


export const Counter = styled.div`

header {
    background : #5CA4A9;
    height : 10vh;
    color : white;
    display : flex;
    justify-content : center;
    align-items : center;
    margin-bottom : 10px
}

textarea {
    height : 70vh;
    width : 80vw;
    border-radius : 10px;
    padding : 10px;
    border : 2px solid rgba(0, 0, 0, 0.503);
}
 footer{
    height : 15vh;
    background : #404E4D;
    color : rgba(255, 255, 255, 0.753);
    display : flex;
    justify-content : center;
    align-items : center;
 }
 footer span{
     margin-right : 20px;
 }
 footer span b{
     color : orange;
     font-size : 1.5rem
 }
`