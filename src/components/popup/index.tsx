import React, { ReactNode } from "react";

interface FullScreenPopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const FullScreenPopup: React.FC<FullScreenPopupProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  const _renderClose = () => {
    return (
      <div className="absolute top-0 right-0 pt-2 pr-4">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full h-[85%]">
        {_renderClose()}
        <div className="p-8 h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default FullScreenPopup;
