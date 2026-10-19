export default function SectionHeading({
  title,
  index,
}: {
  title: string
  index: string
}) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="text-xs font-medium text-muted-foreground">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
  )
}
