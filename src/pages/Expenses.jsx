import AnimatedPage from "../components/AnimatedPage";

export default function ExpensesPage() {
  return (
    <AnimatedPage>
      <div
        id="oplaty"
        className="mx-2 sm:mx-6 pb-4 sm:pb-6 lg:pt-8 lg:pb-2 h-full xl:mx-12 3xl:mx-16"
      >
        <p className="pt-4 p-2 sm:pt-6 sm:p-4 lg:pt-8 lg:pb-2 text-3xl 2xl:p-16 2xl:pt-8 text-center 3xl:text-4xl font-bold text-[#054b28]">
          Opłaty
        </p>{" "}
        <section className="text-center">--- DO UZUPEŁNIENIA ---</section>
      </div>
    </AnimatedPage>
  );
}
