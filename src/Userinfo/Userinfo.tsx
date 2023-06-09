import { useReducer } from 'react';
import styless from './Userinfo.module.scss'
  
import  reducerfun, { initialuserstate } from '../store.Reducerfun'


const Userinfo = () => {

    const [state , dispatch ] = useReducer (reducerfun ,initialuserstate);

    const submitdata = ()=>{

       console.log ("state" ,state);

    };

const userDispatchfun = (newname:any) =>{

    dispatch ({type :"setusername" , payload :{newname}});

};

const ageDispatchfun = (newage :any) =>{

    dispatch ({type: "setuserage" , payload: {newage}})
};

const cmpDispatchfun = (newcmp :any) => {

if (state.username ===newcmp) {

alert("company name cant be same as username");
return;

}
dispatch ({type:"setusercmp" ,payload:{newcmp}});
};
return (

 <div className={styless ['userwrap']}>

user info
<div className={styless ['form-control']}>

    <label htmlFor='username'>name:</label>
<input type = "text" name = "username " placeholder = "Enter the name" ></input></div>

<div className={styless ['form-control']}>
    <label htmlFor='age'>age</label>
<input type = "number" name = "age" placeholder='enter the age'></input> </div>
<div className={styless ['form-control']}>
    <label htmlFor='cmp'>cmp</label>
<input type ="text" name ="cmp" placeholder = "enter the cmp"></input></div>

<button type = "button">submit</button>

 </div>


)




}

export default Userinfo;