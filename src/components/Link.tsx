type LinkProps = {
  href: string
  children: React.ReactNode
}

export const Link = ({ href, children }: LinkProps) => {
  return (
    <a
      href={href}
      className="font-black bg-green-500 text-green-900 border-black inline-flex h-16 text-xl items-center justify-center overflow-hidden rounded border-2 border-neutral-900 px-6 [box-shadow:6px_6px_rgb(23_23_23)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
    >
      {children}
    </a>
  )
}
