type HeaderSection = {
  title: string;
  paragraph: string;
};

const SectionHead = ({ title, paragraph }: HeaderSection) => {
  return (
    <div>
      <p className="text-[16px] font-semibold">{title}</p>
      <p className="text-[14px]">{paragraph}</p>
    </div>
  );
};

export default SectionHead;
