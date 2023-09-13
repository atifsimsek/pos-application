const Categories = () => {
  const categories = [
    { title: "Tümü" },
    { title: "Yiyecek" },
    { title: "İçecek" },
    { title: "İçecek" },
    { title: "İçecek" },
    { title: "İçecek" },
    { title: "İçecek" },
    { title: "İçecek" },
    { title: "İçecek" },
    { title: "İçecek" },
  ];

  return (
    <ul className="flex md:flex-col  gap-4 ">
      {categories.map((category, index) => (
        <li
          key={index}
          className="bg-green-500 px-6 py-10 text-white cursor-pointer
      hover:bg-pink-600 transition-all text-center text-lg  min-w-[145px] "
        >
          <span>{category.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
