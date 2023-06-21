const SectionHeading = ({ title, description, column }) => {
  return (
    <header className={`section-heading flex ${column ? `flex-col items-center gap-5` : `justify-between items-center`} mb-10`}>
        <h3 className="text-xl font-bold uppercase">{title}</h3>
        {description && 
        (<p className="text-gray-600 font-medium text-sm text-center">
          {description}
        </p>)
        }
    </header>
  )
}

export default SectionHeading
