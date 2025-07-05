import Image from "next/image";

interface ButtonProps {
  type: "button" | "submit";
  children: React.ReactNode;
  icon?: string;
  variant?: string;
  full?: boolean;
}
const Button = ({ type, children, icon, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${
        full && "w-full"
      } ${variant}`}
    >
      {icon && <Image src={icon} alt={"icon"} width={24} height={24} />}
      <label className="bold-16vwhitespace-nowrap cursor-pointer ">
        {children}
      </label>
    </button>
  );
};

export default Button;
