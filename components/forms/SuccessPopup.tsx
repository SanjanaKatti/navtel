"use client";

import React from "react";
import { CheckCircle } from "phosphor-react";

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export function SuccessPopup({
  isOpen,
  onClose,
  message = "Thank you, we will contact you at the earliest.",
}: SuccessPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative bg-white w-full max-w-md rounded-[2rem] shadow-2xl p-8 md:p-10 text-center animate-in fade-in zoom-in duration-300">
        <CheckCircle
          size={56}
          weight="fill"
          className="mx-auto mb-6 text-green-500"
        />
        <p className="text-h3 text-brand-navy mb-6 leading-relaxed">
          {message}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="w-full py-4 bg-brand-navy text-white rounded-full font-black text-sm hover:bg-brand-primary transition-all transform hover:-translate-y-0.5 active:scale-[0.98]"
        >
          OK
        </button>
      </div>
    </div>
  );
}
