import React from 'react'
import { Navbar } from '../components/Navbar'
import { SubjectWiseNotesMainPage } from '../components/SubjectWiseNotesMainPage'
import { Footer } from '../components/Footer'

export const SubjectWiseNotes = () => {
  return (
    <>
                        <Navbar /> 
            <SubjectWiseNotesMainPage />
            <Footer />
    </>
  )
}
