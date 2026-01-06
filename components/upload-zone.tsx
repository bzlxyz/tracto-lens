"use client"

import { useState } from "react"
import { UploadCloud, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface UploadZoneProps {
  onAnalyze: () => void
}

export function UploadZone({ onAnalyze }: UploadZoneProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleUpload = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    onAnalyze()
  }

  return (
    <div className="rounded-lg border-2 border-dashed border-emerald-900/20 bg-white p-12 text-center">
      <UploadCloud className="mx-auto mb-4 h-12 w-12 text-emerald-900/60" />
      <h2 className="mb-2 text-lg font-semibold text-slate-900">Upload Invoice</h2>
      <p className="mb-6 text-sm text-slate-500">Drag and drop your tractor loan invoice here, or click to select</p>
      <Button onClick={handleUpload} disabled={isLoading} className="bg-emerald-900 text-white hover:bg-emerald-800">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <UploadCloud className="mr-2 h-4 w-4" />
            Upload Invoice
          </>
        )}
      </Button>
    </div>
  )
}
