export default function InputForms({ label }: { label: string }) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        className="w-300 h-5 border border-#160b30 rounded-6"
        type="text"
      />
    </div>
  );
}
