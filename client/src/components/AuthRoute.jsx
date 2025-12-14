import React from 'react'
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

// @ts-ignore
const AuthRoute = ({ children }) => {

  return (
   <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}

export default AuthRoute