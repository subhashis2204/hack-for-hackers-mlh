function SkillCard({ children }) {
  return (
    <>
      <span className="px-2 py-1 text-[13px] rounded bg-amber-300 hover:bg-amber-400">
        {children}
      </span>
    </>
  )
}

export default SkillCard
