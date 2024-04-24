import Image from "next/image";

const SidebarItem = ({ icon, primary }) => {
  return (
    <div className={`p-3 rounded-md `}>
      <Image src={icon} />
    </div>
  );
};

export default SidebarItem;
