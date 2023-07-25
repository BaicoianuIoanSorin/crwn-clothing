// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
//   auth,
  signInWithGooglePopup,
//   signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUp from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {
//   const getRedirectResultAsync = async () => {
//     const response = await getRedirectResult(auth);
//     if(response) {
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
//   }

//   useEffect(() => getRedirectResultAsync, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}> Sign In Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In Google Redirect
      </button> */}
      <SignUp></SignUp>
    </div>
  );
};

export default SignIn;
