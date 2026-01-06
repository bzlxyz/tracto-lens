interface AssetDetailsProps {
  data: any
}

export function AssetDetails({ data }: AssetDetailsProps) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      <h3 className="mb-4 font-semibold text-slate-900">Asset Details</h3>
      <div className="mb-4">
        <p className="text-xs font-medium text-slate-500 uppercase">Description</p>
        <p className="mt-1 text-sm font-semibold text-slate-900">{data.description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase">HSN/SAC</p>
          <p className="mt-1 text-sm text-slate-900">{data.hsnsac}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase">Quantity</p>
          <p className="mt-1 text-sm text-slate-900">{data.quantity}</p>
        </div>
      </div>
    </div>
  )
}
