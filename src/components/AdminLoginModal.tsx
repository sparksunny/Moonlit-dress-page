import React, { useState } from 'react';
import { Lock, Key, X, Eye, EyeOff, AlertCircle, ShieldCheck } from 'lucide-react';
import { ADMIN_PASSWORD } from '../utils/storage';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setError(false);
      setPassword('');
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F130B]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-[#FAF7F2] rounded-2xl border border-[#E3D4C1] shadow-2xl p-6 sm:p-8 text-[#322016] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative top accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D5B895] via-[#A88665] to-[#D5B895]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 text-[#7F6B5A] hover:text-[#2B1B12] hover:bg-[#EFE5D8] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="mx-auto w-12 h-12 rounded-full bg-[#EFE4D4] border border-[#DFCDB9] flex items-center justify-center text-[#866345] shadow-2xs">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-[#2B1B12] font-normal tracking-wide">
            Atelier Control Panel
          </h3>
          <p className="text-xs text-[#7D6857] max-w-xs mx-auto leading-relaxed font-light">
            Enter the administrator password to edit products, update model photos, and customize website text.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs uppercase tracking-[0.18em] text-[#634E3E] font-medium">
              Admin Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#98816E]">
                <Key className="w-4 h-4" />
              </div>
              <input
                id="admin-password-input"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="Enter password..."
                autoFocus
                className={`w-full pl-10 pr-11 py-3 text-sm bg-[#FFFFFF] rounded-xl border ${
                  error ? 'border-[#C84545] focus:ring-[#C84545]' : 'border-[#DAC9B5] focus:border-[#866345]'
                } focus:outline-hidden focus:ring-1 transition-all text-[#2A1A11] placeholder-[#B5A08D]`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#98816E] hover:text-[#322016]"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {error && (
              <div className="flex items-center gap-1.5 text-xs text-[#B52B2B] pt-1 animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Incorrect password. Please try again.</span>
              </div>
            )}
          </div>

          <button
            id="admin-submit-btn"
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#322016] hover:bg-[#483324] text-[#FAF7F0] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
          >
            <ShieldCheck className="w-4 h-4 text-[#D5B895]" />
            <span>Unlock Admin Panel</span>
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-[#EAE0D3] text-center">
          <p className="text-[11px] text-[#8C7664] font-light">
            Need help? The preset administrator password is configured for authorized staff.
          </p>
        </div>
      </div>
    </div>
  );
};
