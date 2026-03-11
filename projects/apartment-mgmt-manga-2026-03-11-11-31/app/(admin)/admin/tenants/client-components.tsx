"use client";

import { useState } from "react";
import { approveApplication, rejectApplication, assignProperty, unassignProperty } from "@/app/actions/tenant";

export function ApproveRejectButtons({ applicationId }: { applicationId: string }) {
  const [loading, setLoading] = useState(false);

  async function handleApprove() {
    setLoading(true);
    await approveApplication(applicationId);
    setLoading(false);
  }

  async function handleReject() {
    setLoading(true);
    await rejectApplication(applicationId);
    setLoading(false);
  }

  return (
    <>
      <button 
        onClick={handleApprove}
        disabled={loading}
        className="flex-1 bg-green-500 text-white font-bold uppercase py-2 text-center border-2 border-black hover:bg-green-600 transition-colors shadow-[2px_2px_0_0_#000] disabled:opacity-50"
      >
        Approve
      </button>
      <button 
        onClick={handleReject}
        disabled={loading}
        className="flex-1 bg-red-500 text-white font-bold uppercase py-2 text-center border-2 border-black hover:bg-red-600 transition-colors shadow-[2px_2px_0_0_#000] disabled:opacity-50"
      >
        Reject
      </button>
    </>
  );
}

export function AssignPropertyForm({ tenantProfileId, availableProperties }: { tenantProfileId: string, availableProperties: { id: string, title: string }[] }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const propertyId = formData.get("propertyId") as string;
    
    if (!propertyId) return;

    setLoading(true);
    await assignProperty(tenantProfileId, propertyId);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <select 
        name="propertyId" 
        className="border-2 border-black p-2 font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400 bg-white"
        required
      >
        <option value="">Select a property...</option>
        {availableProperties.map(p => (
          <option key={p.id} value={p.id}>{p.title}</option>
        ))}
      </select>
      <button 
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white font-bold uppercase py-2 text-center border-2 border-black hover:bg-blue-600 transition-colors shadow-[2px_2px_0_0_#000] disabled:opacity-50 mt-2"
      >
        {loading ? "Assigning..." : "Assign"}
      </button>
    </form>
  );
}

export function UnassignPropertyButton({ propertyId }: { propertyId: string }) {
  const [loading, setLoading] = useState(false);

  async function handleUnassign() {
    if (!confirm("Are you sure you want to unassign this tenant from their property?")) return;
    
    setLoading(true);
    await unassignProperty(propertyId);
    setLoading(false);
  }

  return (
    <button 
      onClick={handleUnassign}
      disabled={loading}
      className="w-full bg-yellow-500 text-black font-bold uppercase py-2 text-center border-2 border-black hover:bg-yellow-600 transition-colors shadow-[2px_2px_0_0_#000] disabled:opacity-50"
    >
      Unassign
    </button>
  );
}
