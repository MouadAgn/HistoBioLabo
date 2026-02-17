import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { DocumentPage } from "@/components/documents/document-page"
import { documents } from "@/lib/documents"

type DocumentPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return documents.map((document) => ({ slug: document.slug }))
}

export default async function Page({ params }: DocumentPageProps) {
  const { slug } = await params
  const document = documents.find((item) => item.slug === slug)

  if (!document) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <DocumentPage document={document} />
      </main>
    </>
  )
}

