<template>
  <div>
 
   <router-view/>
   

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
.form-row{
  display:flex;
  align-items: center;
  width:auto;
  justify-content: space-around;
  
}
.form-label{
font-size: 20px;
text-transform: uppercase;
width:10rem;
font-family: inter;
}
.form-input{
height: 31px;
width:225px;
}
.login-btn{
  margin-top:1rem;
  width:227px;
  height:41px;
  background-color: #00D1FF;
  color:white;
  border:none;
}
.btn-wrapper{
display:flex;
justify-content: space-around;
width:auto;
}
.login-box{
  background-color: red;
  width:509px;
  background: rgba(255, 255, 255, 0.68);
  box-shadow: 4px 4px 41px 1px rgba(0, 0, 0, 0.25);
  padding: 4rem;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
</style>
