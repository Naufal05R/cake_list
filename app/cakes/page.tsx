import CakeTable from "@/components/cake-table";

export default function CakesPage({}) {
  return (
    <main className="relative mx-auto min-h-screen max-w-screen-xl px-4 py-2 sm:px-8 sm:py-4 lg:px-16 lg:py-8">
      <hgroup className="mb-5 flex items-center justify-between gap-1">
        
      </hgroup>
      <section className="max-w-full overflow-x-scroll">
        <CakeTable />
      </section>
    </main>
  );
}
