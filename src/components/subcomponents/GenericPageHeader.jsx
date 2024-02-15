import Breadcrumbs from "../ui/Breadcrumbs";

const GenericPageHeader = ({title, crumbs}) => {
  return (
    <section id="genericPageHeader" className="py-20 text-white">
      <div className="container flex flex-col gap-4 items-center justify-center">
        <h1 className="font-heavy text-4xl">{title}</h1>
        <Breadcrumbs crumbs={crumbs}/>
      </div>
    </section>
  )
}

export default GenericPageHeader
