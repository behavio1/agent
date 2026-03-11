"use client";

import { useState } from "react";
import { payRent } from "@/actions/finance";

export function PayRentForm({ defaultAmount }: { defaultAmount: number }) {
  const [amount, setAmount] = useState(defaultAmount.toString());
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData(e.currentTarget);
      const res = await payRent(formData);
      if (res?.error) {
        setError(res.error);
      } else if (res?.success) {
        setSuccess(true);
        setAmount("");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Failed to process payment.");
      } else {
        setError("Failed to process payment.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && (
        <div className="bg-red-100 border-2 border-red-500 text-red-700 p-2 font-bold text-sm">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 border-2 border-green-500 text-green-700 p-2 font-bold text-center animate-bounce">
          <p className="font-manga text-xl tracking-wider">BOOM! PAID!</p>
          <p className="text-sm">Your payment was successful.</p>
        </div>
      )}

      <div>
        <label htmlFor="amount" className="block text-sm font-bold uppercase mb-1">
          Payment Amount ($)
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          step="0.01"
          min="1"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border-4 border-black p-3 font-bold text-xl shadow-[4px_4px_0_0_#000] focus:outline-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all"
          placeholder="0.00"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full mt-4 bg-blue-600 text-white font-manga text-2xl uppercase py-4 px-8 border-4 border-black hover:bg-blue-500 hover:-translate-y-1 transition-transform shadow-[4px_4px_0_0_#000] active:translate-y-1 active:translate-x-1 active:shadow-none ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "PROCESSING..." : "PAY NOW!"}
      </button>

      <p className="text-xs text-center text-gray-500 font-bold uppercase mt-2">
        *This is a mock payment for demonstration purposes.
      </p>
    </form>
  );
}
