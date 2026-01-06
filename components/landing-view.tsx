import { Scan, Shield, Database } from "lucide-react"
import { UploadZone } from "@/components/upload-zone"

interface LandingViewProps {
  onAnalyze: () => void
}

export function LandingView({ onAnalyze }: LandingViewProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="mb-6 max-w-3xl text-5xl font-bold tracking-tight text-emerald-900">
          Automate Tractor Loan Underwriting.
        </h1>
        <p className="mb-12 max-w-2xl text-lg text-slate-500">
          Eliminate manual data entry. Extract dealer quotations, validate GSTIN, and assess risk in real-time.
        </p>

        {/* Upload Component */}
        <div className="mb-16 w-full max-w-2xl">
          <UploadZone onAnalyze={onAnalyze} />
        </div>

        {/* Trust Signals Grid */}
        <div className="grid w-full max-w-2xl grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-3">
            <Scan className="h-6 w-6 text-emerald-900" />
            <h3 className="font-semibold text-slate-900">Handwriting Recognition</h3>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Shield className="h-6 w-6 text-emerald-900" />
            <h3 className="font-semibold text-slate-900">GSTIN & Fraud Check</h3>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Database className="h-6 w-6 text-emerald-900" />
            <h3 className="font-semibold text-slate-900">Price Benchmarking</h3>
          </div>
        </div>
      </section>
    </main>
  )
}
