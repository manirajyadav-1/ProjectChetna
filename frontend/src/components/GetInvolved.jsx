import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Footer from "./Footer/Footer";
import bc_bground from "../assets/bc_bground.png";
import { useEffect, useState } from "react";

const GetInvolved = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(true); 

  useEffect(() => {
    axios.get("http://localhost:8080/user-info", { withCredentials: true })
      .then((response) => {
        if (response.data) {
          setUser(response.data);
          setShowModal(false); 
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const googleSignin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };
  
  const githubSignin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/github";
  };

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bc_bground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
        }}
      >
        <Navbar />
        <h1 className="text-center text-white mt-20 text-5xl font-title font-medium">
        Get Involved
        </h1>
      </div>
    <div className="text-black p-4 bg-gray-100">
      {user ? (
        <div>
          <h2 className="text-xl font-semibold">User Details</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <img src={user.picture} alt="User Img"/>
        </div>
      ) : (
        <>
          {showModal && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h2 className="text-2xl font-bold mb-4">OAuth2 Sign In</h2>
                <p className="mb-4">Please sign in to view your credentials.</p>
                <button 
                  onClick={googleSignin}
                  className="w-full mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Sign in with Google
                </button>
                <button 
                  onClick={githubSignin}
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
                >
                  Sign in with GitHub
                </button>
              </div>
            </div>
          )}
          <div className="text-center text-gray-600">No user data available.</div>
        </>
      )}
    </div>
    <Footer />
    </>
  );
};

export default GetInvolved;
