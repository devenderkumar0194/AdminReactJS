export default function Watermark() {
  return (
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
        <h1 className="text-[120px] font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent opacity-20 rotate-[-30deg] tracking-widest select-none drop-shadow-2xl">
          DEMO VERSION
        </h1>
      </div>
  );
}