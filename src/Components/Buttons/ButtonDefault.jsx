export default function ButtonDefault({ content, action }) {
  return (
    <button onClick={action} className="transition-all bg-gradient-to-r from-accent-cyan font-bold to-accent-blue text-white w-[250px] py-3 text-sm rounded-full hover:brightness-150">
      {content}
    </button>
  );
}
