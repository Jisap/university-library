"use client"

import React from 'react'
import AuthForm from '@/components/AuthForm'
import { signUpSchema } from '@/lib/validations'

const signup = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        email: "",
        password: "",
        fullName: "",
        universityId: 0,
        universityCard:"",
      }}
      onSubmit={() => { }}
    >
      signIn
    </AuthForm>
  )
}

export default signup