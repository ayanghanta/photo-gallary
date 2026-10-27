function Loader() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500" />

      <p className="text-sm font-medium text-gray-500">Loading photos...</p>
    </div>
  );
}

export default Loader;
