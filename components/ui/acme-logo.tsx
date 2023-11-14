import { GlobeAltIcon } from "@heroicons/react/24/outline"

import { lusitana } from "@/lib/fonts"

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-foreground`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[33px]">AI Note</p>
    </div>
  )
}
