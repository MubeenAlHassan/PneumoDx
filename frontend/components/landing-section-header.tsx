interface LandingSectionHeaderProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  description?: string
  align?: 'left' | 'center'
  size?: 'default' | 'large'
}

export function LandingSectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  align = 'center',
  size = 'default',
}: LandingSectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleClass =
    size === 'large'
      ? 'text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08]'
      : 'text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12]'

  return (
    <div className={`max-w-3xl mb-14 md:mb-16 ${alignClass}`}>
      {eyebrow && (
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B] mb-4">{eyebrow}</p>
      )}
      <h2 className={`${titleClass} font-medium tracking-tight text-[#0F172A]`}>
        {title}
        {titleAccent && (
          <>
            {' '}
            <span className="font-serif italic text-[#2563EB]">{titleAccent}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`mt-4 text-[16px] md:text-[17px] text-[#64748B] leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
