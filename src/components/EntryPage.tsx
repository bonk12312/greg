interface EntryPageProps {
  onEnter: () => void;
}

function EntryPage({ onEnter }: EntryPageProps) {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <button
        onClick={onEnter}
        className="entry-button text-3xl md:text-5xl font-bold px-12 py-6 bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 active:shadow-none active:translate-x-2 active:translate-y-2"
        style={{ fontFamily: 'Comic Sans MS, cursive' }}
      >
        Enter Greg Universe
      </button>
    </div>
  );
}

export default EntryPage;
