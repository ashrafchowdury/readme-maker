import { BiChevronDown } from "react-icons/bi";

const FQA = () => {
  const question = [
    {
      qus: "How this Readme Maker works?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque recusandae ex labore consequuntur doloribus dicta rerum nisi, amet voluptates sit sed non, nihil voluptatibus velit quae magni, consequatur minus quod.",
    },
    {
      qus: "Can I save the tamplates?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque recusandae ex labore consequuntur doloribus dicta rerum nisi, amet voluptates sit sed non, nihil voluptatibus velit quae magni, consequatur minus quod.",
    },
    {
      qus: "I need to for using this applicaton?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque recusandae ex labore consequuntur doloribus dicta rerum nisi, amet voluptates sit sed non, nihil voluptatibus velit quae magni, consequatur minus quod.",
    },
    {
      qus: "How can I trust this platform?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque recusandae ex labore consequuntur doloribus dicta rerum nisi, amet voluptates sit sed non, nihil voluptatibus velit quae magni, consequatur minus quod.",
    },
  ];
  return (
    <>
      {question.map((value) => {
        return (
          <details class="group py-3 text-lg border-b border-light dark:border-dark">
            <summary class="flex items-center justify-between cursor-pointer py-1 font-medium text-xl">
              {value.qus}
              <BiChevronDown className=" text-3xl rotate-0 transform group-open:rotate-180" />
            </summary>
            <p className=" py-5 font-normal">{value.ans}</p>
          </details>
        );
      })}
    </>
  );
};

export default FQA;
