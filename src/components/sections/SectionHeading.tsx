export default function SectionHeading({
  title,
  index,
}: {
  title: string
  index: string
}) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold tracking-tight text-foreground">{title}</h2>
      <div className="mt-2 h-0.5 w-full bg-border" />
    </div>
  )
}
