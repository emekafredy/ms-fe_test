import { FC } from "react";
import Image from "next/image";
import InfoIcon from "../../../assets/icons/shared/icon-info.svg";
import { WalletType } from "@/types/wallet.type";
import { formatWalletData } from "@/utils";

export const TransactionsSummary: FC<{ wallet: WalletType }> = ({ wallet }) => {
  const formattedWallet = formatWalletData(wallet);

  return (
    <div className="w-[100%] md:w-[30%]">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-secondary-100 leading-10">
            {" "}
            Ledger Balance{" "}
          </p>
          <Image src={InfoIcon} alt="info icon" />
        </div>
        <p className="font-extrabold text-2xl lg:text-3xl">
          USD {formattedWallet.ledger_balance}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-secondary-100 leading-10">
            {" "}
            Total Payout{" "}
          </p>
          <Image src={InfoIcon} alt="info icon" />
        </div>
        <p className="font-extrabold text-2xl lg:text-3xl">
          USD {formattedWallet.total_payout}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-secondary-100 leading-10">
            {" "}
            Total Revenue{" "}
          </p>
          <Image src={InfoIcon} alt="info icon" />
        </div>
        <p className="font-extrabold text-2xl lg:text-3xl">
          USD {formattedWallet.total_revenue}
        </p>
      </div>

      <>
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-secondary-100 leading-10">
            {" "}
            Pending Payout{" "}
          </p>
          <Image src={InfoIcon} alt="info icon" />
        </div>
        <p className="font-extrabold text-2xl lg:text-3xl">
          USD {formattedWallet.pending_payout}
        </p>
      </>
    </div>
  );
};
