import { useEffect, useRef } from 'react';

export const OtpInput = ({ length = 6, onComplete }) => {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    e.target.value = value;

    if (value.length === 1 && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }

    const otp = inputsRef.current.map((input) => input.value).join('');
    if (otp.length === length && onComplete) {
      onComplete(otp);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '');
    if (pastedData.length === length) {
      pastedData.split('').forEach((char, index) => {
        inputsRef.current[index].value = char;
      });
      inputsRef.current[length - 1].focus();
      if (onComplete) onComplete(pastedData);
    }
  };

  useEffect(() => {
    if (inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, []);

  return (
    <div className="flex justify-between gap-2">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          maxLength={1}
          inputMode="numeric"
          className="w-[2.8rem] h-14 md:w-[3.2rem] md:h-16 text-center text-xl font-bold bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0 outline-none transition-all shadow-sm text-brand-dark"
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          required
        />
      ))}
    </div>
  );
};
