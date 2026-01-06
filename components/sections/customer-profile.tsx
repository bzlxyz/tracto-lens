interface CustomerProfileProps {
  data: any
}

export function CustomerProfile({ data }: CustomerProfileProps) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      <h3 className="mb-4 font-semibold text-slate-900">Customer Profile</h3>
      <div className="space-y-3">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase">Name</p>
          <p className="mt-1 text-sm text-slate-900">{data.customer_name}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase">Address</p>
          <p className="mt-1 text-sm text-slate-900">{data.customer_address}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase">Phone</p>
          <p className="mt-1 text-sm text-slate-900">{data.customer_phone}</p>
        </div>
      </div>
    </div>
  )
}
