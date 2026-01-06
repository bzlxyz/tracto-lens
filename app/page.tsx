"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { LandingView } from "@/components/landing-view"
import { WorkbenchView } from "@/components/workbench-view"

export default function Home() {
  const [isAnalyzed, setIsAnalyzed] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {isAnalyzed ? (
        <WorkbenchView onBack={() => setIsAnalyzed(false)} />
      ) : (
        <LandingView onAnalyze={() => setIsAnalyzed(true)} />
      )}
    </div>
  )
}
