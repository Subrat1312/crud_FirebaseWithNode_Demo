
import { getDatabase,ref, set,get,child,remove} from "firebase/database";


//adding data to database with user defined user-id
 const addData = async (req, res) => {
    const { userId,name,age,email} = req.body;
    
    try {
        const db = getDatabase();
        set(ref(db, 'usersNew/' + userId), {
            username: name,
            age:age,
            email: email,
           
          });
    } catch (err) {
      console.log(err);
    }
    return res.status(201).send('added successfully');
  };

// getting all data present in collection
   const getData= async (req, res) => {
    
    try{
      const dbRef = ref(getDatabase());
      get(child(dbRef, `usersNew/`)).then((snapshot) => {
            if (snapshot.exists()) {
              return res.status(200).send(snapshot.val());
             
            } else {
              console.log("No data available");
            }
    })}
    catch(err){
      console.log(err)
    }
   
   
  };

  // delete data based upon user provided id

  const deleteData= async (req, res) => {
    const userId= req.params.id;
    console.log(userId)
    
    try{
     remove(ref(getDatabase(), `usersNew/${userId}/`))
        
    }
    catch(err){
      console.log(err)
    }
   
    return  res.status(200).send("delete successfully")
  
  }

// update to database based upon userId

  const updateData = async (req, res) => {
    const userId=req.params.id;
    const {name,age,email} = req.body;
    
    try {
        const db = getDatabase();
        set(ref(db, 'usersNew/' + `${userId}`), {
            username: name,
            age:age,
            email: email,
           
          });
    } catch (err) {
      console.log(err);
    }
    return res.status(201).send('added successfully');
  };

export {addData,getData,deleteData,updateData}

