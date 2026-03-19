import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

type TActiveLinkProps = {
  to: string;
  children: React.ReactNode;
  exact?: boolean;
  className?: string;
};

export default function ActiveLink({
  to,
  children,
  exact = false,
  className,
}: TActiveLinkProps) {
  return (
    <NavLink
      to={to}
      end={exact}
      className={({ isActive }) =>
        cn(
          "text-base 2xl:text-lg font-medium transition-all duration-300 hover:text-primary dark:hover:text-primary",
          className,
          isActive && "text-primary dark:text-primary",
        )
      }
    >
      {children}
    </NavLink>
  );
}
