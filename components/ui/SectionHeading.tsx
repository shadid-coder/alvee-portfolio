export default function SectionHeading({
  title,
  description,
  align = "center",
}: {
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto mb-12 max-w-xl text-center" : "mb-12"}>
      <div className={align === "center" ? "mx-auto mb-4 divider" : "mb-4 divider"} />
      <h2 className="font-display text-3xl font-semibold text-ivory md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-slate-400">{description}</p>}
    </div>
  );
}
