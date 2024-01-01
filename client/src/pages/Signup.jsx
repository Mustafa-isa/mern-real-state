import { useState } from "react";
import Input from "../components/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function SignIn() {
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
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

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submit");
    try {
      let response = await axios.post(
        "http://localhost:3000/api/auth/register",
        formData
      );
      console.log(response); 
      if(response.data.success ==false){
        toast.error("User Already Found", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }else{
navigate('/sign-in')
      }
    } catch (e) {
      console.log(e.message)
      toast.error(e.message, {
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
  };

  return (
    <div className="w-5/5 mx-auto sm:w-2/4 p-10">
      <h2 className="text-center font-semibold mb-3 text-2xl text-slate-800">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit} className="mt-10">
        <Input
          type="text"
          id="username"
          handlechange={handleChanges}
          value={formData.username}
          place="UserName"
        />
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
          Sign Up
        </button>
      </form>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
          <div className="m-3 flex items-center gap-2">
        <span>Do You Have  Accoun 
        </span>
        <Link className=" text-blue-900 hover:underline" to="/sign-in">Sign In</Link>

      </div>
    </div>
  );
}

export default SignIn;
