body{
font-family:Arial;
margin:0;
background:#f4f4f4;
}

/* Login */

.login{
width:300px;
margin:150px auto;
background:white;
padding:30px;
border-radius:10px;
text-align:center;
}

.login input{
display:block;
width:100%;
margin:10px 0;
padding:10px;
}

.login button{
padding:10px;
width:100%;
background:#2ecc71;
color:white;
border:none;
cursor:pointer;
}

/* Interface */

.container{
display:flex;
height:100vh;
}

.sidebar{
width:220px;
background:#1f2a30;
color:white;
padding:20px;
}

.sidebar ul{
list-style:none;
padding:0;
}

.sidebar li{
padding:10px 0;
}

.main{
flex:1;
padding:20px;
}

.header{
display:flex;
justify-content:space-between;
margin-bottom:20px;
}

.account-card{
background:linear-gradient(90deg,#32c06c,#6ddf8c);
padding:20px;
border-radius:10px;
color:white;
margin-bottom:20px;
}

.operations{
background:white;
padding:20px;
border-radius:10px;
}

.op{
display:flex;
justify-content:space-between;
padding:10px 0;
border-bottom:1px solid #eee;
}

.plus{
color:green;
}

/* Compte bloqué */

.blocked{
background:red;
color:white;
font-weight:bold;
padding:15px;
text-align:center;
margin-bottom:20px;
border-radius:6px;
font-size:20px;
}
