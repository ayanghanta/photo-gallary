import { PiWarningCircle } from "react-icons/pi";

function ErrorMessage({ message = "Something went wrong. Please try again." }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 px-4 text-center">
      <PiWarningCircle size={40} className="text-red-500" />

      <h2 className="text-lg font-semibold text-gray-800">
        Unable to load photos
      </h2>

      <p className="max-w-sm text-sm text-gray-500">{message}</p>
    </div>
  );
}

export default ErrorMessage;
