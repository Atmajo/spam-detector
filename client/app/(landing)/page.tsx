"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";

export default function Home() {
  const mutation = useMutation({
    mutationFn: async (body: FormData) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/predict`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: body.get("text") }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
  });

  const onSubmit = (formdata: FormData) => {
    mutation.mutate(formdata);
  };

  return (
    <main className="flex flex-col items-center min-h-screen font-[family-name:var(--font-geist-mono)] py-20">
      <h1 className="text-4xl font-bold">Despamify</h1>
      <form
        action={onSubmit}
        className="flex flex-col items-center w-full mt-5 gap-10"
      >
        <Textarea
          name="text"
          disabled={mutation.isPending}
          className="w-96 h-96 bg-white/10 border rounded-2xl border-black/55"
        />
        <Button
          type="submit"
          variant={"secondary"}
          className="rounded-xl"
          disabled={mutation.isPending}
        >
          Check
        </Button>
      </form>

      <div className="mt-10">
        {mutation.isError ? (
          <p className="text-red-500">{mutation.error.message}</p>
        ) : null}
        {mutation.isSuccess ? (
          <p className="text-green-500">
            {mutation.data && mutation.data?.prediction}
          </p>
        ) : null}
      </div>
    </main>
  );
}
