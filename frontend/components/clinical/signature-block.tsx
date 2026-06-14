interface SignatureParty {
  role: string
  name: string
  credentials?: string
  registryNo?: string
  signedAt?: string
  hash?: string
  seal?: boolean
}

interface SignatureBlockProps {
  doctor: SignatureParty
  hospital?: SignatureParty
  layout?: 'horizontal' | 'vertical'
}

export function SignatureBlock({ doctor, hospital, layout = 'horizontal' }: SignatureBlockProps) {
  return (
    <div
      className={
        layout === 'horizontal'
          ? 'grid grid-cols-1 md:grid-cols-2 gap-8'
          : 'space-y-8'
      }
    >
      <SignaturePartyCard party={doctor} />
      {hospital && <SignaturePartyCard party={hospital} />}
    </div>
  )
}

function SignaturePartyCard({ party }: { party: SignatureParty }) {
  return (
    <div className="space-y-3">
      <p className="label-clinical text-[#64748B]">{party.role}</p>
      {party.seal ? (
        <div className="flex h-16 w-40 items-center justify-center rounded-lg border-2 border-[#2563EB]/30 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE]">
          <div className="text-center">
            <span className="material-icons-round text-[#2563EB] text-[28px]" aria-hidden="true">
              workspace_premium
            </span>
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#2563EB] mt-0.5">Hospital Seal</p>
          </div>
        </div>
      ) : (
        <div className="h-12 border-b-2 border-[#0F172A]/80 w-48" aria-hidden="true" />
      )}
      <div>
        <p className="text-[14px] font-semibold text-[#0F172A]">{party.name}</p>
        {party.credentials && (
          <p className="text-[13px] text-[#64748B]">{party.credentials}</p>
        )}
        {party.registryNo && (
          <p className="mono-data text-[12px] text-[#64748B] mt-1">PMDC No.: {party.registryNo}</p>
        )}
        {party.signedAt && (
          <p className="mono-data text-[12px] text-[#64748B]">Signed: {party.signedAt}</p>
        )}
        {party.hash && (
          <p className="mono-data text-[12px] text-[#64748B]">Sig Hash: {party.hash}</p>
        )}
      </div>
    </div>
  )
}
