type HeaderSection = {
  title: string;
  paragraph: string;
};

const SectionHead = ({ title, paragraph }: HeaderSection) => {
  return (
    <div>
      <p className="text-[18px] font-semibold">{title}</p>
      <p className="text-[16px]">{paragraph}</p>
    </div>
  );
};

export default SectionHead;
