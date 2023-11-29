import Image from "next/image";
import ReceiptIcon from "../../../assets/icons/shared/icon-receipt.svg";
import { Button } from "@/components/Button";

export const EmptyList = ({ clearFilters }: { clearFilters: () => void }) => {
  return (
    <div className="w-[30%] m-auto flex flex-col items-start justify-center my-40 gap-8">
      <div className="text-left w-12 h-12 flex items-center justify-center bg-gray-200 rounded-xl">
        <Image src={ReceiptIcon} alt="receipt-icon" />
      </div>

      <h2 className="text-2xl text-primary-100 font-extrabold">
        No matching transaction found for selected filter
      </h2>

      <p className="text-md text-secondary-100">
        Change your filters to see more result or add a new product
      </p>

      <Button
        content="Clear Filter"
        btnClass="tertiary"
        size="large"
        handleClick={() => clearFilters()}
      />
    </div>
  );
};
