"use client"

import { ChevronLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { extractionData } from "@/lib/mock-data"
import { DealerValidation } from "@/components/sections/dealer-validation"
import { AssetDetails } from "@/components/sections/asset-details"
import { Financials } from "@/components/sections/financials"
import { CustomerProfile } from "@/components/sections/customer-profile"

interface ExtractionPanelProps {
  onBack: () => void
}

export function ExtractionPanel({ onBack }: ExtractionPanelProps) {
  const isApproved = extractionData.risk_level === "LOW"

  return (
    <div className="flex w-1/2 flex-col overflow-y-auto bg-white">
      {/* Sticky Header */}
      <div className="sticky top-0 border-b border-gray-200 bg-white px-8 py-6">
        <Button variant="ghost" onClick={onBack} className="mb-4 text-slate-600 hover:text-emerald-900">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">Extraction Results</h2>
      </div>

      {/* Verdict Banner */}
      {isApproved && (
        <div className="m-6 flex items-start gap-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
          <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-700 mt-0.5" />
          <div>
            <p className="font-semibold text-emerald-700">Approved for Underwriting</p>
            <p className="text-sm text-emerald-600">Risk level is low. This application is ready for processing.</p>
          </div>
        </div>
      )}

      {/* Data Sections */}
      <div className="space-y-4 px-6 pb-8">
        <DealerValidation data={extractionData} />
        <AssetDetails data={extractionData} />
        <Financials data={extractionData} />
        <CustomerProfile data={extractionData} />
      </div>

      {/* Action Footer */}
      <div className="border-t border-gray-200 bg-white px-6 py-4 flex gap-3">
        <Button variant="outline" className="flex-1 border-red-300 text-red-600 hover:bg-red-50 bg-transparent">
          Reject
        </Button>
        <Button className="flex-1 bg-emerald-900 text-white hover:bg-emerald-800">Push to LOS</Button>
      </div>
    </div>
  )
}
