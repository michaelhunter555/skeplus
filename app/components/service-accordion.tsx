"use client";

import { useState } from "react";

const groups = [
  {
    label: "Trucking services",
    items: [
      {
        id: "local-hauling",
        title: "Local hauling",
        body: "Short runs and local pickups, scheduled around your freight.",
      },
      {
        id: "longer-routes",
        title: "Longer routes",
        body: "Hauls that leave the local area, with the route set before departure.",
      },
      {
        id: "load-questions",
        title: "Load questions",
        body: "Send the pickup, the drop, and what you are shipping. We will reply with next steps.",
      },
    ],
  },
  {
    label: "Mechanic services",
    items: [
      {
        id: "engine-repair",
        title: "Engine repair",
        body: "Engine work in the bay, from a focused repair to a fuller teardown.",
      },
      {
        id: "diagnostics",
        title: "Diagnostics",
        body: "We look over the engine problem and explain what we find.",
      },
      {
        id: "electrical",
        title: "Batteries and electrical",
        body: "Battery replacement and work on starting and charging systems.",
      },
    ],
  },
];

export function ServiceAccordion() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  function toggle(id: string) {
    setOpenIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {groups.map((group) => (
        <div key={group.label} className="flex flex-col gap-3.5">
          <h3 className="font-display text-sm tracking-[0.22em] uppercase">{group.label}</h3>
          {group.items.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div key={item.id} className="border border-[#989898] bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left font-display text-2xl font-medium"
                >
                  {item.title}
                  <span className="shrink-0 text-base font-semibold tracking-normal">
                    {isOpen ? "Close" : "Open"}
                  </span>
                </button>
                {isOpen ? (
                  <p className="px-5 pb-6 font-copy text-lg leading-[1.35]">{item.body}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
