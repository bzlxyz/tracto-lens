import { Badge } from "@/components/ui/badge"

interface DealerValidationProps {
  data: any
}

export function DealerValidation({ data }: DealerValidationProps) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      <h3 className="mb-4 font-semibold text-slate-900">Dealer Validation</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase">Dealer Name</p>
          <p className="mt-1 text-sm text-slate-900">{data.dealer_name}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase">GSTIN</p>
          <div className="mt-1 flex items-center gap-2">
            <p className="text-sm text-slate-900">{data.gstin}</p>
            {!data.is_dealer_blacklisted && (
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                Verified
              </Badge>
            )}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase">Invoice No</p>
          <p className="mt-1 text-sm text-slate-900">{data.invoice_no}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase">Date</p>
          <p className="mt-1 text-sm text-slate-900">{data.date}</p>
        </div>
      </div>
    </div>
  )
}
