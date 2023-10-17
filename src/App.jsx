import Done from "./components/Done";
import ReviewCard from "./components/ReviewCard";

function App() {
  return (
    <main className="px-3 lg:px-40 py-10 lg:py-28 flex flex-col lg:flex-row justify-between items-center">
      <section className="space-y-5 lg:w-[560px]">
        <img
          src="./star.jpg"
          alt="icon star"
          className="bg-[#F5C044] rounded-full p-4 w-[64px]"
        />

        <h1 className="text-[#18181B] font-bold text-4xl">Reviewers</h1>
        <p className="text-[#52525A] text-xl">
          Reviewers is where people can access guidelines, checklists, and other
          tools to assist them in reviewing papers or manuscripts. It provides a
          structured approach to ensure that the review process is thorough,
          efficient, and consistent.
        </p>
        <ul className="space-y-4 pt-4">
          <Done title="Checklist to Review an Academic Paper" />
          <Done title="Peer Review Checklist" />
          <Done title="Checklist for Editors, Reviewers, and Authors of SPIE Journals" />
        </ul>
      </section>

      <section className="flex flex-col gap-10 w-[380px] md:w-[500px] pt-8 lg:pt-0">
        <div className="flex justify-end">
          <ReviewCard
            image="./google-testimonial.png"
            name="Samantha Lee"
            description="The checklist ensures that the review process is thorough"
            color="text-[#D4D4D8]"
          />
        </div>

        <div className="flex justify-start">
          <ReviewCard
            image="./meta-testimonial.png"
            name="Rachel Patel"
            description="I highly recommend the Writecream Business Description"
            color="text-[#F5C044]"
          />
        </div>
      </section>
    </main>
  );
}

export default App;
