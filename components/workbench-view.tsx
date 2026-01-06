"use client"
import { DocumentViewer } from "@/components/document-viewer"
import { ExtractionPanel } from "@/components/extraction-panel"

interface WorkbenchViewProps {
  onBack: () => void
}

export function WorkbenchView({ onBack }: WorkbenchViewProps) {
  return (
    <div className="flex h-[calc(100vh-73px)]">
      {/* Left Panel - Document Viewer */}
      <DocumentViewer />

      {/* Right Panel - Data Extraction */}
      <ExtractionPanel onBack={onBack} />
    </div>
  )
}
