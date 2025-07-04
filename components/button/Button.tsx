import Image from "next/image";

interface ButtonProps {
  type: "button" | "submit";
  children: React.ReactNode;
  //   title: string;
  icon?: string;
  variant?: string;
}
const Button = ({ type, children, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border cursor-pointer ${variant}`}
    >
      {icon && <Image src={icon} alt={"icon"} width={24} height={24} />}
      <label className="bold-16vwhitespace-nowrap ">{children}</label>
    </button>
  );
};

export default Button;
