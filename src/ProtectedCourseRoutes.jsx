import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

const ProtectedCourseRoute = ({ element: Component, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const { id } = useParams();
  const [hasBoughtCourse, setHasBoughtCourse] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      const checkCoursePurchase = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/api/checkCoursePurchase/${id}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('prasthan_yatna_jwt')}`
            }
          });
          setHasBoughtCourse(response.data.hasBought);
        } catch (error) {
          console.error('Error checking course purchase:', error);
          setHasBoughtCourse(false); // in case of error, assume the user hasn't bought the course
        }
      };
      checkCoursePurchase();
    }
  }, [isLoggedIn, id]);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (hasBoughtCourse === null) {
    return <div>Loading...</div>; // Show a loading state while checking
  }

  return hasBoughtCourse ? <Component {...rest} /> : <Navigate to={`/discourses/${id}`} />;
};

export default ProtectedCourseRoute;
