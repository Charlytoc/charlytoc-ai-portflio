'use client'
import CursorWrapper from "@/app/components/cursorWrapper"
import { type } from "os";
import React, { ChangeEvent } from 'react';
import { useState } from "react"

export default function LearningPage() {
    const [email, setEmail] = useState('');
    const handleEmailChange = (e: any) => {
        console.log(e.target.value);
    }
    const handlePasswordChange = (e: any) => {
        console.log(e.target.value);
    }
  const fields = [
    {
      name: 'email',
      type: 'email',
      element: 'input',
      setter: handleEmailChange,
      placeholder: 'Email',
    },
    {
      name: 'password',
      type: 'password',
      element: 'input',
      setter: handlePasswordChange,
      placeholder: 'Password',
    },
  ]

  return (
    <>
      <CursorWrapper>
        <FormComponent fields={fields} />
      </CursorWrapper>
    </>
  )
}

type FormInput = {
    name: string
    type: string
    setter: any,
    element: string
    placeholder: string
}

interface FormProps {
  fields: Array<FormInput>
}

const FormComponent = ({ fields }: FormProps) => {

    const elements = {
        'input': (type: string, key: number, setter: any, placeholder: string) => (
            <input 
                placeholder={placeholder} 
                key={key} 
                onChange={setter} 
                type={type}  
            />
        ),
        'textarea': (type: string, key: number, setter:any, placeholder: string) => (
            <textarea 
                placeholder={placeholder} 
                key={key} 
                onChange={setter} 
            
            />
        ),
        // Add more element types as necessary
    }

  return (
    <>
      <form>
    {fields.map((field: FormInput, index: number) => 
            elements['input'](
                field.type,
                index,
                field.setter,
                field.placeholder,
            )
        )}
      </form>
    </>
  )
}
