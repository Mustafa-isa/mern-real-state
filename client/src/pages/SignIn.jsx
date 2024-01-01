import { useEffect ,useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../components/Input"; 
import axios from 'axios'  
import { signInStart ,signInSuccess ,signInFail } from "../redux/user/UserSlice"; 
import { useDispatch ,useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function SignIn() {  
  const {load, error } = useSelector((state) => state.user)
  const dispatch =useDispatch()
  // let navigate  = useNavigate()
  // useEffect(() => {
  //   toast.success( <h3> Welcome <span className=" font-serif">Back</span> <span className=" font-semibold text-indigo-600 font-mono text-lg">Mustafa</span></h3>, {
  //     position: "top-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "colored",
  //   }); 
  //   console.log('=========================')
  // }, []); 
  // handle input changes 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // handle inputs changes
  const handleChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }; 
  // jandle form submit
  const handleSubmit = async (e) =>{

    e.preventDefault() 
      try { 
        dispatch(signInStart())
      let response = await axios.post(
        "http://localhost:3000/api/auth/login",
        formData
      );
    console.log(response) 
    if(response.statusText== "OK"){
      dispatch(signInSuccess(response.data.user))
      console.log(response.data)

    }
    } catch (e) { 
      dispatch(signInFail("User Not Found"))
      toast.error("User Not Register", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  return (
    <>
    <div className="w-5/5 mx-auto sm:w-2/4 p-10">
      <h2 className="text-center font-semibold mb-3 text-2xl text-slate-800">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit} className="mt-10">
        <Input
          type="email"
          id="email"
          handlechange={handleChanges}
          value={formData.email}
          place="Email"
        />
        <Input
          type="password"
          id="password"
          handlechange={handleChanges}
          value={formData.password}
          place="Password"
        />

        <button className="w-full p-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 focus:scale-95 transition-all">
        { load ? "Loading ...":  "Sign Up"}
        </button>
      </form>
      
      <div className="m-3 flex items-center gap-2">
        <span>Do You Have No Accoun 
        </span>
        <Link className=" text-blue-900 hover:underline" to="/sign-up">Sign Up</Link>

      </div>
    </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default SignIn;
