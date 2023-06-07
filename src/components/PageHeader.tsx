import { ReactNode } from "react"

export interface PageHeader {
children: ReactNode
}
export function PageHeader({children}: PageHeader) {
return (
<h1 className="text-4xl">
{children}
</h1>
)
}
