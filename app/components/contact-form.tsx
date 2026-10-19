"use client";

import { FormEvent, useState } from "react";

const fields = [
  { name: "firstName", label: "First Name", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Last Name", type: "text", autoComplete: "family-name" },
  { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel" },
  { name: "email", label: "Email Address", type: "email", autoComplete: "email" },
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="flex w-full max-w-[659px] flex-col gap-3.5" onSubmit={onSubmit}>
      <div className="grid gap-3.5 sm:grid-cols-2">
        {fields.slice(0, 2).map((field) => (
          <Field key={field.name} {...field} />
        ))}
      </div>
      <div className="grid gap-3.5 sm:grid-cols-2">
        {fields.slice(2).map((field) => (
          <Field key={field.name} {...field} />
        ))}
      </div>
      <label className="flex h-[200px] flex-col rounded-[2px] border border-[#989898] bg-white px-5 py-6">
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          required
          placeholder="Message"
          className="h-full w-full resize-none bg-transparent font-display text-lg font-medium text-black outline-none placeholder:text-black lg:text-2xl"
        />
      </label>
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center bg-black px-12 py-5 text-lg font-semibold text-white hover:bg-neutral-800 sm:w-[285px]"
        >
          {sent ? "Message sent" : "Submit"}
        </button>
      </div>
      {sent ? (
        <p className="text-right text-base text-black" role="status">
          Thanks. SKE Plus will follow up.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  name,
  label,
  type,
  autoComplete,
}: {
  name: string;
  label: string;
  type: string;
  autoComplete: string;
}) {
  return (
    <label className="rounded-[2px] border border-[#989898] bg-white px-5 py-6">
      <span className="sr-only">{label}</span>
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={label}
        className="w-full bg-transparent font-display text-lg font-medium text-black outline-none placeholder:text-black lg:text-2xl"
      />
    </label>
  );
}
