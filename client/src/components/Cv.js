import React from 'react'
import { Document } from 'react-pdf'
import {Page} from 'react-pdf'

export default function Cv() {
  return (
    <div>
        heey
        {/* <Document file="../assets/cv/Verah_Nyagaka_Resume-6.pdf" /> */}
        <Document file="https://docs.google.com/document/d/1Efrkzw4KeA65jarpnVi4EGPpl1W-fOjaBjDPnw016sU/edit?usp=sharing.pdf">
  <Page pageNumber={1} />
</Document>
    </div>
  )
}
