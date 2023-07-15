*,
*:before,
*:after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto Mono", monospace;
    font-size: 18px;
}
body{
    background-color: red;
}
.wrapper{
    width: 450px;
    background-color: #ffffff;
    padding: 70px 40px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    box-shadow: 0 20px 25px rgba(0,0,0,0.25);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
}
.container{
    width: 45%;
}
input{
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: 2px solid #d2d2d2;
    outline: none;
    margin-top: 8px;
    padding: 0 10px;
}
input:focus{
    border-color: #3164ff;
}
