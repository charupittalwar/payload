export const initialuserstate :any = {

    username : " ",

    age :0 ,

    cmp:" " ,

}

const reducerfun = (state :any ,action :any) =>{

    switch (action.type) {
   
        case "setusername" :

        console.log ("action " , action)

        return {
            ...state,
            username :action.payload.newname ,

        };

        case "setuserage" :

        console.log("action " ,action);

        return {
             ...state, 

             age:action.payload.newage ,

        }

        case "setusercmp" :

        console.log ("action " ,action)

        return {
        ...state,

        cmp :action.payload.newcmp,

        };
  
         default :

         return state;

    }


}