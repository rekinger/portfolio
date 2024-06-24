import {
  NavbarBrand,
  Navbar as NextUINavbar
} from "@nextui-org/navbar";

export const Navbar = () => {

  return (
    <NextUINavbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Welcome!</p>
      </NavbarBrand>
    </NextUINavbar>
  );
};
