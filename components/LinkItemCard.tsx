import Link from "next/link";

interface LinkItemCardProps {
  title: string;
  description: string;
  href: string;
}

const LinkItemCard = ({ title, description, href }: LinkItemCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <div className="p-4 bg-gray-100 border-t border-gray-200">
        <Link href={href || ""} className="text-blue-500 font-semibold">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default LinkItemCard;
