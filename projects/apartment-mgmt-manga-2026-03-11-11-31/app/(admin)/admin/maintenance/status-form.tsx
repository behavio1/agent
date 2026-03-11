"use client";

import { useActionState } from "react";
import { updateMaintenanceStatus } from "@/actions/maintenance";
import { MaintenanceStatus } from "@prisma/client";

export function MaintenanceStatusForm({
  requestId,
  currentStatus,
}: {
  requestId: string;
  currentStatus: MaintenanceStatus;
}) {
  const action = updateMaintenanceStatus.bind(null, requestId);
  const [state, formAction, isPending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <label className="font-manga text-xl uppercase tracking-widest text-black">Status:</label>
        <select
          name="status"
          defaultValue={currentStatus}
          className="border-4 border-black p-2 font-bold focus:outline-none focus:ring-4 focus:ring-red-400 bg-white"
        >
          <option value={MaintenanceStatus.OPEN}>OPEN 🚨</option>
          <option value={MaintenanceStatus.IN_PROGRESS}>IN PROGRESS 🛠️</option>
          <option value={MaintenanceStatus.RESOLVED}>RESOLVED ✨</option>
        </select>
        <button
          type="submit"
          disabled={isPending}
          className="bg-black text-white px-4 py-2 font-manga text-xl uppercase tracking-widest hover:bg-gray-800 transition-colors border-2 border-black shadow-[2px_2px_0_0_#ef4444] disabled:opacity-50"
        >
          {isPending ? "..." : "Update"}
        </button>
      </div>
      {state?.error && (
        <p className="text-red-600 font-bold text-sm uppercase">{state.error}</p>
      )}
    </form>
  );
}
