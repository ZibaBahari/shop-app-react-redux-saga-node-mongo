
export const auth=()=>{
    try{
      const storedData  = JSON.parse(localStorage.getItem('userData') || '{}');
     if (storedData && storedData.token) {
        return storedData;

      }else{
          return null
      }

    }catch(e){
        return e;

    }
}

